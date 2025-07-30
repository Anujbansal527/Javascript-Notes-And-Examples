// ============================================
// ✅ JavaScript Data Types
// ============================================

/*
JavaScript me 2 tarah ke data types hote hain:
1. Primitive
2. Non-Primitive (Reference)
*/

// ============================================
// ✅ 1. Primitive Data Types
// ============================================

// 1.1 String
let name = "Anuj";
console.log("String:", name); // Output: Anuj

// 1.2 Number
let age = 22;
console.log("Number:", age); // Output: 22

// 1.3 Boolean
let isStudent = true;
console.log("Boolean:", isStudent); // Output: true

// 1.4 Undefined
let x;
console.log("Undefined:", x); // Output: undefined

// 1.5 Null
let y = null;
console.log("Null:", y); // Output: null

// 1.6 Symbol
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("Symbols are equal:", sym1 === sym2); // Output: false

// 1.7 BigInt
const bigNumber = 1234567890123456789012345678901234567890n;
console.log("BigInt:", bigNumber); // Output: 1234567890123456789012345678901234567890n

// ============================================
// ✅ 2. Non-Primitive (Reference) Data Types
// ============================================

// 2.1 Object
const person = {
  name: "Anuj",
  age: 22
};
console.log("Object:", person); // Output: { name: 'Anuj', age: 22 }

// 2.2 Array
const fruits = ["apple", "banana", "mango"];
console.log("Array:", fruits); // Output: [ 'apple', 'banana', 'mango' ]

// 2.3 Function
function greet() {
  return "Hello!";
}
console.log("Function output:", greet()); // Output: Hello!

// ============================================
// 🔁 Difference Between Undefined, Null, Symbol
// ============================================

// ❓ Undefined:
// ➜ Jab variable declare kiya ho but value assign na ho
let a;
console.log("a (undefined):", a); // Output: undefined

// ❓ Null:
// ➜ Developer manually khud value ko 'null' set karta hai (intentional empty)
let b = null;
console.log("b (null):", b); // Output: null

// ❓ Symbol:
// ➜ Unique and immutable value hota hai. Mostly identifiers banane ke liye use hota hai
const s1 = Symbol("id");
const s2 = Symbol("id");
console.log("Are symbols equal:", s1 === s2); // Output: false (hamesha unique hota hai)

// ============================================
// ✅ 3. typeof Examples
// ============================================

console.log("\ntypeof Examples:");
console.log(typeof "Anuj");         // string
console.log(typeof 123);            // number
console.log(typeof true);           // boolean
console.log(typeof undefined);      // undefined
console.log(typeof null);           // object ⚠️ (weird JS behavior)
console.log(typeof Symbol("id"));   // symbol
console.log(typeof []);             // object
console.log(typeof {});             // object
console.log(typeof function(){});   // function

// ============================================
// ✅ 4. Array.isArray vs typeof
// ============================================

console.log("\nArray Check:");
console.log(typeof []);              // object
console.log(Array.isArray([]));     // true

// ============================================
// ✅ 5. Type Conversion (Coercion)
// ============================================

console.log("\nType Conversion:");
console.log("5" + 1);    // '51' (string + number => string)
console.log("5" - 1);    // 4   (string - number => number)
console.log(Number("123"));  // 123 (explicit)
console.log(Boolean(""));    // false

// ============================================
// ✅ 6. null vs undefined (Loose vs Strict)
// ============================================

let u;
let n = null;
console.log(u == n);  // true (loose equality)
console.log(u === n); // false (strict equality)

