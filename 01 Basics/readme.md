# ✅ JavaScript: Variables, Data Types & Operators

This section covers the **foundation of JavaScript programming** – how we store, manage, and manipulate data.

---

## 🔹 1. Variables

Variables are containers for storing data values.

### 🧱 Declaration

```js
var a = 10;
let b = 20;
const c = 30;
```

| Keyword | Scope     | Re-assignable | Hoisting | Best Use         |
|---------|-----------|---------------|----------|------------------|
| `var`   | Function  | ✅ Yes        | ✅ Yes   | ❌ Avoid (legacy) |
| `let`   | Block     | ✅ Yes        | ❌ No    | ✅ Use it         |
| `const` | Block     | ❌ No         | ❌ No    | ✅ Use for constants |

---

## 🔹 2. Data Types

### ✅ Primitive Types

| Type      | Example               |
|-----------|------------------------|
| Number    | `let age = 25;`        |
| String    | `let name = "Anuj";`   |
| Boolean   | `let isCool = true;`   |
| Null      | `let a = null;`        |
| Undefined | `let x;`               |
| Symbol    | `let sym = Symbol();`  |
| BigInt    | `let big = 123n;`      |

### ✅ Reference Types (Non-Primitive)

| Type     | Example                         |
|----------|----------------------------------|
| Object   | `let user = { name: "Anuj" };`   |
| Array    | `let nums = [1, 2, 3];`          |
| Function | `function greet() {}`            |

---

## 🔹 3. JavaScript Operators

### ➕ Arithmetic Operators

```js
+  -  *  /  %  **  ++  --
```

| Operator | Meaning        | Example     | Result |
|----------|----------------|-------------|--------|
| +        | Addition       | `5 + 2`     | `7`    |
| **       | Exponentiation | `2 ** 3`    | `8`    |
| %        | Modulus        | `10 % 3`    | `1`    |

---

### 🔁 Assignment Operators

```js
=  +=  -=  *=  /=  %=  **=
```

| Code     | Meaning         |
|----------|------------------|
| `x += 1` | `x = x + 1`      |
| `x *= 5` | `x = x * 5`      |

---

### 🤝 Comparison Operators

```js
==  ===  !=  !==  >  <  >=  <=
```

| Operator | Meaning           | Notes                        |
|----------|-------------------|------------------------------|
| `==`     | Equal (loose)     | Type coercion allowed        |
| `===`    | Strict equal      | ✅ Best practice             |
| `!=`     | Not equal         | ❌ Avoid                     |
| `!==`    | Strict not equal  | ✅ Best practice             |

---

### ⚙️ Logical Operators

```js
&&  ||  !
```

| Operator | Meaning | Example                | Result       |
|----------|---------|------------------------|--------------|
| `&&`     | AND     | `true && false`        | `false`      |
| `||`     | OR      | `false || true`        | `true`       |
| `!`      | NOT     | `!true`                | `false`      |

---

### 🤖 Bitwise Operators (Advanced)

```js
&  |  ^  ~  <<  >>  >>>
```

Used for low-level binary operations.

---

### ❓ Ternary Operator

```js
condition ? true : false;
```

Example:

```js
let result = age >= 18 ? "Adult" : "Minor";
```

---

### 🧪 Type Operators

```js
typeof     // Returns data type
instanceof // Checks instance inheritance
```

---

## 🔹 4. Type Conversion

### 🔄 Implicit Conversion (Coercion)

```js
"5" + 2       // "52"
"5" - 2       // 3
true + 1      // 2
false + "1"   // "false1"
```

### ✅ Explicit Conversion

```js
Number("123")     // 123
String(456)       // "456"
Boolean(0)        // false
```

---

## 🔹 5. Special Concepts

| Concept       | Meaning                                |
|---------------|----------------------------------------|
| `undefined`   | Variable declared but not assigned     |
| `null`        | Explicitly assigned as "nothing"       |
| `NaN`         | Not a Number (e.g., `0 / "hi"`)        |
| `Infinity`    | Exceeds max floating-point number      |
| `typeof null` | Returns `"object"` (JavaScript quirk)  |
| `isNaN()`     | Checks if value is `NaN`               |

---

## 🧠 Interview Insights

- **Q: Difference between `==` and `===`?**  
  `==` allows type coercion, `===` doesn't (strict)

- **Q: When to use `let` vs `const`?**  
  Use `const` by default, `let` only when reassignment is needed

- **Q: Can you assign to a `const` object?**  
  ✅ Yes, you can mutate its properties, but not reassign the variable

- **Q: What’s the type of `null`?**  
  `typeof null` returns `"object"` (JS quirk)

- **Q: Explain coercion with `==` operator?**  
  `"5" == 5` → true, because JS converts types automatically

---

## ✅ Summary Table

| Category     | Examples                     |
|--------------|------------------------------|
| Declarations | `var`, `let`, `const`        |
| Types        | `String`, `Number`, `Object` |
| Operators    | `+`, `-`, `==`, `===`, `&&`  |
| Conversion   | `Number()`, `String()`       |

---
