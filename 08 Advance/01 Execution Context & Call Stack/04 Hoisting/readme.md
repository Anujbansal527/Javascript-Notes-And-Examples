 # 🔹 Hoisting in JavaScript

## ✅ Definition:
JavaScript me **hoisting** ka matlab hai:
> Variables aur function declarations ko **execution ke pehle memory me top pe le jaana**.

JavaScript engine sabse pehle **memory phase** me declarations ko scan karta hai, **initialization later hoti hai**.

---

## 📌 Rules of Hoisting:

### ✅ 1. `var`:
- Memory me `undefined` assign hota hai
- Use karne se pehle declare ho to bhi error nahi aata

```js
console.log(x); // 👉 undefined
var x = 5;
```

### ✅ 2. let & const:
- Memory me hota hai but Temporal Dead Zone me rehte hain

- Access karne se pehle ReferenceError aata hai
```js
console.log(y); // ❌ ReferenceError
let y = 10;
```
### ✅ 3. Function Declarations:
- Pura function memory me chala jata hai

- Call kar sakte ho pehle bhi
```js
sayHi(); // 👉 Hello
function sayHi() {
  console.log("Hello");
}
```

### ❌ Function Expressions / Arrow Functions:
- Agar var ke saath hai → undefined hoisting hoti hai

- Agar let / const ke saath hai → TDZ me rehta hai
```js
sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello");
};
```
### 🧠 Hoisting Occurs In:
- Global Execution Context

- Function Execution Context

### 📋 Interview Questions:
- JavaScript me hoisting kaise kaam karti hai?

- var, let, const hoisting me kya farak hai?

- Function expressions vs function declarations me hoisting kaise alag hai?

### 💡 Real-life Analogy:
Socho ki JS ek teacher hai jo pehle hi sab students (variables/functions) ke naam attendance list me likh leta hai.
Par kuch students ke bag me content (value) baad me aata hai.
let/const wale students late aaye hain aur unhe tab tak nahi bula sakte jab tak woh poore ready na ho jayein.

