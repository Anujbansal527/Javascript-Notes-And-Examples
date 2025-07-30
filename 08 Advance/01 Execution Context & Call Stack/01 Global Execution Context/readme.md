# 🌍 Global Execution Context (GEC) in JavaScript

## 🔹 Definition:
Jab bhi JavaScript file run hoti hai, sabse pehle browser (ya Node.js) ek **Global Execution Context** banata hai. Ye default context hota hai jisme **global code** (jo kisi function ke bahar likha gaya ho) execute hota hai.

---

## 📌 2 Phases of Execution:

### ✅ 1. Memory Allocation Phase (Creation Phase)
- Sab variables and functions ko memory allocate hoti hai
- `var` → undefined
- `let/const` → Temporal Dead Zone (TDZ)
- Function declarations → pura function memory me chala jata hai

### ✅ 2. Code Execution Phase
- Line by line JS code run hota hai
- Values assign hoti hain variables me
- Functions execute hote hain jab unko call kiya jaye

---

## 🧠 Example Execution:

```js
console.log(a);        // undefined
var a = 10;

function greet() {
  console.log("Hello Anuj");
}
greet();               // Hello Anuj
```

### 🔎 Behind the scenes:
```js
Memory Phase:
a = undefined
greet = [Function]

Execution Phase:
console.log(a) → undefined
a = 10
greet() → logs "Hello Anuj"

```
📊 Visual Flow:
```js
JS Engine Start
     ↓
Create Global Execution Context (GEC)
     ↓
Memory Phase (Allocate memory for vars/functions)
     ↓
Code Execution Phase (Line by line execution)
     ↓
Functions Call → Push new Execution Context
```
### 📌 Notes:
- Sirf 1 hi Global Execution Context hota hai

- Jo cheezein function ke andar nahi likhi hoti, wo global scope me hoti hain

- Browser me global object: window, Node me: global

### 📋 Interview Questions:
- JS me sabse pehla execution context kaunsa banta hai?

- var, let, const me memory allocation kaise hoti hai?

- GEC kis cheez ka part hota hai? (Ans: Call Stack)
