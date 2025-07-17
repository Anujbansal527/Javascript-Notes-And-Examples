// 📘 String Properties Examples

let str = "Anuj Bansal";

// ✅ .length property - Total characters including spaces
console.log("Length:", str.length); // Output: 12

// ✅ typeof - Type of variable
console.log("Type:", typeof str); // Output: string

// ✅ constructor - Points to String constructor function
console.log(str.constructor === String); // true

// ✅ Strings are immutable
let modified = str.toUpperCase();
console.log("Original:", str);       // Anuj Bansal
console.log("Modified:", modified);  // ANUJ BANSAL

// ✅ Trying to change character directly (will not work)
str[0] = "X";
console.log("After trying to change:", str); // Still "Anuj Bansal"

// ✅ Checking if a variable is string
let val = "hello";
console.log("Is string:", typeof val === "string"); // true

// ✅ Prototype of String
console.log(Object.getPrototypeOf(str) === String.prototype); // true
