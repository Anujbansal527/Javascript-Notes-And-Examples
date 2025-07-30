# 🔹 Prototype & Inheritance in JavaScript (Hinglish)

JavaScript mein objects directly dusre objects se inherit kar sakte hain using something called "Prototype".

### ✅ Why it Matters?
- Inheritance ko enable karta hai.
- Memory efficient hota hai (shared methods).
- `this` ke context aur scope understanding mein help karta hai.

---

## 🔸 JavaScript Prototype Kya Hota Hai?

- Har JS object ka ek hidden property hota hai: `[[Prototype]]` ya `__proto__`
- Isse hum use kar ke kisi aur object ya function se methods/props inherit kar sakte hain.

```js
const obj = {};
console.log(obj.__proto__); // shows Object.prototype
```

### 🔸 Prototype Chain
- Jab kisi object ke andar koi property nahi milti, toh JS engine prototype chain ke through parent object mein check karta hai.

- Ye chain tab tak chalti hai jab tak null (top of chain) tak na pahuch jaaye.

### 🔸 Constructor Function and Prototype
```js
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function () {
  console.log("Hello, I am", this.name);
};

const a = new Person("Anuj");
a.sayHello();
```

### 🔸 Inheritance using Prototype
```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} bol raha hai`);
};

function Dog(name, breed) {
  Animal.call(this, name); // super constructor
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const d = new Dog("Tommy", "Labrador");
d.speak();
```

### 🔸 Object.create()
Ek aur tarika prototype inheritance banane ka.
```js
const human = {
  greet() {
    console.log("Hello from human");
  },
};
const anuj = Object.create(human);
anuj.name = "Anuj";
anuj.greet();
```

### 🔸 Prototype vs ES6 Classes
- Class syntax ek syntactic sugar hai prototype-based inheritance ke upar.

- class use karke code readable aur structured ban jaata hai.

