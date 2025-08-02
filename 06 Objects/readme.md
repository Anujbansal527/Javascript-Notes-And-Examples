# 📦 JavaScript Objects – Complete Mastery Guide

JavaScript **objects** are the **foundation of most JS applications** — used for data modeling, configurations, API communication, and dynamic behavior.

---

## 🧠 What is an Object?

An **object** is a non-primitive data type that allows you to store **multiple values** as **key-value pairs** in a single variable.

```js
let person = {
  name: "Anuj",
  age: 23,
  isStudent: true
};
```

---

## 📚 Folder Overview

| Folder            | Description                                                              |
|-------------------|--------------------------------------------------------------------------|
| `basics/`         | Object creation, property access, nested objects                         |
| `methods/`        | Built-in methods: assign, freeze, seal, entries, keys, values            |
| `operations/`     | Cloning, merging, comparing, immutability tricks                         |
| `interview/`      | Common questions, dry runs, logic rounds with nested or dynamic objects  |

---

## 📦 Key Features of Objects

| Feature               | Description                                                           |
|------------------------|----------------------------------------------------------------------|
| ✅ Key-Value pairs      | Values are stored as `{ key: value }`                                |
| ✅ Dynamic structure    | You can add/delete keys anytime                                      |
| ✅ Dot/Bracket notation | Access using `obj.key` or `obj["key"]`                               |
| ✅ Nesting              | Objects can hold other objects/arrays                                |
| ✅ Functions            | Objects can have methods (function as value)                         |
| ✅ Reference type       | Stored and passed by reference (not by value)                        |

---

## ✅ Object Property Access

```js
let user = { name: "Anuj", age: 23 };

// Dot notation
console.log(user.name); // Anuj

// Bracket notation
console.log(user["age"]); // 23

// Dynamic key access
let key = "name";
console.log(user[key]); // Anuj
```

---

## 🔄 Common Operations

| Operation            | Code Example                         | Notes                                   |
|----------------------|---------------------------------------|-----------------------------------------|
| Add property         | `obj.newProp = val`                  | Adds new key                            |
| Modify value         | `obj.key = newVal`                   | Overwrites                              |
| Delete key           | `delete obj.key`                     | Removes key                             |
| Check key exists     | `"key" in obj` or `hasOwnProperty()` | Boolean check                           |
| Loop over object     | `for...in`, `Object.keys()`          | Keys, values, entries                   |
| Destructuring        | `const { name } = obj`               | Extract values easily                   |
| Merge objects        | `Object.assign()` or `{...a, ...b}`  | Merge properties                        |
| Clone object         | `{...obj}` or `Object.assign({}, obj)` | Shallow clone                         |

---

## 🔁 Iterating Over Object

```js
let obj = { a: 1, b: 2 };

for (let key in obj) {
  console.log(key, obj[key]);
}

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
```

---

## 🧩 Real-World Use Cases

- User profiles
- API response structure
- Config files
- Storing dynamic state (in React, Vue)
- Form data representation
- Caching and localStorage/sessionStorage

---

## 🔒 Object Utility Methods

| Method              | Description                                                 |
|---------------------|-------------------------------------------------------------|
| `Object.keys(obj)`  | Returns array of keys                                       |
| `Object.values(obj)`| Returns array of values                                     |
| `Object.entries(obj)`| Returns array of `[key, value]` pairs                      |
| `Object.assign()`   | Copies properties into a target object                      |
| `Object.freeze()`   | Makes object immutable                                      |
| `Object.seal()`     | Prevents adding/removing, allows value modification         |
| `Object.fromEntries()` | Convert key-value array back into object                 |

---

## 🧪 Type Checking for Objects

```js
typeof obj         // "object"
obj instanceof Object // true
Array.isArray(obj) // false
```

---

## 🧠 Object Interview Questions

| ❓ Question                                     | 💡 Tip                                       |
|-----------------------------------------------|----------------------------------------------|
| What is an object in JS?                      | A collection of key-value pairs              |
| Difference: dot vs bracket notation?          | Bracket supports dynamic keys                |
| How to loop over object keys?                 | `for...in`, `Object.keys()`                  |
| Difference between `in` and `hasOwnProperty()`?| `hasOwnProperty()` avoids inherited props     |
| How to clone an object?                       | Spread or `Object.assign()` (shallow)        |
| Deep vs Shallow clone?                        | Deep copies nested levels                    |
| What does `this` mean inside object method?   | Refers to the calling object                 |
| How to freeze/seal objects?                   | `Object.freeze()` / `Object.seal()`          |
| Can we modify a const object?                 | Yes, values can be changed, not reassigned   |

---

## 🧠 Deep Dive: Nested Object Access

```js
const user = {
  name: "Anuj",
  address: {
    city: "Indore",
    pin: 452001
  }
};

console.log(user.address.city);     // Indore
console.log(user["address"]["pin"]); // 452001
```

Optional chaining for safety:

```js
console.log(user?.address?.city); // Indore
```

---

## 🧪 Object Comparison Gotchas

```js
const a = { name: "Anuj" };
const b = { name: "Anuj" };
console.log(a === b); // false (different references)
```

✅ Use deep comparison functions or libraries (like Lodash’s `isEqual`)

---

## 📦 Object vs Array – Comparison

| Feature        | Object                            | Array                            |
|----------------|------------------------------------|----------------------------------|
| Access         | `obj.key` or `obj["key"]`          | `arr[index]`                     |
| Order          | Unordered                         | Ordered by index                 |
| Ideal Use      | Structured data (profiles, config) | Lists, sequences, indexed data   |
| Iterable with  | `for...in`, `Object.keys()`        | `for`, `for...of`, `forEach()`   |
| Keys/Index     | Named keys                         | Numbered index                   |

---

## 💡 Pro Tips

- ✅ Use `const` when declaring objects (prevents re-assignment)
- ✅ Use bracket notation when accessing dynamic keys
- ✅ Use `Object.freeze()` for safe configurations
- ⚠️ Don’t forget that objects are passed by reference
- ✅ Always use `hasOwnProperty()` in loops when safety matters
- ✅ For structured data storage, prefer object-of-arrays or array-of-objects depending on use case

---

