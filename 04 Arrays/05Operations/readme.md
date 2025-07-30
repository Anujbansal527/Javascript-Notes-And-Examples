# 📦 Arrays → Operations

This section explains key operations you can perform on arrays, such as cloning, rotating, flattening, merging, and more.

---

## 🔄 Common Array Operations

### 1. 🧬 Shallow Copy
```js
let arr = [1, 2, 3];
let copy1 = [...arr];       // Spread operator
let copy2 = arr.slice();    // slice()
let copy3 = Array.from(arr);
```
> ⚠️ These create shallow copies — nested arrays/objects will still be referenced.

### 2. 🧬 Deep Copy
```js
let nested = [1, [2, 3]];
let deep = JSON.parse(JSON.stringify(nested));
let better = structuredClone(nested); // Preferred in modern JS
```
> ✅ Deep copy replicates nested elements, avoiding mutation issues.

---

### 3. 🔗 Merge Arrays
```js
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b]; // [1, 2, 3, 4]
```

---

### 4. 🔄 Rotate Array
```js
let arr = [1, 2, 3, 4, 5];

// Left Rotate by 2
let leftRotated = arr.slice(2).concat(arr.slice(0, 2));

// Right Rotate by 2
let rightRotated = arr.slice(-2).concat(arr.slice(0, -2));
```

---

### 5. 🔁 Reverse Array
```js
let reversed = [...arr].reverse();
```

---

### 6. 🚫 Remove Duplicates
```js
let nums = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(nums)]; // [1, 2, 3, 4]
```

---

### 7. 🧾 Count Frequencies
```js
let freq = {};
let arr = [1, 2, 2, 3];
arr.forEach(num => {
  freq[num] = (freq[num] || 0) + 1;
});
```

---

### 8. ➕ Sum of Elements
```js
let arr = [1, 2, 3, 4];
let total = arr.reduce((sum, val) => sum + val, 0); // Output: 10
```

---

### 9. 🔡 Convert to String
```js
let joined = arr.join("-"); // Output: "1-2-3-4"
```

---

### 10. 🪜 Flatten Nested Arrays
```js
let nested = [1, [2, [3, 4]], 5];
nested.flat(1); // [1, 2, [3, 4]]
nested.flat(2); // [1, 2, 3, 4, 5]
```

---

## 📌 Summary Table

| Operation            | Method/Trick               |
|----------------------|----------------------------|
| Clone Array          | `slice()`, `[...arr]`      |
| Merge Arrays         | Spread `[...a, ...b]`      |
| Reverse              | `reverse()`                |
| Rotate               | `slice()` + `concat()`     |
| Flatten              | `flat(depth)`              |
| Remove Duplicates    | `Set()` + spread           |
| Count Frequency      | Loop + Object              |
| Sum Elements         | `reduce()`                 |
| Array to String      | `join()`                   |

---

## 💬 Interview Pointers

| ❓ Question                                 | ✅ Tip                          |
|--------------------------------------------|----------------------------------|
| How to deep copy an array with objects?    | Use `structuredClone` or recursion |
| Remove duplicates?                         | Use `Set()`                      |
| Flatten a 2D or nested array?              | Use `flat(depth)`                |
| Rotate an array left/right?                | Use `slice()` and `concat()`     |
| Count frequency of elements?               | Object loop or `Map()`           |
| Merge two arrays?                          | Spread or `concat()`             |
| Convert to CSV or string?                  | `join()`                         |
