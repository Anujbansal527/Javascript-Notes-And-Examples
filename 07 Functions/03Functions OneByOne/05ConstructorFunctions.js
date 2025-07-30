// ✅ Constructor Function in JavaScript
// Constructor function ka use object banane ke liye hota hai
// Ye function capital letter se start hota hai (naming convention)

// 🔸 1. Simple Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
  };
}

// 🔸 2. Object create karna using new keyword
const user1 = new Person("Anuj", 25);
const user2 = new Person("Bansal", 30);

user1.greet(); // Output: Hi, I'm Anuj and I'm 25 years old
user2.greet(); // Output: Hi, I'm Bansal and I'm 30 years old

// ✅ How it works internally:
// new keyword ka use karne se:
// 1. Ek empty object create hota hai
// 2. this us object ko refer karta hai
// 3. Properties this ke through assign hoti hain
// 4. Function finally object return karta hai (by default)

// 🔸 3. Add shared methods using prototype (memory efficient)
Person.prototype.sayBye = function () {
  console.log(`${this.name} says bye!`);
};

user1.sayBye(); // Output: Anuj says bye!
user2.sayBye(); // Output: Bansal says bye!

// ✅ Interview Tip:
// Constructor functions are old way of doing classes (before ES6)
// Ab mostly `class` keyword use hota hai, lekin interview me puchte hain

// 🔸 4. Built-in constructor functions (not recommended):
const str = new String("hello");
console.log(typeof str); // object ❌ (avoid this style)

const num = new Number(123);
console.log(typeof num); // object ❌ (not primitive)

const bool = new Boolean(true);
console.log(typeof bool); // object ❌

/*
⚠️ Note:
new String(), new Number(), new Boolean() se wrapper object banta hai.
Inhe avoid karo, prefer primitive:
  let s = "hello"; let n = 123; let b = true;
*/
