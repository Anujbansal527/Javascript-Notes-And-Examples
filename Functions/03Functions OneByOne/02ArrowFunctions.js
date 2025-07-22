// ✅ Arrow Function in JavaScript
// ES6 me introduce hua tha. Ye concise (short) syntax provide karta hai.

// 🔹 Normal Function vs Arrow Function
function addNormal(a, b) {
  return a + b;
}

const addArrow = (a, b) => {
  return a + b;
};

console.log("Normal Add:", addNormal(5, 3));  // Output: 8
console.log("Arrow Add:", addArrow(5, 3));    // Output: 8

// 🔹 Single Line Return (Implicit return)
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 2));      // Output: 8

// 🔹 Arrow function with single parameter
const greet = name => `Hello, ${name}!`;
console.log(greet("Anuj"));                   // Output: Hello, Anuj!

// 🔹 No parameter arrow function
const sayHello = () => "Hi from arrow!";
console.log(sayHello());                      // Output: Hi from arrow!

// ✅ Important Difference: 'this' behavior
// Arrow function apne 'this' ko lexical scope se inherit karta hai (bind nahi karta)
const obj = {
  name: "Anuj",
  normalFunc: function () {
    console.log("Normal Function:", this.name);  // this => obj
  },
  arrowFunc: () => {
    console.log("Arrow Function:", this.name);   // this => global (undefined in strict mode)
  }
};

obj.normalFunc();   // Output: Anuj
obj.arrowFunc();    // Output: undefined

// 🔹 Interview Point:
// Arrow functions don't have their own 'this', 'arguments', or 'prototype'
// Useful in callbacks where you don't want 'this' binding to change

// ✅ Arrow in array methods (very common)
const numbers = [1, 2, 3, 4];
const squared = numbers.map(n => n * n);
console.log("Squares:", squared); // Output: [1, 4, 9, 16]
