 # 🔁 Closure in Function Return

## 🔹 Concept

Agar ek function dusre function ko **return** karta hai, toh inner function closure banata hai aur outer function ke variables ko yaad rakhta hai.

---

## ✅ Syntax:

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}

const counter = outer();
counter(); // 1
counter(); // 2
```
- outer() call hone ke baad count create hota hai

- inner() function return hota hai but count variable ka reference usme reh jata hai

### 🔹 Flow Chart
```js
outer()
├── Creates count = 0
└── Returns inner()
    └── Holds reference to count via closure
```

### 🔸 Real-World Use Cases
✅ Counter functions (increment, decrement)

✅ Function factories

✅ React useState-like behaviour

✅ Partial application / Currying

✅ Memoization

### 🔍 Interview Tip:
Q: What happens when a function returns another function that uses outer variables?
➡️ "Closure banta hai – inner function outer variables ko yaad rakhta hai, even after outer function finishes."

### 🧠 Bonus Thought:
Closures allow state persistence without using global variables.


