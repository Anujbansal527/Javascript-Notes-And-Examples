# ✅ JavaScript Logical Short-Circuiting (`&&` and `||`)

**Short-circuiting** ka matlab hai:  
**Expression ka pehla part hi final result decide kar de** — bina poora expression evaluate kiye.

JavaScript me logical operators `&&` (AND) aur `||` (OR) short-circuit karte hain.

---

## 🔹 1. Logical AND (`&&`)

```js
condition1 && condition2
```

- Agar `condition1` false hai → `condition2` evaluate hi nahi hota.  
- Pehla false value return karta hai (ya agar sab true hain, to last return hota hai).

---

## 🔹 2. Logical OR (`||`)

```js
condition1 || condition2
```

- Agar `condition1` true hai → `condition2` evaluate nahi hota.  
- Pehla true value return karta hai (ya sab false ho to last return hota hai).

---

## 🔹 Flow Diagrams:

```
AND (&&)
condition1 == false ──> return condition1
              true ──> return condition2

OR (||)
condition1 == true ──> return condition1
              false ──> return condition2
```

---

## 📌 Use Cases

- Guard clause:  
  ```js
  isLoggedIn && showDashboard();
  ```

- Fallback value:  
  ```js
  const finalInput = userInput || "Default Value";
  ```

---

### 🧠 Interview Insight

**Q: Short-circuiting vs Ternary Operator?**  
**A**:  
- **Short-circuiting**: Pehle value se hi decision ho jata hai, dusra part evaluate nahi hota.  
- **Ternary**: Dono condition ke liye value specify karni padti hai — better when both cases need handling.

**Q: Kya short-circuiting sirf condition check ke liye hoti hai?**  
**A**: Nahi — aap ise **function calls, assignments, JSX (React), DOM updates** me bhi use kar sakte ho.

---

```js
// JSX Example in React
{isLoggedIn && <Dashboard />}
```

---
