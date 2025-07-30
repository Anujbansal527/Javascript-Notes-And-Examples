 # ✅ JavaScript Nested If Statement

`Nested if` ka matlab hota hai — ek `if` ke andar doosra `if`. Ye tab use hota hai jab aapko **dependent conditions** check karni hoti hain.

---

## 🔹 Syntax:

```js
if (condition1) {
  // Outer if block
  if (condition2) {
    // Inner if block
  }
}


### 🔹 Flow Diagram:

Start
  |
Check Condition 1
  |
  ├── False → Skip All
  └── True
        ↓
    Check Condition 2
        ↓
     Run Inner Code

### 🔹 Example:
let age = 22;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  }
}

✅ Output: "You can drive"

### 📌 Use Cases
Security + authentication layered logic
UI role-based access control

Validating nested inputs (like form -> section -> field)

### 🧠 Interview Insight
### Q: Kya nested if readability ko impact karta hai?
**A**: Haan, agar zyada nesting ho to readability reduce ho sakti hai. Refactor using &&, guard clauses, or functions.

---

```js