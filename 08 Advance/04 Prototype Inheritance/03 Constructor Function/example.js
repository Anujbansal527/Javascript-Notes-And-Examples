 // ✅ Step 1: Constructor Function
// Ye ek function hai jo new object banane ke liye use hota hai
function Person(name, age) {
  this.name = name; // this.name => new object ka name
  this.age = age;   // this.age => new object ka age
}

// ✅ Step 2: Prototype mein shared method add karo
// Prototype par method add karne se saare instances ye method share karte hain
Person.prototype.sayHello = function () {
  console.log("👋 Hello, I am " + this.name);
};

// ✅ Step 3: Object create karo using 'new'
// 'new' keyword ek naya object banata hai jiska prototype set hota hai Person.prototype
const user1 = new Person("Anuj", 25);
const user2 = new Person("Bansal", 22);

// 🔽 Call method - ye dono objects share kar rahe hain same prototype method
user1.sayHello(); // 👋 Hello, I am Anuj
user2.sayHello(); // 👋 Hello, I am Bansal

// ✅ Check prototype linking
// user1.__proto__ => Person.prototype hona chahiye
console.log(user1.__proto__ === Person.prototype); // true

// constructor property verify karne ke liye
console.log(Person.prototype.constructor === Person); // true

// ✅ Add aur ek method dynamically later
// Hum baad me bhi prototype par method add kar sakte hain
Person.prototype.greet = function () {
  console.log(`🙌 Namaste from ${this.name}`);
};

// Ab naye ya pehle se bane hue objects bhi greet method use kar sakte hain
user1.greet(); // 🙌 Namaste from Anuj
user2.greet(); // 🙌 Namaste from Bansal
