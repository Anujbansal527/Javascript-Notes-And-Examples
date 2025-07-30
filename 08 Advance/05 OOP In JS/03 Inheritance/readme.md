# 👪 Inheritance in JavaScript

JavaScript mein inheritance ka matlab hai ek class (child) dusri class (parent) ke properties aur methods use kar sakti hai.

---

## 🧠 Keywords:

- `extends` → ek class ko inherit karne ke liye
- `super()` → parent class ke constructor/method ko call karne ke liye

---

## 🔗 Flow:

1. Parent class banao
2. `extends` keyword se child class banao
3. `super()` ka use constructor mein karo
4. Child apne method ke saath parent ke method bhi use kar sakta hai

---

## 📌 Example:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 👈 parent class constructor call
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} is barking! 🐶`);
  }
}
```

### ✅ Output:
```js
const d = new Dog("Tommy", "Labrador");
d.speak(); // Tommy makes a sound
d.bark();  // Tommy is barking! 🐶
```

### 📍 Interview Tip:
- JavaScript uses prototypal inheritance, but class keyword gives it a cleaner syntax.

- Always call super() before using this in constructor of child class.
