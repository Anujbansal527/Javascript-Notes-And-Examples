
`Object.create()` JavaScript ka ek method hai jo ek **naya object create karta hai** aur uska prototype manually set karta hai.

Yeh inheritance ka simple aur clean tarika hai — bina constructor function ke.

---

## ✅ Syntax:

```js
const child = Object.create(parent);
```
Iska matlab:

child.__proto__ === parent

### ✅ Real Example:
```js 
const human = {
  greet() {
    console.log("👋 Hello from human");
  }
};

const anuj = Object.create(human);
anuj.name = "Anuj";

anuj.greet(); // "Hello from human"
```

### 🔹 Fayda kya hai?
- Constructor ka jhanjhat nahi

- Lightweight inheritance

- Simple object hierarchy banana asaan

### 🔹 Object.create() vs new keyword
| Feature           | `Object.create()`          | `new` Constructor              |
| ----------------- | -------------------------- | ------------------------------ |
| Flexibility       | High                       | Medium                         |
| Easy to use       | Yes                        | Needs `this`, `prototype`      |
| Constructor logic | ❌ No automatic constructor | ✅ Yes                          |
| Inheritance setup | Manual (easy)              | Needs `Object.create()` inside |



