# 📘 `const` in JavaScript – Complete Guide

## ✅ Definition
`const` is a keyword introduced in **ES6 (2015)** used to declare **read-only** variables. Once assigned, a `const` variable **cannot be reassigned**.

```js
const x = 10;
```

## 🔍 Characteristics of `const`

| Feature              | Description |
|----------------------|-------------|
| ✅ Scope             | Block Scoped |
| ✅ Hoisting          | Yes (but TDZ - Temporal Dead Zone) |
| ❌ Redeclaration     | Not allowed |
| ❌ Reassignment      | Not allowed |
| ✅ Constant Reference| Cannot be changed, but contents (object/array) can be mutated |

---

## 🧠 Hoisting with TDZ

### 🔸 Explanation:
- `const` variables are **hoisted** but remain in the **TDZ (Temporal Dead Zone)** until initialized.
- Accessing them before the line of declaration will cause a **ReferenceError**.

### 🔹 Example:
```js
console.log(a); // ❌ ReferenceError
const a = 5;
```

---

## 🧾 Scope

`const` is **block scoped**, just like `let`.

### 📌 Example:
```js
if (true) {
  const city = "Indore";
  console.log(city); // Indore
}
// console.log(city); // ❌ ReferenceError: city is not defined
```

---

## 🔁 Redeclaration & Reassignment

### ❌ Redeclaration Not Allowed:
```js
const name = "Anuj";
// const name = "Bansal"; // ❌ SyntaxError
```

### ❌ Reassignment Not Allowed:
```js
const role = "Student";
// role = "Developer"; // ❌ TypeError: Assignment to constant variable.
```

---

## 🧺 Arrays & Objects with const

✅ Even though reassignment is not allowed, you can still **modify the content** of arrays and objects declared using `const`.

### 🔹 Arrays:
```js
const fruits = ["apple", "banana"];
fruits.push("mango"); // ✅ Allowed
console.log(fruits); // [ 'apple', 'banana', 'mango' ]

// fruits = ["grape"]; // ❌ TypeError
```

### 🔹 Objects:
```js
const user = { name: "Anuj" };
user.age = 23; // ✅ Allowed

// user = { name: "Bansal" }; // ❌ TypeError
```

---

## ✅ When to Use `const`
- Jab aapko variable ki value kabhi change nahi karni ho
- For better readability and safer code
- For constants, config values, fixed references

---

## ⚠️ When NOT to Use `const`
- If you need to reassign the variable later (use `let` instead)
- If the variable is used in a loop counter or conditional value

---

## ✅ Quick Summary

| Feature         | `const`       |
|-----------------|---------------|
| Scope           | Block         |
| Block Scoped    | ✅ Yes        |
| Hoisted         | ✅ Yes (TDZ)  |
| Default Value   | ❌ ReferenceError before declaration |
| Redeclarable    | ❌ No         |
| Reassignable    | ❌ No         |
| Mutable Content | ✅ (for arrays & objects) |

---
