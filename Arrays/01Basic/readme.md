# 📘 Arrays: Basics in JavaScript

This section covers the **fundamentals of arrays**: how to create, access, update, and understand their structure.

---

## 🔹 What is an Array?

An array is a **special object** used to **store multiple values** in a single variable.  
Each value in an array is called an **element**, and it is accessed using an **index**.

---

## 🔸 Array Syntax

```js
let arrayName = [element1, element2, element3];
```

| Feature  | Example                     | 
| -------- | --------------------------- |
| Indexing | Starts from `0`             |
| Length   | `array.length`              |
| Type     | `typeof` returns `"object"` |
| Dynamic  | Can grow or shrink anytime  |
| Mixed    | Can store multiple types    |

✅ Ways to Create Arrays
####  Using square brackets (most common)
```js
let fruits = ["apple", "banana", "mango"];
```

####  Using Array constructor
```js
let numbers = new Array(1, 2, 3); // Not recommended often
```

#### Empty array with length
```js
let emptyArr = new Array(5); // [empty × 5]
```

#### Using spread + loop

```js
let filled = [...Array(5)].map((_, i) => i + 1); // [1,2,3,4,5]
```

#### 🎯 Accessing Array Elements
```js
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // mango
```

#### 🧪 Modifying Array Values
```js
fruits[1] = "orange"; // Replace banana with orange
```

#### 📦 Array of Mixed Types
```js
let mixed = ["Anuj", 22, true, null];
```

### 📌 Properties and Observations
```js
Arrays are dynamic in JS (auto-resizable)
JavaScript arrays are zero-indexed
typeof array === "object"
Use Array.isArray() to check if it's really an array
```

### 💬 Interview Pointers

| ❓ Question                             | ✅ Tip                                               |
| -------------------------------------- | --------------------------------------------------- |
| What is the type of an array?          | typeof → "object", use `Array.isArray()` to confirm |
| Can arrays store different data types? | Yes                                                 |
| Are arrays fixed-length?               | No, they're dynamic                                 |
| Can we access indexes beyond length?   | Yes, but will return `undefined`                    |
| Can we leave empty slots in arrays?    | Yes, but avoid it (e.g. `[1,,3]`)                   |

