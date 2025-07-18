# 📦 JavaScript Objects – Complete Guide

JavaScript objects are the **backbone** of JS programming. They store **key-value pairs** and are used for everything — from data structures to configuration, APIs, and more.

---

## 🔹 What is an Object?

An **object** is a non-primitive data type used to **store multiple values** in a single variable using **key-value pairs**.

```js
let person = {
  name: "Anuj",
  age: 23,
  isStudent: true
};
```
### 🧠 Why Use Objects?
Group related data together
Organize code
Dynamic and expandable
Pass data around (especially in APIs)

### 📦 Key Concepts
| Feature               | Description                         |
| --------------------- | ----------------------------------- |
| Key-Value pairs       | `key: value` syntax                 |
| Accessing properties  | `obj.key` or `obj["key"]`           |
| Adding new properties | `obj.newKey = value`                |
| Modifying values      | `obj.key = newValue`                |
| Deleting properties   | `delete obj.key`                    |
| Nesting               | Object inside object                |
| Iteration             | `for...in`, `Object.keys()`, etc.   |
| Methods               | Functions inside objects            |
| Destructuring         | Extract properties easily           |
| Object Operations     | Cloning, merging, freezing, sealing |


### 🧩 Real-World Examples
User profiles
Config settings
API response data
Complex data structures (objects of arrays, nested)

### ✅ Object vs Array
| Feature | Object                   | Array                      |
| ------- | ------------------------ | -------------------------- |
| Type    | Key-value pairs          | Ordered list (index based) |
| Access  | `obj.key` / `obj["key"]` | `arr[index]`               |
| Usage   | Store structured data    | Store ordered values       |

### 📚 Common Interview Questions
| ❓ Question                                     | ✅ Tip                                |
| ---------------------------------------------- | ------------------------------------ |
| What is an object in JS?                       | Non-primitive, key-value pairs       |
| Difference between dot vs bracket notation?    | Bracket supports dynamic keys        |
| How to loop over object properties?            | `for...in`, `Object.keys()`          |
| How to check if key exists?                    | `"key" in obj` or `hasOwnProperty()` |
| How to clone an object?                        | Spread operator or `Object.assign()` |
| Difference between shallow & deep clone?       | Deep clone handles nested structures |
| What is `this` in an object method?            | Refers to the current object         |
| What are object methods like `freeze`, `seal`? | `freeze` makes object immutable      |
| How are objects stored in memory?              | Reference-based                      |


### 🧪 Object Type Check
```js
typeof obj        // "object"
Array.isArray(obj) // false (for arrays)
obj instanceof Object // true
```

### 🔐 Bonus: Object Immutability
| Method            | Description                          |
| ----------------- | ------------------------------------ |
| `Object.freeze()` | Prevents changes (add/remove/modify) |
| `Object.seal()`   | Allows modify but not add/remove     |
| `Object.assign()` | Clone and merge objects              |

### 🧠 Pro Tip: Use const with objects
Even with const, object contents can be changed.
```js
const user = { name: "Anuj" };
user.name = "Bansal"; // ✅ allowed
```

