# 📦 JavaScript ES6 Modules

## 🔹 Definition:

Modules ka matlab hota hai **code ko alag-alag files me divide karna** – reusable, manageable & maintainable banane ke liye.

**ES6 introduced `import` and `export` keywords.**

---

## 🔹 Why Use Modules?

- Reuse code across files
- Split large codebase
- Avoid polluting global scope
- Maintain separation of concern

---

## 🔹 Export Types:

### 1️⃣ Named Export

```js
export const a = 10;
export function add() {}
```

### 2️⃣ Default Export
```js
export default function() {}
```


### 🔹 Importing:
✅ Named Import
```js
import { a, add } from './math.js';
```

### ✅ Default Import
```js
import myFunc from './math.js';
```

### ✅ Rename Import
```js
import { add as plus } from './math.js';
```

### 🔹 Important Points:
- type="module" tag required in HTML to use import/export

- File must be served via server (not opened directly in browser)

- Works only at top-level scope