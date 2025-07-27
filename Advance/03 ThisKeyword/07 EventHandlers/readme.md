# 🔹 Event Handlers me `this`

## 📌 Definition:
JavaScript me jab aap kisi **DOM element par event listener** lagate ho (e.g. `click`, `mouseover`), to `this` ka behavior depend karta hai:

---

## ✅ Behavior:

| Method Type       | `this` refers to                   |
|-------------------|------------------------------------|
| Normal function   | DOM element jisme event laga       |
| Arrow function    | Parent lexical scope               |
| Inline `onclick`  | `window` (in modern browsers)      |

---

## 🔍 Example Breakdown:

### ✅ Normal function handler:
```js
element.addEventListener("click", function () {
  console.log(this); // 👉 refers to element
});
```

### ❌ Arrow function handler:
```js
element.addEventListener("click", () => {
  console.log(this); // 👉 lexical `this`, NOT element
});
```

### 🧠 Visual Flow:
```js
DOM event triggered
       ↓
Handler Function called
       ↓
Is function => normal?
   YES → this = element
   NO → this = lexical parent
```

### 📌 When to use Arrow:
- Jab aapko this ka context preserve karna hai (e.g. inside class), use arrow

- But not recommended if you want this to be the element itself

### 💬 Interview Tip:
"Normal function in event handler this ko DOM element banata hai, lekin arrow function me this lexical parent se aata hai — mostly window ya outer scope."