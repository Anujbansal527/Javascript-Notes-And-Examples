# 🔍 JavaScript Comparison Operators

Comparison operators values ka comparison karte hain aur **true** ya **false** return karte hain. Ye mostly `if`, `while`, and conditional checks me use hote hain.

## ✅ Operators List:

| Operator | Description                    | Example (`a = 10, b = '10'`) | Result |
|----------|--------------------------------|-------------------------------|--------|
| `==`     | Equal (value only)             | `a == b`                      | true   |
| `===`    | Strict equal (value + type)    | `a === b`                     | false  |
| `!=`     | Not equal (value only)         | `a != b`                      | false  |
| `!==`    | Strict not equal               | `a !== b`                     | true   |
| `>`      | Greater than                   | `a > 5`                       | true   |
| `<`      | Less than                      | `a < 20`                      | true   |
| `>=`     | Greater than or equal to       | `a >= 10`                     | true   |
| `<=`     | Less than or equal to          | `a <= 9`                      | false  |

---

## 💡 Interview Questions

### 🔸 Q1: `==` aur `===` me kya fark hai?
**Ans:**
- `==` type conversion karta hai (loose equality)
- `===` strict comparison karta hai (type bhi match hona chahiye)

10 == '10'   // true
10 === '10'  // false

### Q2: NaN == NaN kya return karega?
**Ans**
false, kyunki NaN kisi bhi value (even NaN itself) ke barabar nahi hota.
console.log(NaN == NaN); // false

### Q3: null == undefined kya return karega?
**Ans**
 true, kyunki == me ye loosely equal hote hain.
console.log(null == undefined); // true
console.log(null === undefined); // false

```
