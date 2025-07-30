# 🔹 Class Context me `this`

## 📌 Definition:
ECMAScript 2015 (ES6) se `class` introduce hui jo JS me object-oriented programming ko implement karne ka modern way hai.  
Jab aap class ke methods me `this` use karte ho, to yeh `this` us **instance (object)** ko refer karta hai jo class se banaya gaya hota hai.

---

## ✅ Syntax:

```js
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }

  showDetails() {
    console.log(this.name, this.roll);
  }
}

const s1 = new Student("Anuj", 101);
s1.showDetails(); // Anuj 101
```

### ⚠️ Arrow Function in Class:
- Arrow function automatically this ko lexical scope se inherit karta hai.

- Use carefully, especially in event listeners or callbacks inside classes.
```js
class Demo {
  constructor() {
    this.name = "Anuj";
  }

  regularFunc() {
    console.log(this); // 👉 refers to instance
  }

  arrowFunc = () => {
    console.log(this); // 👉 still refers to instance (lexical binding)
  }
}
```

### 🧠 Summary Table:
- Context	this refers to
- Inside class method	Instance of class
- Arrow func in class	Lexical this (instance)
- Static method	Class itself

### 🧪 Interview Tip:
"Class ke andar regular methods ka this class ke instance ko refer karta hai. Arrow function bhi instance ko refer karega kyunki woh lexical this inherit karta hai."

### 💡 Bonus:
- Use super() in child class to access parent class.

- Arrow functions inside classes are good for auto-binding (like in React).