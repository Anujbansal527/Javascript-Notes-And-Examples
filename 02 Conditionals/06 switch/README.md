# ✅ JavaScript Switch Statement

`switch` statement ko use karte hain jab aapko ek hi variable ke multiple exact values check karne hote hain.  
Ye `if-else if` ka cleaner and faster alternative hota hai for value-based checks.

---

## 🔹 Syntax:

```js
switch (expression) {
  case value1:
    // code block
    break;
  case value2:
    // code block
    break;
  default:
    // default block
}
```

---

## 🔹 Flow Diagram:

```
Start
  |
Evaluate Expression
  |
  ├── Case 1 Match → Run Block → Break
  ├── Case 2 Match → Run Block → Break
  ├── ...
  └── Default → Run if No Match
```

---

## 🔹 Example:

```js
let fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("Yellow fruit");
    break;
  case "apple":
    console.log("Red fruit");
    break;
  default:
    console.log("Unknown fruit");
}
```

### ✅ Output:
```
"Red fruit"
```

---

## 📌 Use Cases

- Role-based permissions  
- Menu selection  
- Status response codes  

---

### 🧠 Interview Insight

**Q: Switch vs If-Else Ladder?**  
**A**:  
- `switch` is better for **discrete values** (exact matches)  
- `if...else` is better for **range, boolean, or complex expressions**

**Q: Kya `break` statement likhna zaroori hai?**  
**A**: Haan, warna next cases bhi automatically execute ho jate hain (*fall-through* hota hai)

---
