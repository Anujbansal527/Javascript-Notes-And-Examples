# ✅ JavaScript If...Else Statement

Jab aapko koi condition ke basis pe **do possible blocks** run karne ho — ek jab condition true ho aur ek jab false ho — tab `if...else` use hota hai.

---

## 🔹 Syntax:

```js
if (condition) {
  // true: ye block chalega
} else {
  // false: ye block chalega
}
```

---

## 🔹 Flow Diagram:

```
Start
  |
Check Condition
  |---- True ---> Run IF Block
  |---- False --> Run ELSE Block
  ↓
 End
```

---

## 🔹 Example:

```js
let marks = 45;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
```

### ✅ Output:
```
"Fail" (kyunki 45 < 50)
```

---

## 📌 Use Cases

- Login successful ya failed  
- User is admin or normal user  
- Form field empty or filled  

---

### 🧠 Interview Insight

**Q: Can we nest if...else inside each other?**  
**A**: Haan. Nested if...else use kar sakte ho jab condition ke andar aur bhi condition check karni ho.

---
