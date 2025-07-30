// 🔹 1. Function – Basic Definition
// Function is a block of code that can be reused anywhere

function sayHello() {
  console.log("👋 Hello from a function!");
}
sayHello(); // ✅ Output: 👋 Hello from a function!

// 🔸 Interview: Function independent hota hai, kisi object se bind nahi hota

// 🔹 2. Method – Function inside an object
// Jab function kisi object ka property hota hai, to use 'Method' kehte hain

const person = {
  name: "Anuj",
  greet: function () {
    console.log(`👋 Hello, I am ${this.name}`);
  }
};

person.greet(); // ✅ Output: Hello, I am Anuj

// 🔸 Interview: Method me `this` ka reference us object ko hota hai

// 🔹 3. Function vs Method – Key Difference

function walk() {
  console.log("🚶 Walking"); // This is a function
}

const dog = {
  bark: function () {
    console.log("🐶 Barking"); // This is a method
  }
};

walk();      // ✅ Function
dog.bark();  // ✅ Method

// 🔹 4. Functions can be used anywhere, methods depend on object

const name = "Anuj";

// Global function
function upperCaseName(str) {
  return str.toUpperCase();
}
console.log(upperCaseName(name)); // ✅ Output: ANUJ

// Method of String object
console.log(name.toUpperCase());  // ✅ Output: ANUJ

// 🔸 Note: Strings, arrays, etc. have built-in methods

// 🔹 5. `this` Behavior: Method vs Function

function showThis() {
  console.log("Function this:", this); // In browser → Window, in Node → {}
}
showThis();

const user = {
  name: "Anuj",
  showThis: function () {
    console.log("Method this:", this); // Refers to `user` object
  }
};

user.showThis();

// 🔹 6. Arrow Method inside object (Beware of `this`)
const student = {
  name: "Anuj",
  sayName: () => {
    console.log("Arrow this:", this.name); // ❌ `this` doesn't work here
  }
};
student.sayName(); // Output: undefined

// 🔸 Interview: Arrow function as method not recommended if `this` is needed
