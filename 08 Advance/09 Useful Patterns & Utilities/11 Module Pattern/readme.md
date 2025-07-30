# 🧰 JavaScript Utilities Collection (Module Pattern)

---

## 🔰 What is Module Pattern?

> **Module Pattern** ek technique hai jisme hum apne code ko **encapsulate** karte hain — matlab variables/functions ko private ya public define karte hain ek hi object ke andar using closure.

📌 Yeh ek pattern hai jisme:
- ✅ Private state maintain kar sakte ho
- ✅ Public methods expose karte ho
- ✅ Code reuse kar sakte ho

---

## 🧱 Syntax

```js
const myModule = (function () {
  // Private data
  let count = 0;

  // Public API
  return {
    increment: () => ++count,
    get: () => count
  };
})();
```
### 📦 Included Utilities
| Utility Name          | Description                    |
| --------------------- | ------------------------------ |
| `capitalize(str)`     | First letter uppercase         |
| `isEmail(str)`        | Check valid email format       |
| `flattenArray(arr)`   | Flatten nested array           |
| `deepClone(obj)`      | Deep clone an object           |
| `isEmpty(obj)`        | Check if object/array is empty |
| `debounce(fn, delay)` | Delay function execution       |
| `throttle(fn, limit)` | Limit function execution rate  |

### 🧠 Why Use Module Pattern?
🎯 Prevent global pollution

🔐 Hide internal logic (private scope)

♻️ Reusable helper functions

📦 Easy to manage as API/service




