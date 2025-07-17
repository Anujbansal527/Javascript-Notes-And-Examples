# 📘 JavaScript Strings

Strings are one of the most widely used **primitive data types** in JavaScript.  
A string is simply a **sequence of characters** enclosed in quotes.

---

## 🔹 What is a String?

- A **string** in JS represents **textual data**.
- It can contain **letters, numbers, symbols, emojis**, and more.

```js
let str1 = "Hello";     // double quotes
let str2 = 'World';     // single quotes
let str3 = `Hi ${str1}`; // backticks → Template literal
```

### 🔸 Key Properties
| Feature           | Description                                   |
| ----------------- | --------------------------------------------- |
| Immutable         | Strings cannot be changed once created        |
| Index-based       | Characters are accessed using index (0-based) |
| `length` property | Gives total characters in the string          |
| `typeof` operator | Returns `"string"`                            |
| Unicode supported | Strings can hold emojis, symbols, etc.        |
| Escape characters | `\n`, `\t`, `\'`, `\"`, etc. for formatting   |

### ✅ Declaration Types
let str1 = "Hello";          // ✅ Double quotes
let str2 = 'World';          // ✅ Single quotes
let str3 = `Hi ${str1}`;     // ✅ Template literals (supports interpolation)

### 🧠 Common String Methods

charAt(), slice(), substring()
indexOf(), lastIndexOf()
replace(), split(), trim()
toUpperCase(), toLowerCase()
includes(), startsWith(), endsWith()
concat(), repeat()