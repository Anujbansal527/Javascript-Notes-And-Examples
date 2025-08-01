# 🌍 Global Context me `this`

## 🔹 Definition:
Jab `this` ko kisi function ke bahar ya global area me use kiya jaata hai, toh yeh **global object** ko refer karta hai.

- ✅ **Browser me:** `this === window`
- ✅ **Node.js me:** `this === global`

---

## ⚠️ Strict Mode Difference

Agar aap `"use strict"` lagate ho, toh **global function ke andar** `this` ka reference `undefined` ho jaata hai.

```js
"use strict";

function checkThis() {
  console.log(this); // ❌ undefined in strict mode
}
checkThis();
```

📌 Without `"use strict"`:

```js
function checkThis() {
  console.log(this); // ✅ window (in browser)
}
checkThis();
```

---

## 🧠 Visual

```js
console.log(this); // ✅ window (in browser global scope)
```

---

## 📌 Use-Cases:

- ✅ Accessing global `window` properties  
- ✅ Debugging or tracking global variables  
- ⚠️ Identifying `this` behavior in strict mode  

---

## 💬 Interview Tip

> `"this"` in global scope → `window` (in browser), unless you're in **strict mode**, then it's `undefined` inside a regular function.

---

