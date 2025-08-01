# 📦 JavaScript Arrays – Complete Mastery Guide

Welcome to the **JavaScript Arrays module**, where we dive deep into everything related to arrays — from basic syntax to advanced logic, real-world use cases, and interview preparation.

---

## 🧠 What is an Array?

An **array** in JavaScript is a special type of object that allows you to store **multiple values** in a single variable. These values are **ordered** and **indexed** starting from `0`.

### ✅ Example:
```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // Output: "apple"
```

---

## 📚 Folder Overview

| Folder              | Description                                                                  |
|---------------------|------------------------------------------------------------------------------|
| `basics/`           | Array declaration, indexing, mixed types, and how arrays work internally     |
| `methods/`          | Built-in methods like `push`, `pop`, `slice`, `splice`, `includes`, etc.     |
| `iterations/`       | Iteration tools – `map`, `filter`, `reduce`, `forEach`, etc.                 |
| `multidimensional/` | 2D arrays, nested structures, matrix operations, access patterns              |
| `operations/`       | Real-world array logic – merge, rotate, flatten, clone, etc.                 |
| `interview/`        | Interview-style questions, dry runs, pattern-based problems and solutions    |

---

## 🔍 Key Features of Arrays

✅ Indexed (0-based)  
✅ Dynamic in size  
✅ Supports mixed data types  
✅ Can be nested (2D, 3D, etc.)  
✅ Offers a rich set of built-in methods  
✅ Passed by reference (non-primitive)

---

## 📌 Topics Covered

- ✅ Array creation and syntax
- ✅ Accessing and modifying elements
- ✅ Mutator methods (`push`, `pop`, `splice`, etc.)
- ✅ Accessor methods (`slice`, `concat`, `includes`, etc.)
- ✅ Iteration methods (`map`, `forEach`, `reduce`, etc.)
- ✅ 2D & Nested Arrays
- ✅ Real-world logic: rotate, flatten, clone, etc.
- ✅ Interview-based pattern questions

---

## 💬 Common Array Interview Questions

| 🔢 Question                                             | 💡 Concept                                           |
|---------------------------------------------------------|------------------------------------------------------|
| How do you check if a value is an array?                | `Array.isArray()`                                    |
| What is the output of `typeof []`?                      | `object`                                             |
| Difference between `splice` and `slice`?                | `splice` mutates, `slice` does not                   |
| How to clone an array?                                  | `slice()`, spread `[...]`, `structuredClone()`       |
| How to flatten nested arrays?                           | `flat()` or recursion                                |
| Array vs Object – use case?                             | Arrays for ordered data, Objects for key-value pairs |
| Why use `map` over `forEach`?                           | `map` returns a new array                            |
| Which method to stop early?                             | `some`, `every`, `find` allow early exit             |
| Difference between `for...of` and `for...in` on arrays? | `for...of` for values, `for...in` for keys           |

---

## 🧪 Best Practices

- ✅ Use `Array.isArray()` to check array type
- ⚠️ Avoid `for...in` with arrays (can loop inherited props)
- ✅ Use `map`, `filter`, `reduce` for clean functional loops
- ✅ Clone arrays before modifying to ensure immutability
- ⚠️ Avoid mutating arrays inside loops (`forEach`, etc.)
- ⚠️ Be cautious with heavy methods (`splice`, `sort`) in large data

---

## 📌 Array Type Definitions

### 🔹 1. One-Dimensional Array (1D)
A basic list of elements accessed via a single index.

```js
let colors = ["red", "green", "blue"];
console.log(colors[0]); // "red"
```

---

### 🔹 2. Two-Dimensional Array (2D / Matrix)
An array where each element is itself an array.

```js
let matrix = [
  [1, 2],
  [3, 4]
];
console.log(matrix[1][0]); // 3
```

---

### 🔹 3. Jagged Array
A 2D array where sub-arrays have different lengths.

```js
let jagged = [
  [10, 20],
  [30],
  [40, 50, 60]
];
console.log(jagged[2][1]); // 50
```

---

### 🔹 4. Multidimensional Array (Deeply Nested)
Arrays inside arrays beyond 2 levels, common in trees or complex data.

```js
let deep = [
  [[1], [2]],
  [[3], [4]]
];
console.log(deep[1][0][0]); // 3
```

---

### 🔹 5. Sparse Array
Some indices are missing (not the same as `undefined`).

```js
let sparse = [];
sparse[3] = "Hello";

console.log(sparse);         // [ <3 empty items>, "Hello" ]
console.log(sparse.length);  // 4
```

> 🧠 Note: Empty slots ≠ `undefined`. They don’t exist at all.

---

### 🔹 6. Typed Arrays (Advanced)
Used to manipulate raw binary data (e.g., for graphics, buffers).

```js
let buffer = new ArrayBuffer(8);       // 8 bytes allocated
let view = new Uint8Array(buffer);     // View as 8-bit integers

view[0] = 255;
console.log(view); // Uint8Array(8) [255, 0, 0, 0, 0, 0, 0, 0]
```

---

✅ Let me know if you'd like:

- Individual folders created with file stubs  
- Diagram for types of arrays  
- Visual JSON examples for 2D, jagged, or nested arrays  
- Real-world logic building (rotate, merge, flatten) ready next

Shall we proceed to `basics/` or `methods/` folder next?
