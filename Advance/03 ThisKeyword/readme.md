# 🔹 this Keyword in JavaScript (In-Depth)

## 📌 Definition:
`this` keyword JavaScript me ek special keyword hai jo **execution context** ke according refer karta hai kisi object ko ya value ko. Yeh context ke hisaab se badal jaata hai.

---

## 💡 Important Rules:

| Context Type           | `this` kya point karta hai?               |
|------------------------|------------------------------------------|
| Global Context         | `window` (browser) ya `global` (Node)    |
| Function (non-strict)  | `window` (by default)                    |
| Function (strict)      | `undefined`                              |
| Arrow Function         | Lexical `this` (parent scope ka `this`) |
| Object Method          | Object itself                            |
| Constructor Function   | New created object                       |
| Class Method           | Class instance                           |
| Event Handler (DOM)    | DOM element                              |

---

## 🧠 Flowchart:
```text
      Execution Starts
            ↓
    Where is `this` used?
            ↓
 ┌─────────────┬─────────────┐
 │ Function    │  Arrow Func │
 └────┬────────┴────┬────────┘
      ↓             ↓
Global Scope   Lexical Parent
      ↓
   Object? 
  ┌────┴────┐
  │ Yes     │ No
  ↓         ↓
Object     window / undefined

```

### 📦 Sub Topics:
- Global Context → this is window

- Function Context → this is window / undefined (strict)

- Arrow Function → Inherits from parent

- Object Method → this is object

- Constructor Function → Refers to new object

- Class Context → Refers to instance

- Event Handlers → DOM element (in browser)

- call, apply, bind → Manually set this

- Interview Qs

