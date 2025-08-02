 # 💼 JavaScript Strings – Interview Q&A

This section contains the most **frequently asked interview questions** on strings along with explanations and tips.

---

## 📘 Common Questions with Tips

| ❓ Question                                                             | ✅ Answer / Tip |
|------------------------------------------------------------------------|----------------|
| What is a string in JavaScript?                                        | A primitive data type to store text |
| Are strings mutable in JavaScript?                                     | ❌ No, strings are **immutable** |
| How to check the type of string?                                       | `typeof str === 'string'` |
| How to check if variable is a string?                                  | `typeof` or `typeof === "string"` |
| How to reverse a string?                                               | Convert to array, use `reverse()` |
| Difference between `slice()` and `substring()`                         | `slice()` supports negative index, `substring()` doesn't |
| Can we modify characters using index like arrays?                      | ❌ No |
| How to remove whitespace from a string?                                | `trim()`, `trimStart()`, `trimEnd()` |
| How to split a sentence into words?                                    | `str.split(" ")` |
| Difference between `includes()`, `indexOf()`, and `search()`           | `includes()` returns true/false, others return position |
| How to replace all substrings?                                         | Use `replaceAll()` or regex with `g` flag |
| What is the output of `"a" + 1` vs `"4" - 1`                            | `"a1"` and `3` – (type coercion) |
| How to convert other data types to string?                             | `String(val)` or `.toString()` |
| Can string be used like an array?                                      | Readable yes, writable ❌ |
| What does `charAt()` do?                                               | Returns character at given index |
| Is `==` and `===` same for strings?                                    | Use `===` to avoid coercion |

---

## 💡 Useful Patterns

| Task                          | Pattern/Method                       |
|-------------------------------|--------------------------------------|
| Reverse a string              | `str.split('').reverse().join('')`   |
| Capitalize first letter       | `str[0].toUpperCase() + str.slice(1)`|
| Count vowels                  | Use regex `/[aeiou]/gi` + match()    |
| Count characters              | `str.length`                         |
| Remove duplicates             | Use `Set` or loop                    |
| Check for palindrome          | Reverse string and compare           |

---

## 📌 Tip: String is immutable

```js
let str = "Anuj";
str[0] = "M";
console.log(str); // Output: "Anuj" (no change)
```

### 🔁 Real-World Coding Rounds
| 🔹 Task                            | 🧠 Tip                                        |
| ---------------------------------- | --------------------------------------------- |
| Remove vowels from a string        | Regex replace: `str.replace(/[aeiou]/gi, '')` |
| Compress a string (e.g. aabbbcc)   | Use loop + counter logic                      |
| Anagram check                      | Sort both strings and compare                 |
| Palindrome string                  | Compare with reverse of string                |
| Find first non-repeating character | Frequency map                                 |
| Frequency of all characters        | Object-based counter                          |
