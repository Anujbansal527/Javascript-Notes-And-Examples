// ✅ Parent class ya base class
class Animal {
  constructor(name) {
    this.name = name; // 👈 Har animal ka naam store ho raha hai
  }

  // ✅ Common method jo sab animals share karenge
  speak() {
    console.log(`${this.name} awaz kar raha hai 🐾`);
  }
}

// ✅ Child class (Dog) jo inherit karega Animal class se
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 👈 Parent class ka constructor call karna PAKKA zaroori hai
    this.breed = breed; // 👈 Dog ka specific property
  }

  // ✅ Child-specific method
  bark() {
    console.log(`${this.name} (Breed: ${this.breed}) bhauk raha hai 🐶`);
  }
}

// ✅ Object create kar rahe hain Dog class ka
const myDog = new Dog("Sheru", "German Shepherd");

// ✅ Parent class ka method use kar sakte hain
myDog.speak(); // Sheru awaz kar raha hai 🐾

// ✅ Child class ka apna method bhi use kar sakte hain
myDog.bark();  // Sheru (Breed: German Shepherd) bhauk raha hai 🐶
