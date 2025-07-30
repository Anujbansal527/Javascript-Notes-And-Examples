# 📦 JavaScript Arrays – Complete Mastery Guide

Welcome to the **JavaScript Arrays module**, where we will dive deep into everything related to arrays – from basic syntax to advanced logic-building, real-world problems, and interview preparation.

---

## 🧠 What is an Array?

An **array** in JavaScript is a special type of object that allows you to store **multiple values** in a single variable. These values are ordered and indexed starting from 0.

### ✅ Example:
```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // Output: apple

### 📚 Folder Overview
| Folder              | Description                                                                  |
| ------------------- | ---------------------------------------------------------------------------- |
| `basics/`           | Covers array declaration, indexing, types, mixed values, and how arrays work |
| `methods/`          | Built-in methods like push, pop, slice, splice, includes, etc.               |
| `iterations/`       | Looping and iteration methods (map, filter, reduce, forEach, etc.)           |
| `multidimensional/` | 2D arrays, nested arrays, matrix problems, and access patterns               |
| `operations/`       | Real-world array logic: merge, rotate, flatten, clone, etc.                  |
| `interview/`        | Interview Q\&A, dry runs, company-style logic questions and answers          |


### 🔍 Array Key Features
✅ Indexed (0-based)
✅ Dynamic size
✅ Stores mixed data types
✅ Can be nested (2D arrays)
✅ Extensive built-in methods
✅ Pass-by-reference (non-primitive)

### 📌 Topics Covered
✅ Array creation and syntax
✅ Accessing and modifying elements
✅ Array methods – push, pop, splice, slice, etc.
✅ Iteration methods – forEach, map, filter, reduce
✅ 2D & Nested Arrays
✅ Array operations – clone, rotate, flatten, merge
✅ Interview pattern-based questions


### 💬 Common Array Interview Questions
| 🔢 Question                                             | 💡 Concept                                           |
| ------------------------------------------------------- | ---------------------------------------------------- |
| How do you check if a value is an array?                | `Array.isArray()`                                    |
| What is the output of `typeof []`?                      | `object`                                             |
| Difference between `splice` and `slice`?                | Mutates original vs doesn't                          |
| How to clone an array?                                  | `slice()`, spread `[...]`, or `structuredClone()`    |
| How to flatten nested arrays?                           | `flat()` or recursion                                |
| Array vs Object – use case?                             | Ordered vs unordered data                            |
| Why use `map` over `forEach`?                           | `map` returns a new array                            |
| Which method to stop early?                             | `some`, `every`, `find` allow breaking early         |
| Difference between `for...of` and `for...in` on arrays? | `for...of` iterates values, `for...in` iterates keys |



###🧪 Best Practices
Always check if variable is array using Array.isArray()
Avoid using for...in with arrays
Use map, filter, reduce instead of manual loops for cleaner code
Clone arrays before modifying if you need immutability
Be cautious with performance while using splice, sort, etc.



---

## 📌 Array Type Definitions

Below are all the common types of arrays you'll encounter in JavaScript, from basics to advanced:

---

### 🔹 1. One-Dimensional Array (1D)

A basic list of elements accessed via a single index.

let colors = ["red", "green", "blue"];
console.log(colors[0]); // Output: "red"

### 🔹 2. Two-Dimensional Array (2D / Matrix)
An array where each element is itself an array of equal length.

let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // Output: 3


### 🔹 3. Jagged Array
A 2D array where sub-arrays have different lengths.

let jagged = [
  [10, 20],
  [30],
  [40, 50, 60]
];
console.log(jagged[2][1]); // Output: 50


### 🔹 4. Multidimensional Array (Deeply Nested)
Arrays within arrays beyond two levels — used in complex data structures.

let deep = [
  [[1], [2]],
  [[3], [4]]
];
console.log(deep[1][0][0]); // Output: 3



### 🔹 5. Sparse Array
An array where some indexes are intentionally left empty.

let sparse = [];
sparse[3] = "Hello";

console.log(sparse); // [ <3 empty items>, 'Hello' ]
console.log(sparse.length); // 4
🧠 Note: Empty slots are not the same as undefined.

### 🔹 6. Typed Arrays (Advanced)
Special arrays to handle raw binary data, often used in graphics or hardware-level operations.

let buffer = new ArrayBuffer(8);       // 8 bytes of memory
let view = new Uint8Array(buffer);     // View as array of 8-bit integers
view[0] = 255;

console.log(view); // Uint8Array(8) [255, 0, 0, 0, 0, 0, 0, 0]