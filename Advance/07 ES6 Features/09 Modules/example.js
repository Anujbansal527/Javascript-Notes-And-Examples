// 📥 main.js – Importing from math.js

// 1. Import named exports
import { PI, square, add } from './math.js';

console.log("PI:", PI); // 3.14159
console.log("Square of 4:", square(4)); // 16
console.log("Add 5 + 3:", add(5, 3)); // 8

// 2. Import default export
import subtract from './math.js';

console.log("Subtract 10 - 4:", subtract(10, 4)); // 6

// 3. Rename import
import { add as plus } from './math.js';
console.log("5 + 2 using plus:", plus(5, 2)); // 7