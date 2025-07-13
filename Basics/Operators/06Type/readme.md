# 📐 JavaScript Type Operators (`typeof`, `instanceof`)

JavaScript me `typeof` aur `instanceof` ka use kisi variable ya object ka type ya constructor identity check karne ke liye hota hai.

---

## ✅ `typeof` Operator

- Primitive types ko check karne ke liye use hota hai
- String me type return karta hai

### ✅ Examples:

typeof "hello"      // "string"
typeof 123          // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // ⚠️ "object" (JS legacy bug)
typeof []           // "object"
typeof {}           // "object"
typeof function(){} // "function"

---

### ✅ instanceof Operator
Constructor/function ke base par check karta hai ki variable usi ka instance hai ya nahi
Mostly object, array, custom class ke liye use hota hai

### ✅ Examples:
[] instanceof Array        // true
{} instanceof Object       // true
new Date() instanceof Date // true
function f(){}; f instanceof Function // true

## 💡 Interview Questions

### 🔸 Q1: typeof null "object" kyu aata hai?
Ans: Ye JavaScript ka ek legacy bug hai. Internally null ka type tag 0 hota hai jo object ke liye bhi hota hai.

### 🔸 Q2: instanceof kis ke liye use hota hai?
Ans: Kisi object ka constructor ya prototype chain check karne ke liye.

let arr = [];
console.log(arr instanceof Array); // true

### 🔸 Q3: typeof vs instanceof me difference?
typeof	instanceof
Primitive check karta hai	Constructor/function based check
String return karta hai	Boolean return karta hai

---


