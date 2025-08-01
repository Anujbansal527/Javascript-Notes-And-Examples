# ✅ JavaScript Nullish Coalescing Operator (`??`)

`??` operator ka use hota hai jab aap **default value** dena chahte ho, lekin sirf tab jab original value `null` ya `undefined` ho.

---

## 🔹 Syntax:

```js
let result = value ?? defaultValue;
```

---

### 🧠 Difference from `||`:

- `||` falsy values ko bhi replace karta hai (`false`, `0`, `''`)
- `??` sirf `null` ya `undefined` ke case me replace karta hai ✅

---

## 🔹 Flow Diagram:

```
Check value:
  |
  ├── If null or undefined → Use default
  └── Else → Use actual value
```

---

## 🔹 Example:

```js
let username = null;

let displayName = username ?? "Guest";
console.log(displayName); // ✅ Output: Guest
```

---

## 📌 Use Cases

- API response defaulting  
- Form fallback values  
- Preventing null crashes  

---

### 🧠 Interview Insight

**Q: `??` vs `||` me kya difference hai?**  
**A**:

```js
let name = "";
```

- `||` check karta hai **falsy values**: `false`, `0`, `""`, `NaN`, `null`, `undefined`

```js
console.log(name || "Default"); // Output: Default
```

- `??` sirf **null ya undefined** ke liye fallback deta hai

```js
console.log(name ?? "Default"); // Output: ""
```

---
