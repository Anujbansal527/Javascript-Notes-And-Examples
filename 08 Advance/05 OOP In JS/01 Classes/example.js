// 🔹 Class declaration
class Animal {
  constructor(name) {
    // 👇 Jab bhi new object banega, ye constructor chalega
    // this.name se har object me name property set ho jaayegi
    this.name = name;
  }

  speak() {
    // 👇 Ye method class ke har object ko milega
    // this.name use karke us particular animal ka naam print hoga
    console.log(`${this.name} bol raha hai 🐾`);
  }
}

// 🔸 Object 1: Dog
const dog = new Animal("Tommy"); // constructor call -> name = Tommy
dog.speak(); // Output: Tommy bol raha hai 🐾

// 🔸 Object 2: Cat
const cat = new Animal("Kitty"); // constructor call -> name = Kitty
cat.speak(); // Output: Kitty bol raha hai 🐾
