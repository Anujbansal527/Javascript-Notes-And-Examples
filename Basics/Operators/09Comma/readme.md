# 📊 JavaScript Comma Operator (`,`)

Comma operator multiple expressions ko **ek hi line me evaluate** karta hai, lekin **last expression ka result** return karta hai.

Ye mainly `for` loops, inline multiple assignments, or short expressions me use hota hai.

---

## ✅ Syntax

let result = (expr1, expr2, expr3);
Yahan expr1 aur expr2 evaluate hote hain
Lekin final value expr3 return hoti hai

✅ Example
let x = (10, 20, 30);
console.log(x); // 30 (sirf last value assign hoti hai)

🧠 For Loop Use
for (let i = 0, j = 5; i < j; i++, j--) {
  console.log(i, j);
}

### 💡 Interview Questions
### 🔸 Q1: Comma operator ka real use case kya hai?
**Ans**: Jab aap ek hi line me multiple expressions run karna chahte ho, but sirf last ka output chahiye.

### 🔸 Q2: Comma operator vs multiple statements?
**Ans**:
Comma operator ek expression banata hai.
Multiple statements alag-alag execute hote hain.

### 🔸 Q3: Can comma operator affect performance?
**Ans**: Generally no. But it can reduce code readability if misused.

---
