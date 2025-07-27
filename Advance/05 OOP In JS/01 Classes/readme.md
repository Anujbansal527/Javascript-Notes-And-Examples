# 📦 Classes in JavaScript

`class` ek blueprint hota hai object banane ke liye. Yeh ek tarah ka syntactic sugar hai jo prototypes par based hai.

---

## 📌 Syntax:

```js
class ClassName {
  constructor() {
    // initialization
  }

  method1() {}
  method2() {}
}
```

### 🔥 Features:
- Reusable structure

- Clean & readable

- constructor() automatically call hota hai jab new se object banta hai

- Methods are attached to the prototype

### 💡 Example:
```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise`);
  }
}
```