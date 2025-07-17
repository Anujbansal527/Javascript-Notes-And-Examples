# 📘 JavaScript Strings – Basics

This section covers everything about **declaring, accessing, and understanding strings** in JavaScript.

---

## 🔹 What is a String?

A **string** is a sequence of characters enclosed in:

- `"double quotes"`
- `'single quotes'`
- `` `backticks` `` (template literals)

Strings are **immutable** and **primitive types** in JavaScript.

---

## 🔸 Declaring Strings

```js
let name1 = "Anuj";       // double quotes
let name2 = 'Bansal';     // single quotes
let name3 = `Hi ${name1}`; // template literal with variable
```

### 🔸 String Index
```js
let name = "Anuj";
console.log(name[0]); // A
console.log(name[3]); // j
```
Strings are 0-indexed
Accessing an index outside range returns undefined

### 🔸 String Immutability
```js
let name = "Anuj";
name[0] = "B"; // ❌ Strings can't be modified this way
name = "Banuj"; // ✅ Reassign instead
```


### 
🔸 Template Literals (Backticks)
    Allows:
        Multi-line strings
        Interpolation using ${}

```js
let name = "Anuj";
let greeting = `Hello, ${name} 👋`;
```

### 🔸 Escape Sequences
| Escape | Meaning      | Example               |
| ------ | ------------ | --------------------- |
| `\n`   | New line     | `"Line1\nLine2"`      |
| `\t`   | Tab          | `"Hello\tWorld"`      |
| `\'`   | Single quote | `'I\'m Anuj'`         |
| `\"`   | Double quote | `"He said \"Hi\""`    |
| `\\`   | Backslash    | `"C:\\Program Files"` |


### 🔸 length Property
```js
let name = "JavaScript";
console.log(name.length); // 10
```
Returns the number of characters.

### 🔸 String Type
```js
console.log(typeof "Anuj"); // "string"
```

### 🔸 Multiline Strings
```js
let multi = `This is
a multiline
string`;
```

### 📌 Interview Tips (Basics)
| ❓ Question                               | ✅ Tip                               |
| ---------------------------------------- | ----------------------------------- |
| Is string mutable in JS?                 | ❌ No. They're immutable             |
| How to reverse a string?                 | Use `.split("").reverse().join("")` |
| What is typeof a string?                 | `"string"`                          |
| What is the output of `"A" + 1`?         | `"A1"` (String concatenation)       |
| Can we store emojis or Unicode?          | ✅ Yes                               |
| How to check the length of a string?     | Use `.length`                       |
| Can strings store multiple types?        | No — all are treated as characters  |
| Is `" "` (space) considered a character? | ✅ Yes. It has a length of 1         |
| Use case of backticks?                   | String interpolation and multiline  |














