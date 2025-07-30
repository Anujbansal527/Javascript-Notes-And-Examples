 # 🔁 Higher Order Functions (HOFs) in JavaScript

---

## 🔰 What is a Higher Order Function?

> JavaScript me koi bhi function agar **kisi function ko accept karta hai ya return karta hai**, to use **Higher Order Function** kehte hain.

---

## 🧠 Types

- A function **that takes another function as an argument**
- A function **that returns another function**

---

## 🔍 Real-World Use Cases

- 🗂️ Array operations: `map()`, `filter()`, `reduce()`
- 🔁 Debounce, Throttle
- 🔗 Currying, Compose
- 🚀 Event handling / React hooks

---

## 🛠️ Common HOFs in JavaScript

| Function | Description |
|----------|-------------|
| `map()`  | Transform each item in array |
| `filter()` | Remove unwanted items |
| `reduce()` | Combine all into single value |
| `forEach()` | Loop through (no return) |
| `sort()` | Sort items |

---

## ✅ Examples

```js
const arr = [1, 2, 3, 4];

const doubled = arr.map(n => n * 2); // [2, 4, 6, 8]

const even = arr.filter(n => n % 2 === 0); // [2, 4]

const sum = arr.reduce((acc, val) => acc + val, 0); // 10
```

### HOF vs First-Class Function
| Feature         | HOF                   | First-Class Function  |
| --------------- | --------------------- | --------------------- |
| Accepts/Returns | Yes                   | Not necessarily       |
| Example         | `map()`, `debounce()` | Any function variable |

