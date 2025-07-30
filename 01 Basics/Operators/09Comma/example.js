// ====================================
// 📊 Comma Operator Examples
// ====================================

// Basic usage
let result = (5, 10, 15);
console.log("Result:", result); // 15

// Multiple expressions with side-effects
let a = 1;
let b = (a += 1, a *= 2, a - 1);
console.log("b:", b); // 3

// Use in return statement
function doStuff() {
  return (console.log("Doing something..."), 42);
}
console.log("Function output:", doStuff()); // "Doing something...", 42

// For loop example
for (let i = 0, j = 3; i < j; i++, j--) {
  console.log("i:", i, "j:", j);
}
// Output:
// i: 0 j: 3
// i: 1 j: 2