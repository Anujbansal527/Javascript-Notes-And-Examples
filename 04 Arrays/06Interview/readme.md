# 📘 Arrays: Interview Q&A Collection (JavaScript)

This file includes all important array-based questions and answers frequently asked in JavaScript interviews. Includes basic to advanced patterns with explanations.

---

## 📖 What is an Array in JavaScript?
An **Array** is a special object used to store multiple values in a single variable. Each value is stored at a numeric index (starting from 0).

Arrays in JavaScript:
- Are dynamic (can grow or shrink)
- Are zero-indexed
- Can store mixed data types (numbers, strings, objects, etc.)
- Are reference types
- Have built-in methods for manipulation

```js
const arr = [1, "two", true, null];
```

---

## 🔰 Basic Array Questions

### 1️⃣ Q: What is the difference between `Array()` and `[]`?
✅ A: Both create arrays. `[]` is shorter and preferred. `Array(5)` creates an empty array with length 5 but no elements (sparse).

```js
let a = [];         // ✅ Empty array
let b = new Array(5); // ⚠️ Sparse array: [empty × 5]
```

### 2️⃣ Q: How to check if a variable is an array?
```js
Array.isArray(arr); // ✅ True if arr is an array
```

### 3️⃣ Q: What is the output of `typeof []`?
✅ A: `'object'`. Use `Array.isArray()` to confirm it is an array.

### 4️⃣ Q: Can arrays hold mixed data types?
✅ A: Yes. JavaScript arrays can store strings, numbers, booleans, objects, even functions.

---

## 🧠 Advanced Questions

### 5️⃣ Q: How to remove duplicates from an array?
```js
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)];
```

### 6️⃣ Q: How to flatten a nested array?
```js
const nested = [1, [2, [3]]];
const flat = nested.flat(2); // [1, 2, 3]
```

### 7️⃣ Q: How to rotate an array by `k` positions?
```js
const arr = [1, 2, 3, 4, 5];
const k = 2;
const leftRotated = arr.slice(k).concat(arr.slice(0, k));
```

### 8️⃣ Q: What's the difference between `map`, `forEach`, and `filter`?
- `map`: transforms each element, returns new array
- `forEach`: iterates but doesn't return anything
- `filter`: returns elements where condition is `true`

---

## 📊 Performance & Behavior

### 9️⃣ Q: Which is faster: `for`, `forEach`, `map`?
✅ A: `for` loop is generally fastest. `forEach` is more readable. `map` is useful for transformations.

### 🔟 Q: What's a sparse array?
✅ A: An array with gaps or undefined slots.
```js
const sparse = [1, , 3]; // index 1 is empty
console.log(sparse.length); // 3
console.log(sparse[1]);     // undefined
```

---

## 💡 Coding Practice Patterns (Summary)

| Question           | Method Used                    |
|--------------------|----------------------------------|
| Remove Duplicates  | `Set` or loop                   |
| Reverse Array      | `reverse()` or loop             |
| Find Max/Min       | `Math.max(...arr)` or `reduce()`|
| Sum All Elements   | `reduce()`                      |
| Rotate             | `slice()` + `concat()`          |
| Flatten            | `flat()` or recursion           |
| Merge Arrays       | `concat()` or `spread`          |

---

## 🔁 Common Array Methods Asked

| Method      | Description                    |
|-------------|--------------------------------|
| `push()`    | Add at end                     |
| `pop()`     | Remove from end                |
| `shift()`   | Remove from start              |
| `unshift()` | Add at start                   |
| `splice()`  | Add/remove at any index        |
| `slice()`   | Copy portion of array          |
| `concat()`  | Merge arrays                   |
| `join()`    | Convert to string              |
| `map()`     | Transform elements             |
| `filter()`  | Filter based on condition      |
| `reduce()`  | Accumulate values              |
| `find()`    | Find first match               |
| `every()`   | All elements match condition?  |
| `some()`    | Any element match condition?   |

---

## 💡 Extra: Array Copying Techniques

### 🔸 Shallow Copy:
- Changes in nested elements affect both arrays.
```js
const arr1 = [1, 2, 3];
const copy = arr1.slice();
```

### 🔸 Deep Copy (nested arrays or objects):
```js
const deep = JSON.parse(JSON.stringify(arr));
```

---

## 🎯 Bonus Interview Notes

### Q: Why avoid direct assignment in nested arrays?
✅ A: It can lead to unintended side-effects due to shared references.

### Q: Difference between `slice()` and `splice()`?
- `slice()` => Non-destructive, returns portion
- `splice()` => Destructive, modifies original array

### Q: How to clone an array safely?
```js
const original = [1, 2, 3];
const clone = [...original];
```

---
