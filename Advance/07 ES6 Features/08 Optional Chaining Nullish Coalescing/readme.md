# ❓ Optional Chaining (`?.`) & Nullish Coalescing (`??`)

## 🔹 Purpose:
Dono operators ka kaam hai code ko **safe**, **clean** aur **error-free** banana jab data `null` ya `undefined` ho.

---

## 🔸 Optional Chaining (`?.`)

### ➤ Use:
Agar kisi **nested property** pe access karte waqt koi property exist nahi karti, to `undefined` return karta hai **instead of crashing**.

### ➤ Syntax:

```js
obj?.prop
obj?.[key]
obj?.method?.()
```
✅ Safe Access:

## 🔸 Nullish Coalescing (??)
### ➤ Use:
Agar koi value null ya undefined ho to default value assign kar sakte ho.

### ➤ Difference with ||:
|| falsy values ke liye kaam karta hai (like 0, '', false)

?? sirf null aur undefined ke liye

✅ Syntax:
```js
const name = inputName ?? "Guest";
```

## 🔹 Flowchart
```js
  A[Access Nested Value] --> B{Property Exists?}
  B -- No --> C[Return undefined using ?.]
  B -- Yes --> D[Access safely]

  E[Value = something ?? fallback] --> F{Is Value null/undefined?}
  F -- Yes --> G[Use fallback]
  F -- No --> H[Use original value] 
```





