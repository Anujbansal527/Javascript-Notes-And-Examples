JavaScript mein hum ek constructor function ke methods aur properties ko **dusre constructor** mein inherit kar sakte hain using prototype chaining.

Yeh allow karta hai code reuse aur memory-efficient design.

---

## ✅ Kaise kaam karta hai?

1. Parent constructor create karo (e.g., Animal)
2. Child constructor banao (e.g., Dog)
3. `Animal.call(this, ...)` → Child constructor mein Parent ka code run karo
4. `Dog.prototype = Object.create(Animal.prototype)` → Inherit methods
5. `Dog.prototype.constructor = Dog` → Reset constructor reference

---

## ✅ Example Flow:

```js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} bol raha hai`);
};

function Dog(name, breed) {
  Animal.call(this, name); // inherit properties
  this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype); // inherit methods
Dog.prototype.constructor = Dog;

const tommy = new Dog("Tommy", "Labrador");
tommy.speak(); // Tommy bol raha hai
```

### ✅ Diagram:
```js
tommy
  ↓ __proto__
Dog.prototype
  ↓ __proto__
Animal.prototype
```





