# 🔁 Immediately Invoked Function Expressions (IIFE)

## ✅ What is an IIFE?
An IIFE is a JavaScript function that runs **as soon as it is defined**.

## 📦 Syntax:
```js
(function () {
  console.log("IIFE executed!");
})();
```
### 🧠 Why Use IIFE?
- To avoid polluting the global scope

- To create private variables (module pattern)

- Commonly used in older module patterns

### 🛡 Use Cases:
- Data privacy

- Wrapping logic

- Module encapsulation

### ⚠️ Notes:
- Parentheses around function are needed to treat it as an expression

- Can use arrow functions too: (() => {})();
