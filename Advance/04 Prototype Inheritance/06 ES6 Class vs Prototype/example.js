// 👴 Purane zamane ka tarika jaha function constructor use karte hain
function OldUser(name) {
  this.name = name; // name ko object me store karte hain
}

// Prototype pe method attach karte hain, taki har object me copy na banani pade
OldUser.prototype.sayHi = function () {
  console.log("👴 Old User says hi! I am", this.name);
};

const oldUser = new OldUser("Anuj Bansal");
oldUser.sayHi(); // 👴 Old User says hi! I am Anuj Bansal

// ---------------------------------------------

// ✅ ES6 Class (New Style)

// 🆕 Modern JavaScript ka class syntax – internally ye bhi function hi hota hai
class NewUser {
  constructor(name) {
    this.name = name; // constructor me values assign karte hain
  }

  // Class ke andar directly method likhte hain – ye prototype pe hi jata hai
  sayHi() {
    console.log("🆕 New User says hi! I am", this.name);
  }
}

const newUser = new NewUser("Anuj Bansal");
newUser.sayHi(); // 🆕 New User says hi! I am Anuj Bansal

// ---------------------------------------------

// ✅ Inheritance Example

// 🧬 Ek parent class banate hain jisme common property/method hoti hai
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Common method sab animals ke liye
  speak() {
    console.log(`🗣️ ${this.name} bol raha hai`);
  }
}

// 🐶 Dog class Animal se inherit karta hai using extends
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 👈 Parent class ka constructor call karte hain
    this.breed = breed;
  }

  // Dog-specific method
  bark() {
    console.log(`🐶 ${this.name} (Breed: ${this.breed}) bhauk raha hai`);
  }
}

const tommy = new Dog("Tommy", "Labrador");
tommy.speak(); // 🗣️ Tommy bol raha hai (inherited from Animal)
tommy.bark();  // 🐶 Tommy (Breed: Labrador) bhauk raha hai

// ---------------------------------------------

// 🔍 Under the hood: class bhi ek function hi hota hai

console.log(typeof NewUser); // function
console.log(typeof Dog);     // function

// 📌 JavaScript me classes sirf ek syntactic sugar hai – internally prototype use hota hai
