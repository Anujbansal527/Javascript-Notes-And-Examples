# 🔁 JavaScript `for` Loop

`for` loop is the **most commonly used loop** in JavaScript.  
It is ideal when you know **how many times** the loop should run.

---

## 🔹 Syntax:

```js
for (initialization; condition; increment/decrement) {
  // Code to run in each loop
}
```

---

## 🔹 Flowchart:

```
Start
  ↓
Initialize i = 0
  ↓
Check condition (i < 5)
  ↓        ↓
true       false → Exit loop
  ↓
Run block
  ↓
i++
  ↓
Repeat
```

---

## 🔹 Real-Life Example

Agar 5 logon ka naam print karna ho, to hum `for` loop use kar sakte hain.

---

## 📌 Use Cases:

- Looping from 1 to N  
- Running counters  
- Working with arrays & indexes  
- Table/grid generation  

---

## ⚠️ Mistakes to Avoid

| Mistake              | Why It's Bad                            |
|----------------------|------------------------------------------|
| `i <= arr.length`    | Runs one extra time → undefined index   |
| `var` instead of `let` | May cause hoisting/block-scope issues |
| Forgetting `i++`     | Leads to infinite loop                  |

---

## 🧠 Interview Qs (for loop)

- **Q: `for` loop vs `while` loop?**  
- **Q: How does scoping behave inside `for` loop with `var` and `let`?**  
- **Q: How to break early from a `for` loop?**  
- **Q: Can you nest `for` loops? Real use?**  
- **Q: What happens if loop condition is always true?**  

---
