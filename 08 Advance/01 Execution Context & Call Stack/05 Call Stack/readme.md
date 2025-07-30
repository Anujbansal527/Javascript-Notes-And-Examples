# 🔹 JavaScript Call Stack

## ✅ Definition:
Call Stack ek **data structure (LIFO - Last In First Out)** hai jisme JavaScript engine sabhi function calls ko **stack ki tarah** manage karta hai.

Jab koi function call hota hai:
- JS engine uska **Execution Context** stack me **push** karta hai
- Jab function complete ho jata hai, stack se **pop** kar diya jata hai

---

## 📊 Visual Example:

```js
function one() {
  console.log("One");
  two();
}
function two() {
  console.log("Two");
  three();
}
function three() {
  console.log("Three");
}
one();
```

### 🔁 Call Stack Flow:
```js
Start
 ↓
GEC created → pushed
 ↓
one() → Execution Context pushed
 ↓
two() → Execution Context pushed
 ↓
three() → Execution Context pushed
 ↓
three() completes → pop
two() completes → pop
one() completes → pop
 ↓
Stack empty → JS idle
```

### 🧠 Points to Remember:
- JS is single-threaded → one thing at a time

- Call stack helps JS know what to execute next

- Infinite recursion causes stack overflow error

### ❗ Common Error:
```js
function callMe() {
  callMe(); // ❌ Infinite recursion
}
callMe(); // 👉 RangeError: Maximum call stack size exceeded
```
### 💡 Analogy:
Call stack ek plate stack jaisa hai. Sabse pehle jo plate (function) daali jaati hai, sabse last me nikalti hai.
Har naye function ke liye nayi plate upar lagti hai, kaam khatam hote hi hata di jaati hai.

### 📋 Interview Questions:
- Call Stack kya hai aur JS me kyun important hai?

- Call Stack kis order me kaam karta hai?

- Stack overflow error kab aata hai?

