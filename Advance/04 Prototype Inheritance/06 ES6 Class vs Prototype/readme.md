JavaScript mein traditionally **Prototype-based inheritance** hoti thi, lekin ES6 ke baad `class` keyword introduce hua for cleaner syntax.

Dono ke peeche working same hai — lekin `class` ek **syntactic sugar** hai.

---

## ✅ Prototype-based Approach (Old Style):

```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function () {
  console.log("Hi, I am " + this.name);
};

const p1 = new Person("Anuj");
p1.sayHi();
```

### ✅ ES6 Class Approach (New Style):
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi, I am " + this.name);
  }
}

const p1 = new Person("Anuj");
p1.sayHi();
```

### ✅ Behind the Scenes:
- ES6 class ke under methods prototype pe hi jaate hain

- Constructor automatically banata hai instance

- Under the hood, class bhi prototype use karta hai


### 🔁 Compare Table:
| Feature          | Prototype Approach         | ES6 Class                  |
| ---------------- | -------------------------- | -------------------------- |
| Syntax           | Old style (functions)      | Cleaner, modern syntax     |
| Inheritance      | Manual via `Object.create` | `extends` + `super()`      |
| Method Location  | `Constructor.prototype.fn` | Automatically on prototype |
| Constructor Call | With `new`                 | With `new`                 |


### 🔹 Inheritance in ES6 Classes
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} bol raha hai`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} bhauk raha hai`);
  }
}
```
