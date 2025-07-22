// ✅ Anonymous Function in JavaScript
// Anonymous ka matlab hota hai "nameless" function (jiska koi naam nahi hota)
// Ye mostly kisi variable me assign kiya jata hai ya directly kisi function ke andar use hota hai.

// 🔹 Assigning anonymous function to a variable
const greet = function(name) {
  return `Hello, ${name}`;
};

console.log(greet("Anuj")); // Output: Hello, Anuj

// 🔹 Anonymous function as a callback (most common usage)
setTimeout(function () {
  console.log("⏱ Anonymous function called after 1 second");
}, 1000);

// 🔹 Anonymous function inside array method
let numbers = [1, 2, 3];
let doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("Doubled:", doubled); // Output: [2, 4, 6]

// ✅ Interview Point:
// Anonymous functions are often used in:
// - setTimeout, setInterval
// - event listeners
// - array methods (map, filter, reduce, etc.)
// - function expressions

// 🔸 Difference from Named Function:
// Named function can be reused, hoisted, and helpful in debugging
// Anonymous function is short and used where reuse is not required

// 🔹 Function expression (not hoisted)
const sayHi = function () {
  return "Hi from function expression";
};

console.log(sayHi()); // Output: Hi from function expression

// ❌ Hoisting nahi hota
// console.log(sayBye()); ❌ Error: Cannot access 'sayBye' before initialization
const sayBye = function () {
  return "Bye!";
};
