# let vs const vs var

## 1. var
- Function scoped
- Hoisting ke time `undefined` se initialize hota hai
- Block scoped nahi hai

## 2. let
- Block scoped (jo block me declare hota hai usi tak limited)
- Hoisting toh hota hai, lekin Temporal Dead Zone me hota hai (use karne se pehle access nahi kar sakte)
- Re-assign kar sakte ho, lekin re-declare nahi kar sakte same scope me

## 3. const
- Block scoped
- Hoisting same as let
- Re-assign nahi kar sakte (immutable reference)
- Objects and arrays ke andar ke values change ho sakte hain, par variable reference change nahi hota

---

## Temporal Dead Zone (TDZ)
- Jab let ya const declare hote hain, tab tak woh variable use nahi kar sakte jab tak declaration complete na ho
- `var` me ye problem nahi hoti

---

## Comparison Table

| Feature        | var              | let               | const            |
|----------------|------------------|-------------------|------------------|
| Scope          | Function Scoped   | Block Scoped      | Block Scoped     |
| Hoisting       | Yes (initialized as undefined) | Yes (TDZ)          | Yes (TDZ)       |
| Re-assignable  | Yes              | Yes               | No               |
| Re-declarable  | Yes              | No                | No               |

---

## Interview Tips
- Kab `var` use karein? Kab `let`?
- Why prefer `const` by default?
- TDZ kya hota hai?  
- `const` ke sath object ko modify karna allowed hai ya nahi?

---
s