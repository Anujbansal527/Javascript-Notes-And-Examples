// ==================================
// 🔍 Comparison Operators Examples
// ==================================

let compA = 10;
let compB = "10";

console.log("a == b:", compA == compB);     // true (value same, type convert ho gaya)
console.log("a === b:", compA === compB);   // false (type different)

console.log("a != b:", compA != compB);     // false (value equal after coercion)
console.log("a !== b:", compA !== compB);   // true (strict type check)

console.log("a > 5:", compA > 5);       // true
console.log("a < 20:", compA < 20);     // true
console.log("a >= 10:", compA >= 10);   // true
console.log("a <= 9:", compA <= 9);     // false

// Special Cases
console.log("NaN == NaN:", NaN == NaN);                 // false (NaN kabhi kisi se equal nahi hota—even itself)
console.log("null == undefined:", null == undefined);   // true (loosely equal in JS)
console.log("null === undefined:", null === undefined); // false (strict type check fails)
