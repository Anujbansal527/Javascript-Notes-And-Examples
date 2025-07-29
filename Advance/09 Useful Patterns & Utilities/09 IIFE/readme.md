 # ⚡ IIFE (Immediately Invoked Function Expression)

---

## 🔰 What is an IIFE?

> IIFE ek aisa JavaScript function hota hai jo **turant execute** ho jata hai jaise hi define kiya jaye.

📌 Syntax:
```js
(function() {
  console.log("I am IIFE");
})();
```
OR with arrow:
```js
(() => {
  console.log("Arrow IIFE");
})();
```

### 🎯 Purpose of IIFE
| Benefit              | Explanation                                        |
| -------------------- | -------------------------------------------------- |
| 🔒 Private Scope     | Vars/functions inside IIFE are private             |
| 🏃‍♂️ Auto Execution | Executes immediately                               |
| 🎯 Avoid Pollution   | Prevents global variable conflicts                 |
| 🔄 One-time setup    | For init code (event listeners, counters, configs) |

### 🧠 Real Life Use-Cases
- Counter / once-only setup

- jQuery plugins (old days)

- Module pattern

- Immediately executed data fetcher

### ⚙️ Flow of IIFE
1️⃣ Function defined
2️⃣ Wrap in () → converts to expression
3️⃣ Add () → immediately execute

### ❌ Common Mistakes
```js
function() { }();   // ❌ Syntax Error
```

### ✅ Wrap in brackets:
```js
(function() { })(); // ✅ Works
```


