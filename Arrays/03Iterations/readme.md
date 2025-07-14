# 🔄 Array Iteration in JavaScript

This section explains how to **iterate** over arrays using different loop methods like `for`, `while`, `forEach`, `for...of`, and `for...in`.

---

## ✅ Why Do We Iterate?

Iteration helps us:
- Access and manipulate each element in the array
- Perform operations like filtering, summing, transforming, etc.

---

## 🔁 Common Iteration Techniques

### 🔹 1. `for` loop (classic)
```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
### 🔹 2. while loop
```js
let i = 0;
while (i < arr.length) {
  console.log(arr[i]);
  i++;
}
```

### 🔹 3. do...while loop
```js
let i = 0;
do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);
```


### 🔸 Modern & Cleaner Iteration
### 🔹 4. forEach() → Best for side effects (no return)
```js
arr.forEach((val, index) => {
  console.log(index, val);
});
```

### 🔹 5. for...of → Works on iterable arrays
```js
for (let value of arr) {
  console.log(value);
}
```

### 🔹 6. for...in → For keys (usually for objects)
```js
for (let key in arr) {
  console.log(key, arr[key]); // index and value
}
```

⚠️ Avoid for...in for arrays when order matters.

✅ Good Practices
| ✅ Best Practice                   | ❌ Avoid                             |
| --------------------------------- | ----------------------------------- |
| `forEach()` for readability       | `for...in` on arrays (not ideal)    |
| Use `map()` if transforming array | Mutating original array inside loop |
| Keep loop index scope clean       | Nesting loops unnecessarily         |


💬 Interview Insights
| Question                                         | Tip                                                             |
| ------------------------------------------------ | --------------------------------------------------------------- |
| Difference between `for`, `forEach`, `for...of`? | `forEach` doesn’t break/return, `for...of` works with iterables |
| How to loop and return new array?                | Use `map()`                                                     |
| Can we break a `forEach`?                        | ❌ No                                                            |
| When not to use `for...in`?                      | When you care about **order** or non-index keys                 |
| Can we use `await` in `forEach()`?               | ❌ Not effective. Use `for...of` for async loops                 |


---
