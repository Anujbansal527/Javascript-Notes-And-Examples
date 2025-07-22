
JavaScript supports multiple types of functions based on how they're declared and used.

---

## 📌 Types of Functions:

| Function Type           | Description |
|-------------------------|-------------|
| Function Declaration    | Standard way using `function` keyword |
| Function Expression     | Function stored in a variable |
| Anonymous Function      | No name; often used as callbacks |
| Arrow Function          | ES6 shorthand, lexical `this` |
| Named Function Expression | Has name but stored in variable |
| Callback Function       | Passed as argument to another function |
| Constructor Function    | Creates objects using `new` keyword |
| IIFE (Immediately Invoked Function Expression) | Runs immediately after definition |
| Generator Function      | Yields multiple values one-by-one |

---

## 🔹 1. Function Declaration

```js
function greet() {
  console.log("Hello!");
}
```
✅ Hoisted (accessible before declaration)

### 🔹 2. Function Expression
```js
const greet = function () {
  console.log("Hello!");
};
```
❌ Not hoisted (can't call before declaration)

### 🔹 3. Anonymous Function
```js
setTimeout(function () {
  console.log("This is anonymous");
}, 1000);
```
✅ No name, used in callbacks or events

### 🔹 4. Arrow Function
```js
const greet = () => {
  console.log("Hello from arrow!");
};
```
✅ Shorter syntax
❌ No this, no arguments object

### 🔹 5. Named Function Expression
```js
const show = function display() {
  console.log("Named Expression");
};
```
✅ Useful for recursion in expressions

### 🔹 6. Callback Function
```js
function greet(name, callback) {
  console.log("Hi", name);
  callback();
}

greet("Anuj", function () {
  console.log("Welcome!");
});
```
✅ Used in async code (setTimeout, event handlers, etc.)

### 🔹 7. Constructor Function
```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Anuj");
console.log(p1.name); // Output: Anuj
```
✅ Used to create instances (objects)

### 🔹 8. IIFE – Immediately Invoked
```js
(function () {
  console.log("IIFE runs instantly!");
})();
```
✅ Enclosed in () and runs automatically

### 🧠 Interview QnA:
| ❓ Question                                  | ✅ Answer                          |
| ------------------------------------------- | --------------------------------- |
| Which functions are hoisted?                | Function declarations only        |
| Difference between arrow & normal function? | Arrow has no `this`, shorter      |
| When to use callback?                       | Async tasks, events               |
| Can you store function in a variable?       | Yes, function expression          |
| Is function a datatype?                     | No, it’s a special type of object |


