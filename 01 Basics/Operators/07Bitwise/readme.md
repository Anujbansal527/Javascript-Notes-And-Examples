# ⚙️ JavaScript Bitwise Operators

Bitwise operators numbers ke **binary representation** pe directly kaam karte hain. Ye mostly low-level programming, graphics, flags, and performance optimization me kaam aate hain.

JavaScript me numbers internally 32-bit signed integers ke form me treat hote hain jab bitwise operations perform hote hain.

---

## ✅ Bitwise Operator List:

| Operator | Name            | Example    | Meaning                       |
|----------|------------------|------------|-------------------------------|
| `&`      | AND              | `5 & 3`    | 0101 & 0011 = 0001 → 1        |
| `|`      | OR               | `5 | 3`    | 0101 \| 0011 = 0111 → 7       |
| `^`      | XOR              | `5 ^ 3`    | 0101 ^ 0011 = 0110 → 6        |
| `~`      | NOT              | `~5`       | ~0101 = 1010 = -6             |
| `<<`     | Left Shift       | `5 << 1`   | 0101 << 1 = 1010 → 10         |
| `>>`     | Right Shift      | `5 >> 1`   | 0101 >> 1 = 0010 → 2          |
| `>>>`    | Zero-fill Right Shift | `-5 >>> 1` | fill 0 from left          |

---

## 💡 Interview Questions

### 🔸 Q1: `5 & 3` ka binary output kya hota hai?
**Ans:**

5 → 0101
3 → 0011
AND → 0001 → 1

### 🔸 Q2: `~` (NOT) ka result negative kyu hota hai?
**Ans:** Bitwise NOT sab bits ulta kar deta hai aur signed integer me convert karta hai

~5 = -6  → because it flips all 32 bits of 5

### 🔸 Q3: Difference between >> and >>>?
**Ans**
>> (Signed)	                       >>> (Unsigned)
Negative numbers preserve sign	   Fills leftmost bits with 0
Works on 32-bit signed ints	       Works on 32-bit unsigned ints

console.log(-5 >> 1);  // -3
console.log(-5 >>> 1); // large positive number
---
