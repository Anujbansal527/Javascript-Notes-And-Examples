## 🧠 Loop Interview Questions (With Answers)

### 🔹 Q1: What types of loops are available in JavaScript?
**Ans:**
- `for`
- `while`
- `do...while`
- `for...of`
- `for...in`
- `Array` loop methods like `.forEach()`

---

### 🔹 Q2: Difference between `for...of` and `for...in`?
**Ans:**
- `for...of` → iterate **values** (best for arrays, strings)
- `for...in` → iterate **keys/indexes** (best for objects)

---

### 🔹 Q3: When to use `while` vs `for` loop?
**Ans:**
- `for` is best when number of iterations is known
- `while` is better when condition-based repetition is needed

---

### 🔹 Q4: Can we use `break` and `continue` inside loops?
**Ans:** Yes.
- `break` → exits the loop
- `continue` → skips current iteration and moves to next

---

### 🔹 Q5: Difference between `do...while` and `while` loop?
**Ans:**
- `while` → condition check first, then body runs
- `do...while` → body runs once, then condition check

---

### 🔹 Q6: Can we use async/await inside `.forEach()`?
**Ans:** No. `forEach` doesn’t wait for async callbacks. Use `for...of` instead.

---

### 🔹 Q7: What is a labeled loop in JavaScript?
**Ans:** It allows breaking out of nested loops using custom labels.

```js
outer: for (...) {
  for (...) {
    if (...) break outer;
  }
}
```

---

### 🔹 Q8: What is the difference between `forEach()` and `map()`?
**Ans:**
- `forEach` → executes logic on each item, returns `undefined`
- `map` → returns a **new array** after transforming items

---

### 🔹 Q9: Can loops be nested?
**Ans:** Yes. You can nest any loop inside another. Common in matrix problems.

---

### 🔹 Q10: What is the impact of infinite loop?
**Ans:** It crashes the browser or freezes app. Always add safe exit condition.

---

### 🔹 Q11: Why is `goto` not used in JavaScript?
**Ans:** Because it leads to unreadable, unstructured, and hard-to-maintain code.

---

### 🔹 Q12: How can we exit multiple loops?
**Ans:** Use labeled loops or `return` inside functions.

---

## 🔢 Loop-Based Coding Questions with Solutions

### ✅ Print all even numbers from 1 to N
```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) console.log(i);
}
```

### ✅ Print all odd numbers from 1 to N
```js
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) console.log(i);
}
```

### ✅ Check if a number is Prime
```js
const num = 17;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(`${num} is`, isPrime ? 'Prime' : 'Not Prime');
```

### ✅ Armstrong Number (153 = 1³ + 5³ + 3³)
```js
const number = 153;
const digits = number.toString().split("").map(Number);
const result = digits.reduce((sum, d) => sum + d ** digits.length, 0);
console.log(number === result ? "Armstrong" : "Not Armstrong");
```

### ✅ Perfect Number (e.g., 28 = 1+2+4+7+14)
```js
const n = 28;
let sum = 0;
for (let i = 1; i < n; i++) {
  if (n % i === 0) sum += i;
}
console.log(n === sum ? "Perfect Number" : "Not Perfect Number");
```

### ✅ Star Pattern - Pyramid
```js
const rows = 5;
for (let i = 1; i <= rows; i++) {
  console.log(" ".repeat(rows - i) + "* ".repeat(i));
}
```

### ✅ Reverse a Number
```js
let num = 12345;
let reversed = 0;
while (num !== 0) {
  reversed = reversed * 10 + (num % 10);
  num = Math.floor(num / 10);
}
console.log("Reversed:", reversed);
```

### ✅ Fibonacci Series
```js
let n1 = 0, n2 = 1, next;
console.log(n1, n2);
for (let i = 3; i <= 10; i++) {
  next = n1 + n2;
  console.log(next);
  n1 = n2;
  n2 = next;
}
```

### ✅ Factorial of a number
```js
const num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log("Factorial:", fact);
```

## 🔢 Loop-Based Coding Questions with Solutions

### ✅ Arithmetic Progression (AP)
```js
// AP: a, a+d, a+2d, ...
let a = 2, d = 3;
for (let i = 0; i < 10; i++) {
  console.log(a + i * d);
}
```

### ✅ Geometric Progression (GP)
```js
// GP: a, a*r, a*r^2, ...
let g = 2, r = 3;
for (let i = 0; i < 10; i++) {
  console.log(g * r ** i);
}
```

### ✅ Fibonacci Series
```js
let n1 = 0, n2 = 1;
console.log(n1, n2);
for (let i = 2; i < 10; i++) {
  let next = n1 + n2;
  console.log(next);
  n1 = n2;
  n2 = next;
}
```

### ✅ Square Numbers
```js
for (let i = 1; i <= 10; i++) {
  console.log(i ** 2);
}
```

### ✅ Cube Numbers
```js
for (let i = 1; i <= 10; i++) {
  console.log(i ** 3);
}
```

### ✅ Triangular Numbers
```js
// 1, 3, 6, 10, 15...
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
  console.log(sum);
}
```

### ✅ Factorial Series
```js
let fact = 1;
for (let i = 1; i <= 10; i++) {
  fact *= i;
  console.log(fact);
}
```

### ✅ Odd Number Series
```js
for (let i = 1; i < 20; i += 2) {
  console.log(i);
}
```

### ✅ Even Number Series
```js
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
```

### ✅ Prime Number Series (first 10 primes)
```js
let count = 0, num = 2;
while (count < 10) {
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
    count++;
  }
  num++;
}
```

### ✅ Alternating Series (1, -2, 3, -4, ...)
```js
for (let i = 1; i <= 10; i++) {
  console.log(i % 2 === 0 ? -i : i);
}
```

### ✅ Power of 2 Series (1, 2, 4, 8, ...)
```js
for (let i = 0; i < 10; i++) {
  console.log(2 ** i);
}
```

### ✅ Reverse Number Series
```js
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```
