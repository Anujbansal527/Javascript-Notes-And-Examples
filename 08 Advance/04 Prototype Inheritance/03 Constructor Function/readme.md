JavaScript mein jab hum **constructor function** banate hain, tab JS uske `prototype` property ko use karta hai **new objects ke shared methods** ke liye.

---

## ✅ Constructor Function Kya Hota Hai?

Ek **normal function** jo objects create karta hai with `new` keyword.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const anuj = new Person("Anuj", 25);
```
Yaha this naya object point karta hai.

### ✅ Prototype with Constructor
- Har constructor function ka ek built-in property hota hai prototype

- Is prototype object ke andar hum shared methods define karte hain (memory efficient)

```js
Person.prototype.sayHi = function () {
  console.log("Hi! I am " + this.name);
};
```

### ✅ Execution Flow (with new keyword):
- Ek naya empty object {} create hota hai

- this us object ko refer karta hai

- Function code run hota hai (values assign hoti hain)

- Object linked hota hai constructor ke prototype se

- Return hota hai final object


### 🔍 prototype vs __proto__
- prototype → constructor function ka property

- __proto__ → har object ka reference hota hai to its prototype
