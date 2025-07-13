# 🚫 Common Mistakes in JavaScript Loops

Loop likhte time beginners aur experienced dono se kuch common galtiyan hoti hain. Yeh section unhi ko explain karta hai — with fix and examples.

---

## 🧠 1. ❌ Infinite Loops

### Problem:
Exit condition galat ya missing hai → loop kabhi rukta hi nahi.

```js
// ❌ Infinite
let i = 0;
while (i >= 0) {
  console.log(i); // kabhi rukega nahi
  i++;
}
```

### ✅ Fix:
Proper condition lagao.

```js
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

---

## 🧠 2. ❌ Forgetting Increment/Decrement

```js
for (let i = 0; i < 5;) {
  console.log(i); // stuck
}
```

### ✅ Fix:
Add `i++` or similar.

---

## 🧠 3. ❌ Misusing `continue` (skipping important logic)

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Start", i);
  // ❌ This line will never run for i = 3
  console.log("End", i);
}
```

### ✅ Fix:
Always remember `continue` skips everything **below it** inside loop body.

---

## 🧠 4. ❌ Using `for...in` for Arrays

```js
const nums = [10, 20, 30];
for (let index in nums) {
  console.log(nums[index]); // ✅ works
}
// ❌ But it's slow & not reliable with extended arrays
```

### ✅ Use:
```js
for (let num of nums) {
  console.log(num); // Better
}
```

---

## 🧠 5. ❌ Using `break` incorrectly in nested loops

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break;
    console.log(i, j);
  }
}
// ❌ Only inner loop breaks, outer keeps running
```

### ✅ Fix (If required):
Use labeled loop to break outer:

```js
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outer;
    console.log(i, j);
  }
}
```

---

## 🧠 6. ❌ Wrong loop boundary

```js
const arr = [10, 20, 30];
// ❌ runs one extra time
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]); // arr[3] is undefined
}
```

### ✅ Fix:
```js
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

---

## 🧠 7. ❌ Modifying array inside `forEach`

```js
let nums = [1, 2, 3];
nums.forEach((num, i) => {
  nums.push(num + 10); // ❌ Unexpected behavior
});
```

### ✅ Fix:
Never mutate array inside `forEach`. Use `map`, or clone array first.

---

## 🧠 8. ❌ Confusing `forEach` with async/await

```js
// ❌ await will not pause inside forEach
arr.forEach(async (item) => {
  await delay(); // doesn't wait
});
```

### ✅ Fix:
Use `for...of` with `await`:

```js
for (const item of arr) {
  await delay();
}
```

---

## 🧠 9. ❌ Variable Shadowing in Nested Loops

```js
for (let i = 0; i < 3; i++) {
  for (let i = 0; i < 2; i++) { // same variable name
    console.log(i); // confusing output
  }
}
```

### ✅ Fix:
Use different variable names or scopes.

---

## 🔚 Summary Table:

| Mistake                             | Solution                                |
|-------------------------------------|------------------------------------------|
| Infinite loop                       | Correct exit condition                   |
| Missing increment/decrement         | Always update loop variable              |
| Wrong loop type (`for...in`)        | Use `for`, `for...of` for arrays         |
| Misusing `continue`/`break`         | Know what it skips or stops              |
| `forEach` with async/await          | Use `for...of` instead                   |
| Loop boundary error (`i <= arr.len`) | Use `<`, not `<=`                        |
| Modifying array inside loop         | Avoid direct mutation during iteration   |
