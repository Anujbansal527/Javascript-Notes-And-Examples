// =============================
// ⚙️ Bitwise Operator Examples
// =============================

let x = 5; // 0101
let y = 3; // 0011

console.log("x & y:", x & y); // 0001 → 1
console.log("x | y:", x | y); // 0111 → 7
console.log("x ^ y:", x ^ y); // 0110 → 6
console.log("~x:", ~x);       // ~0101 = 1010 = -6

console.log("x << 1:", x << 1);   // 1010 → 10
console.log("x >> 1:", x >> 1);   // 0010 → 2

let neg = -5;
console.log("neg >> 1:", neg >> 1);   // -3 (sign preserved)
console.log("neg >>> 1:", neg >>> 1); // 2147483645 (zero-fill)