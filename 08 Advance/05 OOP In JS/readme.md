# 🔹 Object-Oriented Programming in JavaScript (ES6)

OOP (Object-Oriented Programming) ek programming paradigm hai jisme hum real-world entities ko objects ke form mein represent karte hain.

JavaScript traditionally prototype-based language hai, lekin ES6 se `class` keyword aaya hai jisse OOP aur readable bana.

---

## 📚  OOP ke Core Concepts:

| Concept        | Description |
|----------------|-------------|
| Class          | Blueprint for objects |
| Object         | Instance of class |
| Constructor    | Function that creates object |
| Inheritance    | Ek class dusri class ke properties le sakti hai |
| Encapsulation  | Data hiding and secure access (private fields) |
| Abstraction    | Complex logic ko simple banakar expose karna |
| Polymorphism   | Same method, different behavior (through override) |

---

## 🔀 Flow:

1. Define a class using `class` keyword
2. Add constructor for initializing values
3. Add methods inside class
4. Create objects using `new`
5. Inherit using `extends`
6. Use `super()` to call parent constructor
7. Add `get`/`set` for encapsulation
8. Add `static` methods for class-level utilities
9. Use `#private` properties for true encapsulation

---

## 🧠 Use-case:

```js
class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.name} is going at ${this.speed} km/h`);
  }
}

const car1 = new Car("BMW", 100);
car1.accelerate(); // BMW is going at 110 km/h
```

