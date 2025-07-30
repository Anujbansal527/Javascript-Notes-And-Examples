// ===============================
// 🧮 Assignment Operators in JS
// ===============================

let a = 10;

console.log("Original a:", a);     // 10

a += 5;
console.log("After a += 5:", a);   // 15

a -= 3;
console.log("After a -= 3:", a);   // 12

a *= 2;
console.log("After a *= 2:", a);   // 24

a /= 4;
console.log("After a /= 4:", a);   // 6

a %= 5;
console.log("After a %= 5:", a);   // 1

a **= 3;
console.log("After a **= 3:", a);  // 1 → 1^3 = 1

// Extra Example
let b = 4;
b *= 2 + 3;  // b = b * (2 + 3) = 4 * 5 = 20
console.log("b *= 2 + 3:", b);     // 20
