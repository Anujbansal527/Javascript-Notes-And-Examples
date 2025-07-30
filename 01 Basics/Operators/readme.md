# JavaScript Operators in Depth

Welcome to the repository where we explain **JavaScript Operators** using simple, practical examples with Hinglish explanations. Yeh repo sabhi JS operators ko cover karta hai: unki working, precedence, associativity, aur interview questions ke sath!

## 🔗 Topics Covered

1. **🔢 Arithmetic Operators**
2. **🧮 Assignment Operators**
3. **🔍 Comparison Operators**
4. **🔗 Logical Operators**
5. **🧠 Unary & Binary Operators**
6. **📐 Type Operators (`typeof`, `instanceof`)**
7. **⚙️ Bitwise Operators**
8. **🎯 Ternary Operator (`? :`)**
9. **📊 Operator Precedence & Associativity**
10. **✅ Truthy & Falsy Values**
11. **➕ Postfix & Prefix Increment/Decrement** 

Each subfolder includes:
- ✅ `README.md` with explanation and Hinglish comments
- 💻 `example.js` with use cases and outputs

---

## ⚙️ Operator Precedence & Interview Questions

### 🔸 Q1. JavaScript me operator precedence kya hota hai?
**Ans:** Jab multiple operators ek hi expression me use hote hain to kaunsa operator pehle chalega, yeh decide karta hai **operator precedence**.

### 🔸 Q2. Precedence ka simple example?
```js
let result = 10 + 5 * 2;
// Output: 20 → kyunki * ki precedence + se zyada hoti hai
```

### 🔸 Q3. Associativity kya hoti hai?
**Ans:** Jab same precedence wale operators ek saath ho, to kaunsa pehle execute hoga wo **associativity** decide karti hai (left-to-right ya right-to-left).
```js
let x = 10;
x += 5; // Left to right associativity for assignment
```

### 🔸 Q4. All important operator precedence (High → Low):
```
1. ()               → Grouping
2. . [] ()          → Member access, function call
3. new              → Object creation
4. ++ -- (postfix)  → Increment/Decrement
5. ! ~ + - typeof   → Unary operators
6. **               → Exponentiation
7. * / %            → Multiplication/Division/Modulus
8. + -              → Addition/Subtraction
9. << >> >>>        → Bitwise shifts
10. < <= > >= in instanceof
11. == != === !==   → Equality
12. &               → Bitwise AND
13. ^               → Bitwise XOR
14. |               → Bitwise OR
15. &&              → Logical AND
16. ||              → Logical OR
17. ?:              → Ternary
18. = += -= *= etc. → Assignment
19. ,               → Comma operator
```

### 🔸 Q5. Short circuiting kya hota hai?
**Ans:** `||` aur `&&` logical operators pehle operand ka result dekh kar decide karte hain kya second operand evaluate karna hai ya nahi.
```js
false && console.log("Run nahi hoga");
true || console.log("Ye bhi skip hoga");
```

### 🔸 Q6. typeof aur instanceof ka use kya hai?
**Ans:**
- `typeof` primitive data types ke liye type batata hai
- `instanceof` reference types (object, array, class) ke liye use hota hai
```js
console.log(typeof 123); // number
console.log([] instanceof Array); // true
```

### 🔸 Q7. Ternary operator kya hota hai?
**Ans:** Ek short form hoti hai if-else ki:
```js
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
```

---

## ✅ Truthy & Falsy Values in JavaScript

JavaScript me kuch values ko condition me check karte waqt **false** maana jata hai (falsy), aur baaki sab values ko **true** maana jata hai (truthy).

### 🔹 Falsy Values:
Yeh sab JS me false treat hote hain:
- `false`
- `0`
- `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

```js
if (0) console.log("Run hoga"); // ❌ nahi chalega
if ("") console.log("Run hoga"); // ❌ nahi chalega
```

### 🔹 Truthy Values:
Har wo value jo falsy nahi hai, wo truthy hai:
- `"hello"` (non-empty string)
- `1`, `-1`
- `{}` (empty object)
- `[]` (empty array)
- `function(){}`

```js
if ([]) console.log("Array is truthy"); // ✅ chalega
if ("0") console.log("String '0' is truthy"); // ✅ chalega
```

---

## ➕ Postfix vs Prefix Increment/Decrement (Interview Special)

JavaScript me `++` aur `--` dono prefix (`++x`) aur postfix (`x++`) ke form me aate hain.

### 🔸 Postfix (`x++` or `x--`)
- Pehle **original value return hoti hai**, phir increment/decrement hota hai.
```js
let a = 5;
console.log(a++); // 5 → pehle print, fir a = 6
console.log(a);   // 6
```

### 🔸 Prefix (`++x` or `--x`)
- Pehle **value change hoti hai**, fir return hoti hai.
```js
let b = 5;
console.log(++b); // 6 → pehle increment, fir print
console.log(b);   // 6
```

### 🧠 Interview Insight:
- Postfix zyada tab use hota hai jab aapko pehle purani value chahiye hoti hai, phir update.
- Prefix tab use hota hai jab pehle hi update value kaam me leni ho.

---

