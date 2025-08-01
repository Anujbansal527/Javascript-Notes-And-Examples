# ✅ JavaScript Ternary Operator (?:)

`Ternary Operator` ek **short-hand version** hota hai `if...else` ka.  
Jab aapko chhoti condition ek hi line me likhni ho, tab use hota hai.

---

## 🔹 Syntax:

```js
condition ? expression_if_true : expression_if_false;
```

---

## 🔹 Flow Diagram:

```
Check Condition
  |
  ├── True  → Run True Expression
  └── False → Run False Expression
```

---

## 🔹 Example:

```js
let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result); // ✅ Output: Adult
```

---

## 📌 Use Cases

- UI message switch  
- Return value based on condition  
- Assigning value in one line  

---

### 🧠 Interview Insight

**Q: Ternary operator me nested conditions likh sakte ho?**  
**A**: Haan, lekin readability ke liye avoid karo unless it's very short.  
Prefer `if...else` for clarity.

**Q: Kya ternary sirf assignment ke liye hota hai?**  
**A**: Nahi. Ternary ka result kisi bhi jagah use ho sakta hai — console, return, DOM update, etc.

---
