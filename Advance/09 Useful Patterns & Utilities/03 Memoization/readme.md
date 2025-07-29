# 🧠 Memoization in JavaScript

---

## 🔰 What is Memoization?

> Memoization ek **optimization technique** hai jisme function ke result ko **cache** kiya jata hai, taki **same input ke liye baar-baar calculate na karna pade**.

💡 Agar aap ek slow/expensive function ko same input ke saath call kar rahe ho, to uska result yaad rakhna smart hai = Memoization

---

## 🔍 Real-World Use Cases

- 🧮 Fibonacci, Factorial jese recursive calculations
- 🌐 API results cache karna
- 🔍 Expensive filtering/sorting operations
- 📊 UI Rendering based on input

---

## 🧠 How It Works

- Ek cache object maintain karte hain
- Jab bhi function call hota hai:
  - Pehle cache me check karte hain
  - Agar result hai → return from cache
  - Nahi hai → calculate karo + cache karo

---

## 🧠 Flowchart Style
```js
function(input) → check cache:
|
├── If present → return cached result
└── If not → calculate → store → return
```


## 🛠️ Syntax / Structure

```js
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}
```

### Interview Tips
Q: Why use memoization?
A: To improve performance by avoiding repeated calculations.

Q: Memoization vs Caching?
A: Memoization is specific to function results; caching is more general (e.g., browser cache, DB cache).


