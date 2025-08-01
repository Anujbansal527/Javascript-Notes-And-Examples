# ✅ JavaScript Early Return Pattern

**Early return** ka matlab hai:  
**Function ke andar condition satisfy hote hi turant return kar dena** — taaki unnecessary code run na ho.

Iska main goal hota hai:
- Code ko readable banana  
- Unwanted nesting avoid karna  

---

## 🔹 Syntax:

```js
function checkAge(age) {
  if (age < 18) {
    return "You are underage";
  }

  return "Welcome!";
}
```

---

## 🔹 Flow Diagram:

```
Start
 |
Check condition
 ├── true  → return early (exit)
 └── false → continue rest of the function
```

---

## 📌 Use Cases

- Form validation  
- Login check  
- Preventing complex nested if-else chains  

---

### 🧠 Interview Insight

**Q: Early return ka benefit kya hota hai?**  
**A**:  
- Readability improve hoti hai  
- Fewer nested blocks  
- Cleaner and more performant functions

**Q: Kya early return sirf functions me hota hai?**  
**A**:  
Haan — sirf functions ke andar `return` statement kaam karta hai.  
Outside `return` ka use nahi hota unless inside **IIFE** or **module**.

---
