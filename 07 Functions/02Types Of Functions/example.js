// ✅ Function Declaration
function sayHello() {
  console.log("Hello from declaration");
}
sayHello(); // ✅ Hoisting works

// ✅ Function Expression
const sayHi = function () {
  console.log("Hello from expression");
};
sayHi(); // ❌ Not hoisted

// ✅ Anonymous Function (no name)
setTimeout(function () {
  console.log("Anonymous Function after 1 sec");
}, 1000);

// ✅ Arrow Function (shorter syntax)
const greet = () => {
  console.log("Hi from Arrow 🏹");
};
greet();

// ✅ Named Function Expression (used in recursion)
const factorial = function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1); // 'fact' can be called internally
};
console.log("Factorial of 5:", factorial(5)); // 120

// ✅ Callback Function
function welcome(name, cb) {
  console.log("Hello", name);
  cb();
}

welcome("Anuj", () => {
  console.log("Callback executed ✅");
});

// ✅ Constructor Function
function Car(model) {
  this.model = model;
}
let c1 = new Car("Toyota");
console.log("Car model:", c1.model); // Toyota

// ✅ IIFE
(function () {
  console.log("This is IIFE (runs instantly) 🚀");
})();

// ✅ Generator Function (* symbol)
function* countGen() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = countGen();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next().value); // 2