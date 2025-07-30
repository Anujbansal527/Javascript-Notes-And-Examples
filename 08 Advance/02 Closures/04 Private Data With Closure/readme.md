 # 🔒 Private Data using Closure

## 🔹 Concept:

JavaScript me koi direct `private` keyword nahi hota (except recent class `#field`).  
Lekin closure ke through hum **private data** bana sakte hain jo **outer world se inaccessible** hota hai.

---

## ✅ Example Structure:

```js
function createAccount(initialBalance) {
  let balance = initialBalance;  // private variable

  return {
    getBalance: function () {
      return balance;
    },
    deposit: function (amount) {
      balance += amount;
    },
    withdraw: function (amount) {
      if (amount <= balance) balance -= amount;
    }
  };
}
```
Yahaan balance kisi object ke property nahi hai, sirf closure me stored hai.

### 🔹 Why Use This?
✅ Protect sensitive data (like balance, password)

✅ Only expose required methods

✅ Avoid accidental changes

### 🔸 Real-Life Use Cases:
- Banking systems

- Encapsulation of sensitive configurations

- Mini state managers (like Redux patterns)

- Modules (like Module Pattern in JS)

### 🔹 Flow Chart:
```js
createAccount()
├── Creates balance = X
└── Returns methods (get, deposit, withdraw)
    └── All have access to closure variable: balance
```
### ❗Important:
- Closure variables are not accessible directly.

- Only returned functions can interact with them.

### 🔍 Interview Tip:
Q: How would you create a private variable in JavaScript without using class syntax?
➡️ "Using closure. Declare a variable inside a function and return functions that access it."
