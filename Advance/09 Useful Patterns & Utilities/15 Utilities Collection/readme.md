# 🧰 JavaScript Utilities Collection

---

## 🔰 What is a Utility Function?

> Utility functions woh hote hain jo common, repetitive tasks ko simplify karte hain — like array flatten, deep clone, type check, debounce, etc.

---

## 📦 Included Utilities

| Utility Name          | Description |
|------------------------|-------------|
| `capitalize(str)`      | First letter capital |
| `isEmail(str)`         | Valid email checker |
| `flattenArray(arr)`    | Nested array flatten |
| `deepClone(obj)`       | Deep copy of object |
| `isEmpty(obj)`         | Check empty object/array |
| `debounce(fn, delay)`  | Delay execution |
| `throttle(fn, delay)`  | Limit execution |
| `randomHexColor()`     | Random color generator |
| `generateID(len)`      | Custom length ID |
| `chunkArray(arr, n)`   | Split array into chunks |

---

## 🧠 Why Use Utility Functions?

- 🔁 Reusability  
- 🧼 Cleaner Code  
- 🛠️ Abstracted Logic  
- 📦 Modular + Maintanable

---

## 🧱 Structure Example

```js
const Utils = {
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
  isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
};
```

