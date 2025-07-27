// 🔹 Hoisting Examples

// ✅ var hoisting
console.log(a); // 👉 undefined
var a = 10;

// ❌ let hoisting
// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

// ✅ function declaration hoisting
sayHi(); // 👉 Hello
function sayHi() {
  console.log("Hello");
}

// ❌ function expression hoisting
// sayHello(); // ❌ TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello from Expression");
};

// ✅ function inside function (hoisting in FEC)
function outer() {
  console.log(innerVar); // 👉 undefined
  var innerVar = "I'm hoisted inside outer";
}
outer();