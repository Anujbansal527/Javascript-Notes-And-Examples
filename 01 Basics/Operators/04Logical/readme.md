# 🔗 JavaScript Logical Operators

Logical operators conditions ke combination aur decision making ke liye use hote hain. Ye mostly `if`, `while`, loops, or validation me kaam aate hain.

## ✅ Operators List:

| Operator | Description            | Example              | Result     |
|----------|------------------------|-----------------------|------------|
| `&&`     | AND (sabhi true ho)    | `true && false`       | false      |
| `||`     | OR (koi bhi ek true)   | `true || false`       | true       |
| `!`      | NOT (ulta kar deta hai)| `!true`               | false      |

---

## 💡 Interview Questions

### Q1: `&&` aur `||` me difference?
**Ans:**
- `&&`: dono operands true hone chahiye
- `||`: ek bhi operand true ho to output true ho jata hai

```js
true && false → false  
true || false → true

```
### Q2: JavaScript me short-circuiting kya hota hai?
**Ans**
`&&` me agar first operand false hai to second evaluate nahi hota
`||` me agar first operand true hai to second evaluate nahi hota
false `&&` console.log("Ye run nahi hoga");
true `||` console.log("Ye bhi run nahi hoga");

### Q3: Logical operators non-boolean values me kaise behave karte hain?
**Ans**
JS me truthy/falsy values check ki jati hain:
console.log("" || "default"); // "default" ("" is falsy)
console.log("User" && 10);    // 10 (truthy && truthy → last value)
