// ✅ Normal Function in JavaScript
// Normal function ko "function declaration" bhi kehte hain.
// Ye sabse basic function hota hai jise "function" keyword se define karte hain.

// 🔹 Function definition (banaya gaya function)
function greetUser(name) {
  // yaha 'name' parameter hai
  return "Hello, " + name + "!";
}

// 🔹 Function call (execute karna)
console.log(greetUser("Anuj")); // Output: Hello, Anuj!

// 🔹 Function without parameter
function sayHi() {
  return "Hi there!";
}

console.log(sayHi()); // Output: Hi there!

// 🔹 Function with 2 parameters
function add(a, b) {
  return a + b;
}

console.log("Addition:", add(10, 5)); // Output: Addition: 15

// 🔹 Function with no return (only work perform karta hai)
function printMessage(message) {
  console.log("Message is:", message);
}

printMessage("JavaScript is powerful!"); // Output: Message is: JavaScript is powerful!

// 🔹 Function inside function
function outerFunction(x) {
  function innerFunction(y) {
    return x + y;
  }

  return innerFunction(5); // x = outer value, y = 5
}

console.log("Result from nested function:", outerFunction(10)); // Output: 15

// ✅ Interview Point:
// Function declaration hoisting support karta hai (declare ke pehle bhi call kar sakte ho)
sayHello(); // Output: Hello from hoisted function!

function sayHello() {
  console.log("Hello from hoisted function!");
}

// Lekin agar function ko variable me assign karo (expression), to hoisting nahi milega.
