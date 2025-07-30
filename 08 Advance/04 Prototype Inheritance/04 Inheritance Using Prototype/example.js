 // 🔹 Step 1: Parent Constructor
function Animal(name) {
  // 🧠 Parent ka kaam: name assign karna
  this.name = name;
}

// 🔹 Step 2: Parent ke prototype mein method
Animal.prototype.speak = function () {
  // 👇 Ye method sab inherited objects use karenge
  console.log(`🦁 ${this.name} bol raha hai...`);
};

// 🔹 Step 3: Child Constructor
function Dog(name, breed) {
  // ✅ Parent constructor call karo current child object pe
  Animal.call(this, name); // super() jaisa kaam
  this.breed = breed;      // child-specific property
}

// 🔹 Step 4: Inherit methods using Object.create
// 👉 Child ka prototype banate waqt parent ke prototype ka reference de rahe hain
Dog.prototype = Object.create(Animal.prototype);

// 🔹 Step 5: Constructor ko sahi karo
// ❗ warna Dog ke object ka constructor Animal ban jaata
Dog.prototype.constructor = Dog;

// 🔹 Step 6: Add Child-specific method
Dog.prototype.bark = function () {
  // 👇 Child-specific method
  console.log(`🐶 ${this.name} bhauk raha hai...`);
};

// ✅ Dog ka object banate hain
const tommy = new Dog("Tommy", "Labrador");

// 🔹 Parent method (inherited from Animal)
tommy.speak(); // 🦁 Tommy bol raha hai...

// 🔹 Child-specific method
tommy.bark();  // 🐶 Tommy bhauk raha hai...

// 🔍 Prototype chain verify karte hain
console.log(tommy.__proto__ === Dog.prototype);           // ✅ true
console.log(Dog.prototype.__proto__ === Animal.prototype); // ✅ true
