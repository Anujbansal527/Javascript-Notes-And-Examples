 # 📘 JavaScript Functions – Basics

In this section, we'll understand the **foundation of JavaScript functions**:

---

## 🔹 What is a Function?

A **function** is a reusable block of code that performs a specific task.  
It allows code to be organized, tested, reused, and maintained.

```js
function greet() {
  console.log("Hello, Anuj!");
}
```
### 🔸 Why Use Functions?
Avoid repetition (DRY principle)
Code reuse
Better organization
Easy testing/debugging

### 📊 4 Types of Function Combinations
| 🔢 Type                      | Description                         |
| ---------------------------- | ----------------------------------- |
| ✅ No Parameters, No Return   | Performs task, doesn't return value |
| ✅ Parameters, No Return      | Uses input, no return               |
| ✅ No Parameters, With Return | No input, returns value             |
| ✅ Parameters, With Return    | Takes input, returns result         |

### ✅ 1. No Parameters, No Return
```js
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!
```
### ✅ 2. Parameters, No Return
```js
function greetUser(name) {
  console.log("Hello, " + name);
}
greetUser("Anuj"); // Output: Hello, Anuj
```
### ✅ 3. No Parameters, With Return
```js
function getName() {
  return "Anuj";
}
console.log(getName()); // Output: Anuj
```
### ✅ 4. Parameters, With Return
```js
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // Output: 7
```
### 📘 Important Notes:
| Concept                 | Description                                          |
| ----------------------- | ---------------------------------------------------- |
| `function` keyword      | Used to declare functions                            |
| Parameters vs Arguments | Parameters = placeholders; Arguments = actual values |
| Return                  | Ends function & sends value back                     |
| Hoisting                | Function declarations are hoisted                    |
| Naming                  | Use camelCase: `getUserData`                         |

### 📌 Interview Style Q&A:
| ❓ Question                                             | ✅ Answer                                         |
| ------------------------------------------------------ | ------------------------------------------------ |
| Can functions return multiple values?                  | No, but you can return array/object              |
| What is the default return value of a function?        | `undefined` if no return specified               |
| Can you assign function to variable?                   | Yes (function expressions)                       |
| Are function names mandatory?                          | No, anonymous functions exist                    |
| What if you call a function with fewer/more arguments? | Missing args = `undefined`, extra args = ignored |

### 📈 Visual: Function Lifecycle
```js
| Declaration  →  Hoisting  →  Memory Allocation  →  Call  →  Execution Context  →  Return |
```
