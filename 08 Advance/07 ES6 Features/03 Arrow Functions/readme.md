# ⚡ Arrow Functions (=>)

## 🔹 Definition:

Arrow functions are **shorter syntax** for writing functions, introduced in **ES6**. Ye traditional `function` keyword ka alternative hain – concise aur cleaner.

---

## 🔹 Syntax:

```js
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;
```
### 🔹 Key Features:
✅ 1. Shorter Syntax
Jab ek hi line return ho, {} aur return likhne ki zarurat nahi.

✅ 2. Lexical this
Arrow functions ka this current scope se inherit hota hai. (no own this)

✅ 3. No arguments object
Arrow functions me arguments object nahi hota.

✅ 4. Not for constructor or methods
Arrow functions ko constructor function ya object methods ke liye use nahi karte.

### 🔹 Arrow vs Traditional Function
| Feature       | Traditional Function    | Arrow Function           |
| ------------- | ----------------------- | ------------------------ |
| `this`        | Dynamic (based on call) | Lexical (based on scope) |
| `arguments`   | Available               | ❌ Not Available          |
| `new` keyword | Yes (constructors)      | ❌ Not allowed            |
| Syntax        | Verbose                 | Concise                  |

### 🔹 Use-Cases:
- Array methods: map, filter, reduce

- Callbacks

- Inside React components

- Keeping lexical this in closures

### 🔹 Avoid Arrow In:
- Object methods

- Constructor functions

- Event handlers (if you need this as DOM)
