# 📘 String Properties in JavaScript

In JavaScript, **strings are primitive data types** but they behave like objects temporarily because of **wrapper objects** (String class) provided by JavaScript.

---

## 🔑 Common String Properties

| Property     | Description                               | Example                     |
| ------------ | ----------------------------------------- | --------------------------- |
| `.length`    | Returns the number of characters          | `"Anuj".length → 4`         |
| `typeof`     | Returns `"string"`                        | `typeof "Anuj" → string`    |
| `constructor`| Returns the constructor function          | `str.constructor === String`|
| `prototype`  | Used to add methods to String class       | `String.prototype.newFunc`  |

---

## 📌 Notes:

- String is **immutable**, i.e., original string can't be changed.
- `.length` is the **only native property** available directly.
- All other features (methods like `toUpperCase`, `trim`, etc.) come from **String.prototype**

---

## 🧠 Interview Insights

| Question                                          | Answer/Tips |
| ------------------------------------------------ | ----------- |
| What is the type of `"Anuj"`                     | string      |
| What is returned by `"hello".length`             | 5           |
| Is `"hello".length` a method?                    | No, it's a property |
| Can you change a string like array?              | No, string is immutable |
| How to check if variable is a string?            | `typeof val === 'string'` |

---

## ✅ Example

```js
let str = "JavaScript";
console.log(str.length); // 10
console.log(typeof str); // "string"
console.log(str.constructor === String); // true
```