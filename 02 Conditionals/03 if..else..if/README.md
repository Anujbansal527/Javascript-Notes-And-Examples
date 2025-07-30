 # ✅ JavaScript If...Else If Statement

Jab aapko ek se zyada **multiple conditions** check karni ho, tab `if...else if...else` ladder use karte hain.

---

## 🔹 Syntax:

```js
if (condition1) {
  // Run if condition1 is true
} else if (condition2) {
  // Run if condition2 is true
} else {
  // Run if none of the above conditions are true
}


### 🔹 Flow Diagram:
Start
  |
Check Condition 1
  |-- True --> Run Block 1
  ↓
Check Condition 2
  |-- True --> Run Block 2
  ↓
Else Block (default)
  ↓
 End

### 🔹 Example:
let score = 75;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 70) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

✅ Output: "Grade B"

### 📌 Use Cases
Marksheet grade system

User role based access (admin, editor, viewer)

Multiple route conditions

### 🧠 Interview Insight
### Q: How many else if can you use?
**A**: Unlimited. But too many can reduce readability — prefer switch or object-based logic in complex cases.

---


```js