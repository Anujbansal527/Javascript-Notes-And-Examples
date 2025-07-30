# 🔐 Closures in JavaScript (Hinglish)

## 🔸 Definition:

Closure tab banta hai jab ek **function apne outer lexical scope** ke variables ko access karta hai, **even after the outer function has finished execution**.

> "Function ke pass apne outer scope ke variables ka reference hota hai – isey closure kehte hain."

---

## 🔸 Syntax Samjho:

```js
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
let fn = outer();
fn(); // 1
fn(); // 2
```

### 🔸 Why Use Closures?
- Data ko encapsulate karne ke liye

- Private variable banane ke liye

- Callback pattern mein

- Functional programming mein

### 🔸 Flow Chart:
```js
Outer Function Scope
│
├── Variable Declared: let count = 0
│
└── Inner Function Defined
    └── Accesses count (Closure)
```

### 🔸 Real-Life Example:
- Bank account with balance

- Toggle counter

- React/Angular useState-like hooks

### 📚 Subtopics:
Basics of Closure

Loops with Closure (var vs let)

Function Returning Functions

Private Variables using Closure

Memory Leaks & Garbage Collection

Interview Questions & Use Cases


