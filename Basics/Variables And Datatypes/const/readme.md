# 📘 `let` in JavaScript – Complete Guide

## ✅ Definition
`let` is a modern way to declare variables introduced in ES6 (2015). It solves many issues of `var`, mainly related to **block scope** and **hoisting behavior**.

```js
let x = 10;
```

## 🔍 Characteristics of `let`

| Feature              | Description |
|----------------------|-------------|
| ✅ Scope             | Block Scoped |
| ✅ Hoisting          | Yes (but TDZ - Temporal Dead Zone) |
| ❌ Redeclaration     | Not allowed in same scope |
| ✅ Reassignment      | Allowed |
| ✅ Modern Syntax     | Preferred in modern JS |

---

## 🧠 Hoisting with TDZ (Temporal Dead Zone)

### 🔸 Explanation:
- `let` variables are hoisted but **not initialized**.
- JavaScript places them in a **Temporal Dead Zone** from the start of the block until their declaration is encountered.
- Accessing the variable before declaration causes **ReferenceError**.

### 🔹 Example:
```js
console.log(a); // ❌ ReferenceError
let a = 5;
```

### 🧠 Internally:
```js
// TDZ until let a is declared
let a;
console.log(a); // undefined (if accessed after declaration)
a = 5;
```

---

## 🧾 Scope

`let` is **block-scoped**, meaning it’s only accessible inside the block where it is declared.

### 📌 Example:
```js
if (true) {
  let status = "active";
  console.log(status); // active
}
// console.log(status); // ❌ ReferenceError: status is not defined
```

---

## 🔁 Redeclaration & Reassignment

### 🔹 Redeclaration ❌ Not Allowed:
```js
let name = "Anuj";
// let name = "Bansal"; // ❌ SyntaxError
```

### 🔄 Reassignment ✅ Allowed:
```js
let city = "Indore";
city = "Bhopal"; // ✅
```

---

## 🧺 Working with Arrays and Objects

### 🔹 Arrays:
```js
let fruits = ["apple", "banana"];
fruits.push("mango");
// let fruits = ["grape"] // ❌ SyntaxError (same scope)
```

### 🔹 Objects:
```js
let user = { name: "Anuj" };
user.age = 23;
// let user = { name: "Bansal" }; // ❌ SyntaxError (redeclaration)
```

---

## ⚠️ When to Use `let`
- When the variable **needs to change/reassign**
- When you want to limit the variable to a block `{}`

---

## ✅ When NOT to Use `let`
- If the variable is **never reassigned**, prefer `const`
- Avoid `var` in favor of `let` for block scoping and cleaner code

---

## ✅ Quick Summary

| Feature         | `let`         |
|-----------------|---------------|
| Scope           | Block         |
| Block Scoped    | ✅ Yes        |
| Hoisted         | ✅ Yes (TDZ)  |
| Default Value   | ❌ ReferenceError before declaration |
| Redeclarable    | ❌ No         |
| Reassignable    | ✅ Yes        |

---
