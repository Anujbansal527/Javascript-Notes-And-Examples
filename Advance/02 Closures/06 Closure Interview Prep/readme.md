# 💼 Closure: Interview Prep & Real-World Use

## 🔹 What You’ll Learn:

- Code output-based closure questions
- Real-world scenarios
- Patterns where closures are used
- Best answers for interview

---

## ✅ Important Questions:

### 🔸 Q1: Output of the following?

```js
function outer() {
  let x = 5;
  return function inner() {
    console.log(x++);
  }
}
const a = outer();
a(); // ?
a(); // ?
```

Output
```js
5  
6
```
Because inner function maintains closure over x.


### 🔸 Q2: Closure inside loops?
```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```
🧠 Answer:
```js
3
3
3
```
Because var is function scoped and shared across closures.

### 🔸 Q3: Can we use closure to mimic private variables?
✅ Yes, using closure to restrict variable access.

### 🧩 Real World Use Cases of Closures:
| Use Case                     | How Closure Helps                       |
| ---------------------------- | --------------------------------------- |
| Counter Function             | Maintains internal count                |
| Memoization                  | Caches results with closure variables   |
| Encapsulation                | Private data inside functions           |
| Currying                     | Pre-set some arguments using closures   |
| Event Handlers               | Retain event state via closure          |
| setTimeout/setInterval       | Access loop variables using closures    |
| React Hooks (e.g., useState) | Keep state inside functional components |




