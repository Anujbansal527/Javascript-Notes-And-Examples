# 🧠 JavaScript Unary & Binary Operators

JavaScript me har operator ya to **unary** hota hai (1 operand) ya **binary** (2 operands) ke saath kaam karta hai.

---

## ✅ Unary Operators (Ek operand)

| Operator   | Description                    | Example      | Result     |
|------------|--------------------------------|--------------|------------|
| `+`        | Converts to number             | `+"5"`       | 5          |
| `-`        | Negates number                 | `-10`        | -10        |
| `++`       | Increment                      | `++x`        | x + 1      |
| `--`       | Decrement                      | `--x`        | x - 1      |
| `!`        | Logical NOT                    | `!true`      | false      |
| `typeof`   | Type of operand                | `typeof 123` | "number"   |
| `void`     | Returns undefined              | `void 0`     | undefined  |
| `delete`   | Deletes object property        | `delete obj.key` | true   |

---

## ✅ Binary Operators (Do operands)

| Type              | Operators                          |
|-------------------|-------------------------------------|
| Arithmetic        | `+`, `-`, `*`, `/`, `%`, `**`       |
| Comparison        | `==`, `===`, `!=`, `<`, `>=` etc.   |
| Logical           | `&&`, `||`                          |
| Assignment        | `=`, `+=`, `-=`, etc.               |
| Bitwise           | `&`, `|`, `^`, `<<`, `>>`           |

---

## 💡 Interview Questions

### 🔸 Q1: Unary `+` operator ka use kya hai?
**Ans:** Ye kisi bhi value ko number me convert karta hai.

+"5" → 5
+true → 1
+false → 0
+"" → 0

### 🔸 Q2: delete operator ka use kya hai?
**Ans**
Kisi object ki property ko remove karta hai.
let obj = { name: "Anuj" };
delete obj.name;

### 🔸 Q3: Binary vs Unary ka real-world example?
**Ans**
Unary: typeof x, !value, ++count
Binary: a + b, x === y, age >= 18


```js
