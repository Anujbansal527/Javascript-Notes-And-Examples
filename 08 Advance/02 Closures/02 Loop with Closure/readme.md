 # 🔁 Closure inside Loops (var vs let)

## 🔹 Problem Statement

Loop me closure ka use karte waqt `var` ka scope **function scoped** hota hai, isliye uska value overwrite ho jata hai. Lekin `let` ka scope **block scoped** hota hai – toh har iteration me naya value banta hai.

---

## 🔸 Example with `var`

```js
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```
Output
```js
3  
3  
3
```
📌 var har iteration me overwrite ho gaya aur setTimeout ke time tak i = 3 ho chuka tha.

### 🔸 Solution 1: Use let
```js
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
```
Output
```js
0  
1  
2
```
✅ Because let is block scoped – har loop iteration me naya i create hota hai.

### 🔸 Solution 2: Use IIFE (Immediately Invoked Function Expression)
```js
for (var i = 0; i < 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log(x);
    }, 1000);
  })(i);
}
```
✅ IIFE ke through x har iteration ka snapshot le leta hai.

### 🔸 Flow Chart (Simplified): 
```js
Loop with var:
 └─ setTimeout closure holds ref to same `i` → updated → 3 printed 3 times

Loop with let:
 └─ Each iteration makes new block scoped `i` → 0,1,2 individually

Loop with IIFE:
 └─ Pass `i` as argument → saved in `x` → used in closure
```

### 🔍 Interview Tip:
Q: Explain output of loop with setTimeout using var vs let
➡️ Always answer with: scope difference, closure reference vs value copy.











