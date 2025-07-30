// 🔹 Class declaration in JavaScript (ES6+)
// Yeh ek blueprint hoti hai object banane ke liye

class Person {
  // 👉 constructor method: jab bhi new object banega, yeh method auto-call hoga
  constructor(name, age) {
    this.name = name; // this.name me value assign kar rahe hain jo object me hogi
    this.age = age;   // this.age me bhi wahi, jo constructor se mile
  }

  // 👉 method: yeh ek normal function hai jo class ke andar defined hai
  details() {
    // `this` ka matlab hai current object (jaise: anuj)
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

// 🔹 Object creation using `new` keyword
const anuj = new Person("Anuj", 23);

// 🔹 Method call
anuj.details(); // Output: Name: Anuj, Age: 23
