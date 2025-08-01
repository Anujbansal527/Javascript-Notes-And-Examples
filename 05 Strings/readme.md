# 📘 JavaScript Strings – Complete Mastery Guide

Welcome to the **JavaScript Strings module**, where we explore strings from fundamentals to advanced methods, real-world manipulation, and interview-level use cases.

---

## 🧠 What is a String?

A **string** is a primitive data type in JavaScript that represents **textual data** — a sequence of characters enclosed in quotes.

```js
let str1 = "Hello";         // double quotes
let str2 = 'World';         // single quotes
let str3 = `Hi ${str1}`;    // backticks → Template literal
```

---

## 📚 Folder Overview

| Folder          | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| `basics/`        | Declaration, indexing, immutability, escape characters, Unicode support |
| `methods/`       | Built-in methods like `slice`, `substring`, `split`, `replace`, etc.    |
| `operations/`    | Real-world logic: reverse, capitalize, count vowels, check palindrome   |
| `interview/`     | Interview Q&A, dry runs, string patterns and coding exercises           |

---

## 🔍 String Properties & Features

| Feature           | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| ✅ Immutable       | Strings cannot be changed once created (new string is returned)            |
| ✅ Index-based     | Characters accessed via 0-based index                                       |
| `length`          | Returns total number of characters in the string                            |
| `typeof`          | Returns `"string"`                                                          |
| Escape characters | Use `\n`, `\t`, `\"`, `\'`, `\\` for special formatting                      |
| Unicode support   | Allows emojis, symbols, languages like Hindi, Chinese, etc.                 |
| Template literals | Backtick syntax supports string interpolation and multi-line formatting     |

---

## ✅ Declaration Types

```js
let str1 = "Hello";            // ✅ Double quotes
let str2 = 'World';            // ✅ Single quotes
let str3 = `Hi ${str1}`;       // ✅ Template literals (ES6+)
```

---

## 📌 Common String Methods

| Method               | Use Case                                           |
|----------------------|---------------------------------------------------|
| `charAt(index)`      | Returns character at specified position           |
| `charCodeAt(index)`  | Returns UTF-16 code of character                  |
| `slice(start, end)`  | Extracts part of string                          |
| `substring(start, end)` | Similar to slice, but no negative index       |
| `substr(start, length)` | Legacy method – like slice but with length    |
| `indexOf(substr)`    | Finds first occurrence index                     |
| `lastIndexOf()`      | Finds last occurrence index                      |
| `includes(substr)`   | Returns true if substring found                  |
| `startsWith()`       | Checks if string starts with given text          |
| `endsWith()`         | Checks if string ends with given text            |
| `replace()`          | Replaces first match                             |
| `replaceAll()`       | Replaces all occurrences (ES2021)                |
| `toUpperCase()`      | Converts to uppercase                            |
| `toLowerCase()`      | Converts to lowercase                            |
| `trim()`             | Removes whitespace (both ends)                   |
| `split(delimiter)`   | Converts string to array                         |
| `concat()`           | Combines strings                                 |
| `repeat(n)`          | Repeats the string `n` times                     |
| `padStart()`, `padEnd()` | Pads the string with characters              |

---

## 🔠 String Type Variants

### 🔹 1. Normal Strings
Most commonly used for literal text.

```js
let name = "Anuj";
```

---

### 🔹 2. Template Literals
Useful for **multiline** strings and **string interpolation**.

```js
let city = "Indore";
let info = `Welcome to ${city} city!`;
```

---

### 🔹 3. Unicode Strings
Strings that include emojis, special symbols, or international characters.

```js
let smile = "😊";
let hindi = "नमस्ते";
```

---

## 🧪 String Operations (Real-world Tasks)

| Operation             | Technique                                |
|------------------------|------------------------------------------|
| Reverse a string       | `split('').reverse().join('')`           |
| Capitalize each word   | Combine `split`, `map`, `join`           |
| Count vowels           | Regex + loop                             |
| Palindrome check       | Compare original with reversed string    |
| Frequency of letters   | Hashmap-style logic                      |
| String compression     | Replacing repeated sequences             |
| Remove spaces/extra    | Use `trim()`, `replace(/\s+/g, ' ')`     |

---

## 💬 Common String Interview Questions

| Question                                      | Concept                                |
|----------------------------------------------|----------------------------------------|
| How to reverse a string in JS?               | `split().reverse().join()`             |
| Difference between `slice()` and `substring()`? | `slice` supports negative indexes     |
| Is string mutable in JS?                     | ❌ No – it returns a new string         |
| Use of `includes()` vs `indexOf()`?          | `includes()` is cleaner for boolean    |
| Difference between `==` and `===` on strings?| `===` checks type & value both         |
| Count frequency of characters                | Use `for..of` + object hash            |
| How do template literals work?               | Backticks + `${variable}` interpolation|
| Convert string to array                      | Use `split()`                          |
| What is Unicode and how is it used in JS?    | Universal character support            |

---

## ✅ Best Practices

- ✅ Prefer template literals for string building
- ✅ Always check `.length` before accessing characters
- ✅ Use `trim()` for user input cleanup
- ⚠️ Avoid string concatenation in loops (use `+=` or arrays instead)
- ✅ Use `includes()` for cleaner substring checking
- ✅ Use regex wisely for validation & pattern matching

---

Would you like the `basics/` and `methods/` folders filled with structured topics next? I can generate:

- Full list of files for each section  
- Real code examples inside  
- Interview-style exercises inside `/interview/`

Let me know how you'd like to proceed 🚀
