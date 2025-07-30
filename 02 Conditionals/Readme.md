# 📘 JavaScript Conditionals (if, else, switch, ternary)

Yeh section cover karta hai JavaScript ke sabhi important **Conditional Statements** with real-life examples, diagrams, and interview questions.

---

## 🔥 What are Conditionals in JavaScript?

Conditionals allow us to **make decisions** in our code based on certain conditions. Yeh check karte hain kya koi condition true hai ya false, aur uske base pe alag logic run karte hain.

### 🔗 Real-World Analogy:
"Agar barish ho rahi hai (if it is raining), to chhata le jao (take umbrella), warna nahi (else don’t take)."

---

## 📁 Folder Structure:
```
Conditionals/
├── If/
├── IfElse/
├── IfElseIf/
├── NestedIf/
├── IfElseLadder/
├── Switch/
├── Ternary/
├── OptionalChaining/
├── NullishCoalescing/
├── ShortCircuiting/
├── EarlyReturn/
```

Each folder contains:
- ✅ `README.md` → Concept, diagram, syntax, use case
- 💻 `example.js` → Hinglish explained working code

---

## 🧠 Interview Questions (Conditionals)

### 🔸 Q1: JavaScript me conditionals ka use kyu hota hai?
**Ans:** Logic flow control ke liye. Aap check kar sakte ho ki koi condition true hai ya nahi, aur us hisaab se code run kar sakte ho.

### 🔸 Q2: `if` aur `switch` me kya difference hai?
**Ans:**
- `if` multiple complex logic, range-based conditions ke liye useful hai.
- `switch` discrete values ke liye best hota hai (like roles, categories).

### 🔸 Q3: Nested if vs else-if ladder?
**Ans:**
- **Nested if:** ek if ke andar doosra if (dependent checks)
- **Ladder:** multiple options sequentially check karne ke liye

### 🔸 Q4: Ternary operator kab use karte ho?
**Ans:** Jab simple if-else logic ko ek line me likhna ho.

### 🔸 Q5: Optional chaining (`?.`) aur nullish coalescing (`??`) ka use kya hai?
**Ans:**
- `?.` – agar koi property exist nahi karti, to error na aaye.
- `??` – agar value `null` ya `undefined` ho, tabhi fallback dena.

### 🔸 Q6: Logical short-circuiting kya hota hai?
**Ans:**
- `&&` aur `||` se conditional execution hota hai bina `if` likhe.
- Example: `isLoggedIn && showDashboard()`

### 🔸 Q7: `early return` ka concept kya hai?
**Ans:** Function ke start me hi exit karna agar condition meet ho jaye. Improves readability.

---

## 📊 Sample Flow Diagram for `if-else`

```
Start
  |
Condition → true → Execute If block
       ↓ false
     Execute Else block
       ↓
      End
```

---

## 🔗 Topics Covered:

1. **If Statement**
2. **If...else Statement**
3. **If...else if Statement**
4. **Nested If Statement**
5. **If-else Ladder**
6. **Switch Statement**
7. **Ternary Operator**
8. **Optional Chaining (`?.`)**
9. **Nullish Coalescing (`??`)**
10. **Logical Short-Circuiting (`&&`, `||`)**
11. **Early Return Pattern**

---

