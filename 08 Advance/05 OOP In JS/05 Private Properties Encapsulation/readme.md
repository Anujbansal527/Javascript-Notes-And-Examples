# 🔒 Encapsulation & Private Properties in JS

**Encapsulation** ka matlab hota hai data ko secure rakhna, aur access control dena — matlab object ke andar ki properties ko **direct bahar se access nahi** karne dena.

---

## 🛡️ Why Encapsulation?

- Sensitive data ko secure rakhna
- Internal logic hide karna
- Controlled access via methods (`getters/setters`)

---

## 🧠 How in JavaScript?

### 🔸 1. Traditional Way (Naming Convention)

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance; // _underscore se indicate karte hain ki private hai
  }

  getBalance() {
    return this._balance;
  }
}
```
Yeh sirf convention hai — fir bhi access ho sakta hai directly.

### 🔹 2. ES2022+ Way (Truly Private Fields with #)
```js
class BankAccount {
  #balance;

  constructor(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
}
```
- # se banaye gaye variables class ke bahar se totally inaccessible hote hain.

- Yeh true encapsulation deta hai.

### 🧪 Trying to access:
```js
const acc = new BankAccount(1000);
console.log(acc.#balance); // ❌ SyntaxError: Private field '#balance' must be declared
```

### 📍 Summary:
| Type   | Access Control | Truly Private?      |
| ------ | -------------- | ------------------- |
| `_var` | No             | ❌ (only convention) |
| `#var` | Yes            | ✅ (since ES2022)    |


