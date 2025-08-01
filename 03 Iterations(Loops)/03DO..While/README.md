# 🔁 JavaScript `do...while` Loop

`do...while` loop **guarantees at least one execution**,  
chahe condition pehle se false ho.

---

## 🔹 Syntax

```js
do {
  // Code block
} while (condition);
```

---

## 🔹 Flowchart

```
Start
  ↓
Run block once
  ↓
Check condition
  ↓       ↓
true     false → Exit
  ↓
Repeat
```

---

## 🔹 Real-Life Example

"Try karo jab tak successful ho ya ek baar to try kar hi lo!"  
Like password prompt – run at least once before checking validity.

---

## 📌 Use Cases

- Prompt input at least once  
- Retry logic that should run minimum one time  
- Form validation that starts with default attempt  

---

## ⚠️ Common Mistakes

| Mistake                            | Result                              |
|------------------------------------|-------------------------------------|
| Semicolon missing after `while`    | Syntax error                        |
| Infinite loop                      | If condition always true            |
| Thinks it won't run on false       | It always runs once, even if false |

---

## 🧠 Interview Qs (do...while)

- **Q: Difference between `while` and `do...while`?**  
- **Q: When to prefer `do...while` over `while`?**  
- **Q: Can you use `break` and `continue` inside `do...while`?**  

---
