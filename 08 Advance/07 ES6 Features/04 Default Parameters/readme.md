# 🧮 Default Parameters in Functions

## 🔹 Definition:

Default parameters ka matlab hota hai – function ke parameters ko **default value assign karna**, agar koi value pass na ho.

**Introduced in ES6**, yeh feature unnecessary `if` checks aur undefined value handling se bachata hai.

---

## 🔹 Syntax:

```js
function greet(name = "Anuj") {
  console.log(`Hello ${name}`);
}
```

Agar name pass nahi kiya toh "Anuj" use hoga.

### 🔹 Before ES6 (Old Way):
```js
function greet(name) {
  name = name || "Anuj";
  console.log("Hello", name);
}
```

### 🔹 Benefits:
- Cleaner code

- No need for extra if checks

- Works well with destructuring

- Avoids undefined values

### 🔹 Default Parameters Flow
```js
A[Function Call] --> B[Check Arguments]
B --> C{Argument Provided?}
C -- Yes --> D[Use Provided Value]
C -- No --> E[Use Default Value]
```

### 🔹 Use Cases:
- Setting fallback values

- Optional configuration

- Handling missing data gracefully

### 🔹 Caveats:
- Always define default parameters after required ones

- You can use expressions as default values (like Math.random())

### 🔹 Real-World Usage:
```js
function createUser(name = "Guest", isAdmin = false) {
  return { name, isAdmin };
}
```


