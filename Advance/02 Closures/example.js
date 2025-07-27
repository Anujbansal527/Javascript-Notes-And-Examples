// ✅ Closure Basic Example
function outer() {
  let naam = "Anuj";
  return function inner() {
    console.log("Namaste " + naam);
  }
}
let greet = outer(); // outer() call hua par naam ka ref inner me save ho gaya
greet();  // Output: Namaste Anuj

// ✅ Closure with Counter
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log("Count =>", count);
  }
}
let increment = counter();
increment(); // 1
increment(); // 2

// ✅ Closure in Loop (problem with var)
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("Var i:", i); // 3 3 3
  }, 1000);
}

// ✅ Closure in Loop (solution with IIFE or let)
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("Let i:", i); // 0 1 2
  }, 1000);
}