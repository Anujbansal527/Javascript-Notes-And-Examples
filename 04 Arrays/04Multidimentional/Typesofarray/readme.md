# 🧱 Types of Arrays in JavaScript

JavaScript has one core `Array` object, but based on **structure** and **usage**, arrays can be categorized in several meaningful types.

---

## 🔹 1. One-Dimensional (1D) Array

A simple list of values.

```js
let fruits = ["apple", "banana", "mango"];
✔️ Commonly used in loops, filters, maps.
```

### 🔹 2. Two-Dimensional (2D) Array
Also called matrix – an array of arrays with equal-length rows.

```js
let matrix = [
  [1, 2],
  [3, 4]
];
```

✔️ Used in games, grids, tabular data, etc.

### 🔹 3. Jagged Array
An array of arrays with unequal row lengths.
```js
let jagged = [
  [1, 2],
  [3, 4, 5],
  [6]
];
```
✔️ Used when different rows need to store variable-length data.

### 🔹 4. Multidimensional Array (Nested)
More deeply nested arrays (more than 2 levels).
```js
let nested = [
  [[1], [2]],
  [[3], [4]]
];
```
✔️ Used in complex structures like trees, 3D matrix, etc.

### 🔹 5. Sparse Array
An array with "holes" (undefined slots) — not all indices are filled.
```js
let sparse = [];
sparse[3] = "X";
```
✔️ Not recommended in most cases — may create confusion.

### 🔹 6. Typed Arrays (Advanced)
Used for handling binary data efficiently. Introduced in ES6.
```js
let buffer = new ArrayBuffer(4);
let view = new Uint8Array(buffer);
```
✔️ Used in WebGL, image processing, hardware APIs, etc.

### ⚠️ Note:
All these types are still typeof Array === 'object'.
Use:
```js
Array.isArray(varName); // ✅ true
```
to detect an array.

### 🧠 Interview Q&A
| Question                               | Answer                                                     |
| -------------------------------------- | ---------------------------------------------------------- |
| Can JavaScript have jagged arrays?     | ✅ Yes, arrays can contain uneven inner arrays.             |
| How to detect sparse arrays?           | Use `Object.keys(arr).length` and `arr.length` comparison. |
| When to use typed arrays?              | Binary, performance-sensitive tasks (e.g., WebGL).         |
| How to check 2D array element?         | Use `arr[i][j]` syntax.                                    |
| Difference: `undefined` vs empty slot? | `undefined` is a value, but empty slot doesn't exist.      |

---
