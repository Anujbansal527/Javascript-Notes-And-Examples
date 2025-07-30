// ✅ Modern & secure encapsulation using Class Fields (ES2022+)

class BankAccount {
  // 👇 Yeh ek truly private variable hai (sirf class ke andar accessible)
  #balance;

  constructor(name, balance) {
    this.name = name;
    this.#balance = balance; // 👈 balance ko private variable me assign kiya
  }

  // 👇 Getter method to access private balance
  getBalance() {
    return this.#balance;
  }

  // 👇 Deposit method to safely update private balance
  deposit(amount) {
    this.#balance += amount;
    console.log(`💰 Deposit hua. Naya balance: ₹${this.#balance}`);
  }

  // ❌ Agar koi try kare direct access, toh error aayega
}

// ✅ Object create karte hain
const acc1 = new BankAccount("Anuj", 2000);

console.log(`Account Holder: ${acc1.name}`); // Public property accessible
console.log(`Balance: ₹${acc1.getBalance()}`); // Private property ko method se access

acc1.deposit(1500); // 💰 Deposit hua. Naya balance: ₹3500

// ❌ Direct access to private variable
// console.log(acc1.#balance); // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class
