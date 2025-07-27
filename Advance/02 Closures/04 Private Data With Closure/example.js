 // 🔹 Account System with Private Balance

// ✅ Yeh function ek account banata hai jisme balance private hota hai
// ❌ Direct access nahi milta balance variable ka, only through functions

function createAccount(initialBalance) {
  let balance = initialBalance; // 👈 yeh private hai, sirf niche ke functions hi access kar sakte hain

  return {
    getBalance: function () {
      console.log("💰 Balance:", balance);
    },
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log("✅ Deposited:", amount);
      }
    },
    withdraw: function (amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log("🟢 Withdrawn:", amount);
      } else {
        console.log("❌ Insufficient balance");
      }
    }
  };
}

const anujAccount = createAccount(1000);
anujAccount.getBalance();     // 💰 1000
anujAccount.deposit(500);     // ✅ Deposited: 500
anujAccount.withdraw(200);    // 🟢 Withdrawn: 200
anujAccount.getBalance();     // 💰 1300

// ❌ balance directly access nahi ho sakta, kyunki wo closure me private hai
// console.log(anujAccount.balance); // undefined

// -------------------------------------------------------------

// 🔹 Password Protector Example

// ✅ secureAccess function closure ka use karta hai to store password privately
// ❌ secret variable direct access se safe hai, sirf inner functions hi use kar sakte hain

function secureAccess(password) {
  let secret = password; // 👈 yeh bhi private variable hai

  return {
    checkPassword: function (pass) {
      return pass === secret; // 🔒 compare karega correct password se
    },
    changePassword: function (oldPass, newPass) {
      if (oldPass === secret) {
        secret = newPass;
        console.log("🔐 Password changed");
      } else {
        console.log("❌ Wrong password");
      }
    }
  };
}

const protectedUser = secureAccess("1234");

console.log(protectedUser.checkPassword("1234")); // true
console.log(protectedUser.checkPassword("0000")); // false

protectedUser.changePassword("0000", "5678"); // ❌ Wrong password
protectedUser.changePassword("1234", "5678"); // 🔐 Password changed

console.log(protectedUser.checkPassword("5678")); // true
