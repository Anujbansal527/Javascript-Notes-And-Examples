# JavaScript Fundamentals: var, let, and const

Welcome to my repo that explains how `var`, `let`, and `const` work in JavaScript using simple, practical examples with Hinglish comments and explanations.

## 🔗 Topics Covered

1. **`var`** – Function Scoped, Hoisting, Redeclaration
2. **`let`** – Block Scoped, Temporal Dead Zone (TDZ), Reassignment
3. **`const`** – Block Scoped, Constants, Arrays, and Objects
4. **🧠 JavaScript Data Types** – Primitive & Non-Primitive
5. **🎯 Common Interview Questions (with Hinglish Answers)**
6. **📊 Difference Table: var vs let vs const**

Each folder contains:
- ✅ Simple code examples
- 💬 Clear Hinglish comments
- 📘 Explanatory README files

You can run these using [Node.js](https://nodejs.org/) or directly in the browser's Developer Console.

---

## 🧪 JavaScript Data Types

### ✅ Primitive Types:
- `Number` – e.g., `42`, `3.14`
- `String` – e.g., `'Anuj'`, `"Hello"`
- `Boolean` – e.g., `true`, `false`
- `null` – Intentional empty value
- `undefined` – Variable declared but not assigned
- `Symbol` – Unique identifiers (rare use)
- `BigInt` – Large integers (`9007199254740991n`)

### ✅ Non-Primitive (Reference) Types:
- `Object` – e.g., `{ name: "Anuj" }`
- `Array` – e.g., `[1, 2, 3]`
- `Function` – e.g., `function greet() {}`

---

## 🎯 Common Interview Questions & Hinglish Answers

### 🔸 Q1. `var`, `let`, `const` me kya difference hai?
**Ans:**
- `var` function scoped hota hai, hoist hota hai aur dobara declare ho sakta hai.
- `let` block scoped hai, hoist hota hai but TDZ me hota hai, dobara declare nahi hota.
- `const` bhi block scoped hai, hoist hota hai but reassignment allowed nahi hai.

### 🔸 Q2. `const` se banaye object/array me change kyu kar sakte hain?
**Ans:** `const` reference ko constant banata hai, lekin object ya array ke andar ki value change ho sakti hai. Bas naye object/array se assign nahi kar sakte.

### 🔸 Q3. TDZ kya hota hai?
**Ans:** Temporal Dead Zone wo area hota hai jahan variable exist to karta hai (hoisted hota hai) but jab tak uski actual declaration nahi ho jati, use access nahi kar sakte. Isliye ReferenceError aata hai.

### 🔸 Q4. Hoisting kya hoti hai?
**Ans:** Hoisting ka matlab JS engine variable/function declaration ko upar le jata hai. `var` ka value `undefined` hota hai, `let`/`const` TDZ me rehte hain.

---

## 📊 var vs let vs const (Comparison Table)

| Feature         | `var`        | `let`         | `const`       |
|----------------|--------------|---------------|----------------|
| Scope          | Function     | Block         | Block          |
| Hoisting       | Yes (undefined) | Yes (TDZ)     | Yes (TDZ)      |
| TDZ            | ❌ No        | ✅ Yes        | ✅ Yes         |
| Redeclaration  | ✅ Allowed   | ❌ Error      | ❌ Error       |
| Reassignment   | ✅ Allowed   | ✅ Allowed    | ❌ Error       |
| Use Case       | Legacy Code | Mutable vars  | Constants      |

---


