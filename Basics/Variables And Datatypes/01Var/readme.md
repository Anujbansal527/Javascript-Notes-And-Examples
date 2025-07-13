# 📘 `var` in JavaScript – Complete Guide

## ✅ Definition
`var` is the oldest keyword in JavaScript used for variable declaration. It was introduced in the early versions of JavaScript (before ES6). While it's still valid, it's not commonly recommended for modern code due to its quirks with scope and hoisting.

```js
var x = 10;
```

## 🔍 Characteristics of `var`

| Feature              | Description |
|----------------------|-------------|
| ✅ Scope             | Function Scoped (not block scoped) |
| ✅ Hoisting          | Yes, hoisted to the top of function or global scope |
| ✅ Redeclaration     | Allowed within the same scope |
| ✅ Reassignment      | Allowed |
| ❗ Block Scope       | Not supported |
| ✅ Works in ES5/ES6  | Yes |


## 🧠 Hoisting (Important Concept)

### 🔸 Explanation:
- Jab aap `var` use karte ho, to JavaScript engine pehle se hi us variable ko memory me allocate kar deta hai with a default value `undefined`.
- Is process ko **Hoisting** kehte hain.
- Is wajah se aap variable ko uske declaration ke pehle bhi access kar sakte ho, bina error ke.

### 🔹 Example:
```js
console.log(a); // Output: undefined
var a = 5;
```
### 🔍 Internally:
```js
var a;           // hoisted declaration
console.log(a);  // undefined
a = 5;           // assignment
```

---

## 🧾 Scope

`var` is function-scoped. Agar aap kisi block (e.g., `if`, `for`) ke andar `var` se variable banate ho, to wo block ke bahar bhi accessible hota hai agar wo kisi function ke andar nahi hai.

### 📌 Example:
```js
if (true) {
  var status = "active";
}
console.log(status); // active (block ke bahar bhi accessible)
```

### ✅ Function Scope Example:
```js
function greet() {
  var msg = "Hello";
  console.log(msg);
}
greet();
// console.log(msg); // ❌ ReferenceError
```

---

## 🔁 Redeclaration & Reassignment

```js
var name = "Anuj";
var name = "Bansal"; // ✅ No error

name = "Mr. B";       // ✅ Allowed
console.log(name);    // Mr. B
```

---

## 🧺 Working with Arrays and Objects

### 🔹 Arrays:
```js
var fruits = ["apple", "banana"];
fruits.push("mango");
var fruits = ["grape"]; // Redeclaration allowed
```

### 🔹 Objects:
```js
var user = { name: "Anuj" };
user.age = 23;
var user = { name: "Bansal" }; // Redeclaration allowed
```

---

## ⚠️ When NOT to Use `var`
- When working in modern JavaScript (ES6+), prefer using `let` or `const`
- To avoid accidental hoisting issues
- To maintain block-level scope and avoid bugs

---

## ✅ Use `var` ONLY WHEN:
- You are maintaining legacy code
- You are working in environments that don’t support ES6

---

## ✅ Quick Summary

| Feature         | `var`         |
|-----------------|---------------|
| Scope           | Function      |
| Block Scoped    | ❌ No         |
| Hoisted         | ✅ Yes        |
| Default Value   | `undefined`   |
| Redeclarable    | ✅ Yes        |
| Reassignable    | ✅ Yes        |

---

