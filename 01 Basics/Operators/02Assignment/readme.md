# 🧮 JavaScript Assignment Operators

Assignment operators values assign karne ke liye use hote hain. Basic `=` ke alawa JS me compound assignment operators bhi hote hain.

## ✅ Operators List:

| Operator | Meaning                    | Example         |
|----------|----------------------------|-----------------|
| `=`      | Assign                     | `x = 10`        |
| `+=`     | Add and assign             | `x += 5` → x = x + 5 |
| `-=`     | Subtract and assign        | `x -= 2` → x = x - 2 |
| `*=`     | Multiply and assign        | `x *= 3` → x = x * 3 |
| `/=`     | Divide and assign          | `x /= 2` → x = x / 2 |
| `%=`     | Modulus and assign         | `x %= 3` → x = x % 3 |
| `**=`    | Exponent and assign        | `x **= 2` → x = x ** 2 |

---

## 💡 Interview Questions

### 🔸 Q1: `x += 5` kya karta hai?
**Ans:** Ye `x = x + 5` ka short form hai. Value ko update karta hai aur assign bhi karta hai.

### 🔸 Q2: `x *= y + 2` me kaunsa pehle chalega?
**Ans:** `y + 2` pehle chalega kyunki assignment operators ka precedence kam hota hai.
```js
let x = 5, y = 3;
x *= y + 2; // x = x * (y + 2) → 5 * 5 = 25
