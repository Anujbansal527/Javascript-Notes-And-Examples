# 📘 JavaScript Functions – Master Guide

Functions are the **heart of JavaScript programming**. They help us **organize, reuse, and modularize** our code effectively.

---

## 📚 What is a Function?

🔸 A **function** is a reusable block of code designed to perform a particular task.  
🔸 Functions are **first-class citizens** in JavaScript (they can be stored in variables, passed as arguments, returned from other functions).

```js
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Anuj")); // Output: Hello, Anuj
```
### 🧠 Function Execution Working (Behind the Scenes)
Code enters Global Execution Context (GEC)
Memory allocation happens first (Hoisting phase)
Function declaration is hoisted (value = actual code)
Execution phase begins → function invoked
Creates a Local Execution Context (LEC) for each call
Stack-based model (LIFO) handles execution

### 🔍 Common Function Terminology (Must-Know)
| 🔸 Term                     | 🧠 Meaning                                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Hoisting**                | Function declarations are hoisted to top of scope                                                                |
| **TDZ**                     | Temporal Dead Zone – relevant for `let`, `const` (not function, but impacts function usage if arrow/let is used) |
| **Lexical Scope**           | Scope is determined by **where** function is written, not called                                                 |
| **Call Stack**              | JS uses stack to manage function calls                                                                           |
| **Arguments vs Parameters** | Parameters are declared, arguments are passed                                                                    |
| **Pure Function**           | Output depends only on input, no side effects                                                                    |
| **Recursion**               | Function calls itself with smaller input                                                                         |

### 🔍 Basic Interview Questions (Verbal Style)
| ❓ Question                                              | ✅ Hint                                                             |
| ------------------------------------------------------- | ------------------------------------------------------------------ |
| What is the difference between a function and a method? | Method is tied to object                                           |
| What is hoisting in case of functions?                  | Function declaration moves to top                                  |
| Can you return a function from another function?        | Yes – Closure or HOF                                               |
| Difference between function declaration and expression? | Declaration hoisted, expression is not                             |
| What is a callback function?                            | Function passed as argument to another function                    |
| What is lexical scope?                                  | Scope decided at write-time, not run-time                          |
| What is closure in JS?                                  | Inner function accessing parent variables even after outer is done |
| What happens when you call a function before declaring? | If declared → works due to hoisting; if expression → error         |


### 🔄 Function Flow Example (Stack + Execution Context)
```js
function first() {
  console.log("First");
  second();
}

function second() {
  console.log("Second");
  third();
}

function third() {
  console.log("Third");
}

first();
```
## 🔹 Output:
```js
First
Second
Third
```

### 🔹 Stack Flow:
GEC created
first() pushed to stack
inside first(), second() pushed
inside second(), third() pushed
third() completes, pops → second() pops → first() pops









