# 📘 Advanced Function Concepts in JavaScript

This section dives deeper into function-related topics often asked in interviews.

---

## 🔹 01. Arrow Function vs Regular Function

| Feature              | Arrow Function                         | Regular Function                     |
|----------------------|-----------------------------------------|--------------------------------------|
| `this` keyword       | Lexically scoped (`this` of parent)     | Dynamically scoped                   |
| Constructor usage    | ❌ Cannot be used as constructor         | ✅ Can be used with `new`            |
| `arguments` object   | ❌ Not available                         | ✅ Available                         |
| Syntax               | Concise                                  | Verbose                              |

---

## 🔹 02. Closures

A **closure** is formed when a function retains access to variables from its **lexical scope** even after the outer function has returned.

📌 Example:
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```

Closures are used in:

- Data hiding (private variables)

- Memoization

- Event handlers

### 🔹 03. this Keyword
this refers to the context in which the function is called.
| Type            | Value of `this`                       |
| --------------- | ------------------------------------- |
| Global scope    | `window` (in browsers)                |
| Inside method   | Object that calls the method          |
| Arrow function  | Lexically inherited from parent scope |
| `call`, `apply` | Explicitly set by first argument      |
| Event listeners | Element that fired the event          |


### 🔹 04. Arguments vs Parameters
| Term       | Meaning                                    |
| ---------- | ------------------------------------------ |
| Parameters | Variable names used in function definition |
| Arguments  | Actual values passed during function call  |

```js
function greet(name) {  // name is a parameter
  console.log("Hello " + name);
}
greet("Anuj");  // "Anuj" is an argument
```

### 🔹 05. Function vs Method
| Feature         | Function                 | Method                          |
| --------------- | ------------------------ | ------------------------------- |
| Definition      | Standalone block of code | Function associated with object |
| Usage           | Called directly          | Called on object like obj.fn()  |
| `this` behavior | Depends on context       | Refers to calling object        |


