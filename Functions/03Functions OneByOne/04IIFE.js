// ✅ IIFE - Immediately Invoked Function Expression
// IIFE ek aisa function hota hai jo turant execute ho jata hai jab define kiya jata hai.
// Syntax: (function(){})();

(function () {
  console.log("✅ This is an IIFE - it runs immediately");
})(); // Output: ✅ This is an IIFE - it runs immediately

// 🔹 Example with variable
(function () {
  let name = "Anuj";
  console.log("Hello", name); // Output: Hello Anuj
})();

// 🔹 Arrow function version of IIFE
(() => {
  console.log("✅ Arrow IIFE executed");
})(); // Output: ✅ Arrow IIFE executed

// ✅ Interview Point:
// IIFE ka use global scope se data ko hide karne ke liye hota hai
// Isse variable pollution se bacha ja sakta hai

// 🔹 Variable isolation example:
var a = 100;

(function () {
  var a = 50;
  console.log("Inside IIFE:", a); // Output: 50
})();

console.log("Outside IIFE:", a); // Output: 100

// 🔹 You can also pass parameters in IIFE
(function (x, y) {
  console.log("Sum is:", x + y); // Output: Sum is: 30
})(10, 20);

// ✅ Common Usage:
// - Initialization code
// - Module pattern (before ES6 modules)
// - Avoid polluting global namespace
