// 🏦 Ek BankAccount class banayi hai jisme owner aur balance track kar rahe hain
class BankAccount {
  constructor(owner, balance) {
    // ✅ Private-like properties banayi using "_" naming convention
    this._owner = owner;
    this._balance = balance;
  }

  // 🔍 Getter: Jab balance check karna ho
  get balance() {
    console.log(`🧾 ${this._owner} ka balance hai ₹${this._balance}`);
    return this._balance;
  }

  // ✍️ Setter: Jab balance update karna ho
  set balance(amount) {
    if (amount > 0) {
      console.log(`✅ Balance update ho gaya: ₹${amount}`);
      this._balance = amount;
    } else {
      console.log("❌ Invalid amount. Positive value dalo.");
    }
  }
}

// 🧪 Testing the class
const acc = new BankAccount("Anuj", 3000);

// 🔹 Get current balance
acc.balance; // 🧾 Anuj ka balance hai ₹3000

// 🔹 Set new valid balance
acc.balance = 5000; // ✅ Balance update ho gaya: ₹5000

// 🔹 Get updated balance
acc.balance; // 🧾 Anuj ka balance hai ₹5000

// 🔹 Try to set invalid (negative) balance
acc.balance = -100; // ❌ Invalid amount. Positive value dalo.