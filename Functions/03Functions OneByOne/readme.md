# 📘 Functions One by One – JavaScript

Is module me hum JavaScript ke sabhi tarah ke functions ko individually samjhenge with examples and explanations.

---

## 🔹 1. Normal Function

Ek regular function jisko `function` keyword se define karte hain.

```js
function greet(name) {
  return "Hello " + name;
}
```

### 🔹 2. Arrow Function
Short syntax hoti hai aur this lexical hota hai.
```js
```const
 greet = (name) => "Hello " + name;
### 🔹 3. Anonymous Function
Function without name, generally callback ke form me use hota hai.
```js
setTimeout(function () {
  console.log("Hi after delay");
```}, 10
00);
### 🔹 4. Named Function
Anonymous jaisa hi hai, but isme ek naam hota hai for recursion or debugging.
```js
const fn = function namedFn() {
  return "Named";
};
```
### 🔹 5. Function Expression
Function ko variable me assign karte hain.
```js
const sum = function (a, b) {
  return a + b;
};
```
### 🔹 6. Constructor Function
Object banane ke liye new keyword ke sath use hota hai.
```js
function Person(name) {
  this.name = name;
}
```
### 🔹 7. Method Function
Object ke andar defined function.
```js
const user = {
  sayHi() {
    return "Hi";
  },
};
```
### 🔹 8. Callback Function
Ek function jo kisi dusre function ko parameter me diya jata hai.
```js
function show(cb) {
  cb();
}
```
### 🔹 9. High Order Function
Function that takes another function as argument or returns function.
```js
function applyTwice(fn) {
  return function (val) {
    return fn(fn(val));
  };
}
```
### 🔹 10. Pure Function
Same input -> Same output, no side effects.
```js
function add(a, b) {
  return a + b;
}
```
### 🔹 11. Recursive Function
Function jo khud ko call karta hai.
```js
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
```
### 🔹 12. IIFE (Immediately Invoked Function Expression)
Function jo turant execute ho jata hai.
```js
(function () {
  console.log("Runs immediately");
})();
```

### 💬 Interview Questions (With Answers in .js files)
| ❓ Question                         | 💡 Answer (Brief)                    |
| ---------------------------------- | ------------------------------------ |
| Arrow vs Normal function?          | Arrow → No own `this`, shorter       |
| Function expression vs declaration | Expression not hoisted               |
| Callback vs High Order Function    | Callback passed, HOF accepts/returns |
| What is recursion?                 | Self-calling function                |
| What is pure function?             | Predictable, no side effect          |
| Constructor vs Normal Function     | Constructor used with `new`          |
| What is IIFE?                      | Immediately executed function        |
| What is a method?                  | Function inside object               |



