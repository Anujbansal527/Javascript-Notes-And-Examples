 # ✅ JavaScript If-Else Ladder

`If-else ladder` tab use hota hai jab multiple conditions ko sequentially check karna ho. Yeh almost `if...else if...else` ke jaisa hi hota hai — bas emphasis hota hai ek ke baad ek check karne par.

---

## 🔹 Syntax:

```js
if (condition1) {
  // Block 1
} else if (condition2) {
  // Block 2
} else if (condition3) {
  // Block 3
} else {
  // Default block
}

### 🔹 Flow Diagram:
Start
  |
Check condition1
  ├─ True → Block1
  └─ False
      ↓
Check condition2
  ├─ True → Block2
  └─ False
      ↓
Check condition3
  ├─ True → Block3
  └─ False → Else Block

### 🔹 Example:
let value = 15;

if (value < 10) {
  console.log("Less than 10");
} else if (value < 20) {
  console.log("Between 10 and 20");
} else {
  console.log("20 or more");
}

✅ Output: "Between 10 and 20"

### 📌 Use Cases
Menu options
Complex validation conditions
Multiple user levels / statuses

### 🧠 Interview Insight
### Q: Ladder vs Nested if: kya difference hai?
**A**:
Ladder = parallel independent checks
Nested if = inner condition dependent on outer condition

---

```js