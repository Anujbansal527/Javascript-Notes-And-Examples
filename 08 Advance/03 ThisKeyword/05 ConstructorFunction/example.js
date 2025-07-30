
 // 🔹 Constructor Function me `this` ka use

// ✅ Normal constructor function
function Car(name, brand) {
  // `this` yaha naye object ko refer karta hai
  this.name = name;
  this.brand = brand;

  // method define kiya object ke andar hi
  this.describe = function () {
    console.log(`👉 Car: ${this.name}, Brand: ${this.brand}`);
  };
}

// `new` keyword lagane se Car ka naya object banega
const car1 = new Car("Nexon", "Tata");
const car2 = new Car("Fortuner", "Toyota");

// ✅ describe() method call kar rahe hain
car1.describe(); // 👉 Car: Nexon, Brand: Tata
car2.describe(); // 👉 Car: Fortuner, Brand: Toyota

// ❌ Without `new` — dikkat yahi se start hoti hai
function Phone(model) {
  // Agar `new` use nahi karenge to `this` global object (window) ko refer karega
  this.model = model;
}

// bina `new` ke call kiya gaya — ab `this.model` global scope me chala gaya
Phone("iPhone");

// ✅ Output: iPhone global variable me chala gaya (not recommended)
console.log("👉 Without new:", window.model); // ❌ iPhone

// ✅ Using instanceof — check karta hai object kis constructor se bana hai
console.log("car1 instanceof Car:", car1 instanceof Car); // ✅ true
console.log("car2 instanceof Car:", car2 instanceof Car); // ✅ true

// ✅ Reusing method with prototype (memory efficient)
function Laptop(name) {
  this.name = name;
}

// prototype me method add kiya — saare objects share karenge
Laptop.prototype.show = function () {
  console.log("👉 Laptop:", this.name);
};

const l1 = new Laptop("MacBook");
l1.show(); // ✅ MacBook

// ✅ Extra Check — instanceof
console.log("l1 instanceof Laptop:", l1 instanceof Laptop); // ✅ true
