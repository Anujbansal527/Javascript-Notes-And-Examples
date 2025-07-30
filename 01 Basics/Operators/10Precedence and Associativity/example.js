// ================================
// 📊 Precedence & Associativity
// ================================

let x = 10 + 5 * 2;
console.log("10 + 5 * 2 =", x); // 20

let y = (10 + 5) * 2;
console.log("(10 + 5) * 2 =", y); // 30

let a = 5;
let b = 10;
let c = 15;

let z = a + b + c;
console.log("a + b + c =", z); // 30 (left to right associativity)

let assign = a = b = c;
console.log("a = b = c:", assign); // 15 (right to left)
console.log("a:", a, "b:", b); // 15 15

let result = true && false || true;
console.log("true && false || true:", result); // true