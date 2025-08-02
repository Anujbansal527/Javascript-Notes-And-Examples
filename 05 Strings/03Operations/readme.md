 # 🔧 String Operations in JavaScript

In JavaScript, string operations refer to various actions we can perform on strings, like joining, searching, extracting, replacing, comparing, slicing, etc.

---

## ✅ Common String Operations

| Operation            | Description                                             | Example                                 |
|----------------------|---------------------------------------------------------|------------------------------------------|
| Concatenation        | Combine 2 or more strings                               | `str1 + str2`, `str1.concat(str2)`      |
| Access Characters    | Use index or `charAt()`                                 | `str[0]`, `str.charAt(1)`               |
| Slicing              | Extract part of string                                  | `slice()`, `substring()`                |
| Replace Text         | Replace substrings                                      | `replace()`, `replaceAll()`             |
| Trim Spaces          | Remove spaces from ends                                 | `trim()`, `trimStart()`, `trimEnd()`    |
| Changing Case        | Convert to upper/lower case                             | `toUpperCase()`, `toLowerCase()`        |
| Splitting            | Split string into array                                 | `split()`                               |
| Searching            | Search within a string                                  | `includes()`, `indexOf()`, `search()`   |
| Repeat String        | Repeat string N times                                   | `repeat(n)`                             |
| Convert to String    | Convert other types to string                           | `toString()`, `String(val)`             |
| Escape Characters    | Handle quotes, slashes                                  | `\n`, `\"`, `\\`                         |

---

## 🧠 Interview Notes:

| ❓ Question                                 | ✅ Answer/Tip                                       |
|-------------------------------------------|----------------------------------------------------|
| Difference between `slice` & `substring`  | `slice` supports negative indices, `substring` doesn't |
| How to split a string by comma            | Use `str.split(",")`                               |
| Does `replace()` change all occurrences?  | No, only first → Use `replaceAll()` for all        |
| Is string mutable in JS?                  | No, strings are immutable                          |
| Best way to concatenate                   | `+`, `concat()`, or template literals              |

---

## 🚧 Edge Cases

- `"Anuj".charAt(100)` → returns `""`
- `"".split(",")` → returns `[""]`
- `" ".trim()` → returns `""`
