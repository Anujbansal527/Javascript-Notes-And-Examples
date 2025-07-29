 # 🧼 Pure Functions in JavaScript

---

## 🔰 What is a Pure Function?

> Pure function wo hota hai jo **same input ke liye hamesha same output** deta hai **aur koi side-effect nahi karta**.

🎯 Iska matlab:
- No global variable change
- No DOM manipulation
- No API calls / random / Date etc.
- Just calculation → return

---

## 🧠 Properties of Pure Functions

✅ Same Input → Same Output  
✅ No Side Effects  
✅ No dependency on external states  
✅ Does not mutate input

---

## ❌ Impure Function Example

```js
let count = 0;
function increase() {
  count++; // ❌ modifies external variable
  return count;
}
```

### ✅ Pure Function Example
```js
function add(a, b) {
  return a + b; // ✅ No dependency outside, no mutation
}
```

### 🧠 Why Use Pure Functions?
- Predictable & Testable

- Debugging is easy

- Functional programming base

- Reusable and safe

### 🔍 Real Use-Cases
- 🔢 Calculator apps

- 📝 Formatters (text, prices)

- 📦 Redux reducers

- 🧪 Unit testing


### 🤔 Pure vs Impure
| Feature      | Pure                 | Impure                |
| ------------ | -------------------- | --------------------- |
| Output       | Deterministic        | Can vary              |
| Side Effects | No                   | Yes                   |
| Mutation     | No                   | Can mutate state/DOM  |
| Examples     | Math ops, formatters | API call, DOM updates |




