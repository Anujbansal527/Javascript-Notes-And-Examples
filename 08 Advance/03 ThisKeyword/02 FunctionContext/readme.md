 
 # 🔹 Function Context me `this`

## 📌 Definition:
Jab hum `this` ko **function ke andar** use karte hain, uska value depend karta hai:

- Kya aap **strict mode** use kar rahe ho?
- Kya function **directly call** ho raha hai ya kisi object ke through?

---

## ✅ 1. Non-strict mode (Normal mode)

```js
function show() {
  console.log(this); // 👉 window (in browser)
}
show();
```

### ✅ 2. Strict mode
```js
"use strict";
function show() {
  console.log(this); // 👉 undefined
}
show();
```

### ✅ 3. Object ke through call (method banake)
```js
const obj = {
  name: "Anuj",
  show: function () {
    console.log(this.name); // 👉 "Anuj"
  },
};
obj.show();
```

### ⚠️ Common Confusion: this function ke andar alag ho jaata hai agar aap method ko kisi variable me assign kar do:
```js
const obj = {
  name: "Anuj",
  show: function () {
    console.log(this.name);
  },
};

const ref = obj.show;
ref(); // 👉 undefined, kyunki ab yeh window ke context me chala
```

### 📌 Summary Table:
| Mode            | Value of `this`    |
| --------------- | ------------------ |
| Normal          | window (browser)   |
| Strict          | undefined          |
| Method call     | Object             |
| Detached method | Global / undefined |

### 💬 Interview Tip:
"Agar function directly call ho, this global object hota hai (non-strict); but agar use object ke method ke roop me call karein, tab this ban jaata hai object."




