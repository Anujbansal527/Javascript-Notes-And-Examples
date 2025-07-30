# 📙 Array Methods in JavaScript

JavaScript me array ke saath kaam karne ke liye kai powerful built-in methods diye gaye hain.

---

## 🧰 Category-wise Array Methods

### 🔹 Add/Remove Elements

| Method     | Description                           |
|------------|---------------------------------------|
| `push()`   | Add at end                            |
| `pop()`    | Remove from end                       |
| `unshift()`| Add at beginning                      |
| `shift()`  | Remove from beginning                 |
| `splice()` | Add/remove at specific position       |

### 🔹 Access/Search

| Method        | Description                            |
|---------------|----------------------------------------|
| `indexOf()`   | Index of first occurrence              |
| `includes()`  | Checks if element exists               |
| `find()`      | Returns first matching element         |
| `findIndex()` | Returns index of matching element      |

### 🔹 Conversion & Join

| Method     | Description                         |
|------------|-------------------------------------|
| `join()`   | Converts array to string            |
| `toString()`| Similar to `join()` with commas     |

### 🔹 Slice/Modify

| Method     | Description                                     |
|------------|-------------------------------------------------|
| `slice()`  | Returns new array (doesn’t modify original)     |
| `splice()` | Removes/replaces/adds elements (modifies array) |

### 🔹 Sorting & Reversing

| Method     | Description         |
|------------|---------------------|
| `sort()`   | Sort alphabetically |
| `reverse()`| Reverses order      |

### 🔹 Merge/Fill/Flatten

| Method     | Description                             |
|------------|-----------------------------------------|
| `concat()` | Merges arrays                           |
| `fill()`   | Fills all elements with given value     |
| `flat()`   | Flattens nested arrays into single level|

---

## 🧠 Interview Insights

| ❓ Question                                   | ✅ Tip                                  |
|---------------------------------------------|-----------------------------------------|
| Difference between `splice()` and `slice()` | `splice` modifies, `slice` doesn't      |
| Best way to merge arrays                    | Use `concat()` or spread `[...]`        |
| How to remove duplicates from array         | Use `Set`: `Array.from(new Set(arr))`   |
| How to flatten deeply nested arrays         | Use `flat(Infinity)`                    |
| Why not use `sort()` directly for numbers?  | Use `sort((a, b) => a - b)`             |
| How to check if array                      | `Array.isArray()`                       |

---

## 🧪 Advanced Usage Tip

### Custom Sorting

```js
let nums = [10, 1, 5];
nums.sort((a, b) => a - b); // ascending
nums.sort((a, b) => b - a); // descending
```