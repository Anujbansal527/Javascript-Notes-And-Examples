# 📘 First Order, Higher Order & Callback Functions in JavaScript

---

## 🔹 1. First Order Function

A **First Order Function** is a function that:
- Does **NOT** accept another function as an argument
- Does **NOT** return another function

📌 Example: Normal function that does a simple task

---

## 🔹 2. Higher Order Function (HOF)

A **Higher Order Function** is a function that:
- **Takes another function as an argument**, OR
- **Returns another function**

📌 Useful in:
- Functional programming
- `map()`, `filter()`, `reduce()` — all are HOFs

---

## 🔹 3. Callback Function

A **Callback** is a function that is **passed as an argument** to another function and is **executed later**.

📌 Callback is a **type of First-Class Function** in JS.

---

### 🔁 Difference Table

| Feature               | First Order       | Higher Order                 | Callback                     |
|-----------------------|-------------------|-------------------------------|-------------------------------|
| Accepts function arg? | ❌ No             | ✅ Yes                        | ✅ (as argument to another fn) |
| Returns a function?   | ❌ No             | ✅ (can)                      | ❌ Not required                |
| Use-case              | Basic logic       | Utility/logical abstraction  | Event handling, async        |
| Example               | Simple `add()`    | `map()`, `filter()`          | `setTimeout()`, `addEventListener()` |

---

## 💬 Interview Q&A

| ❓ Question | ✅ Answer |
|------------|----------|
| What is a higher-order function? | A function that accepts or returns another function |
| Can a function return another function in JS? | ✅ Yes |
| Is `map()` a HOF? | ✅ Yes, it takes a function as input |
| What is a callback function? | A function passed to another function to be executed later |
| Why are functions called "first-class citizens" in JS? | Because they can be assigned, passed, and returned like variables |
| Is every callback a HOF? | ❌ No, but every HOF uses callback |

---

## 🧠 Best Practices

- Don’t overuse callbacks — use async/await for better readability
- Always handle errors in async callbacks
- Arrow functions are commonly used for callbacks

---
