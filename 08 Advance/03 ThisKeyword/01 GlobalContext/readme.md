```markdown
# 🌍 Global Context me `this`

## 🔹 Definition:
Jab `this` ko kisi function ke bahar ya global area me use kiya jaata hai, toh yeh **global object** ko refer karta hai.

- **Browser me:** `this === window`
- **Node.js me:** `this === global`

---

## ⚠️ Strict Mode Difference:
Agar aap `"use strict"` lagate ho, toh global function ke andar `this` ban jaata hai `undefined`.

---

## 🧠 Visual:

```js
console.log(this); // window (in browser)
```

### 📌 Use-Cases:
- Window properties access

- Global variables tracking

- Warning for strict mode

### 💬 Interview Tip:
"this" in global = window only in non-strict mode





