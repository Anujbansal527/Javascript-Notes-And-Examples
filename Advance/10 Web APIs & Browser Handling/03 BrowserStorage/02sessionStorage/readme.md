 # 🧠 sessionStorage – Temporary (Tab-based) Browser Storage

---

## 🔹 sessionStorage kya hota hai?

- Ye bhi localStorage ki tarah hi hota hai, but:
  ✅ Data sirf **tab ke liye** hota hai
  ❌ Tab ya window close hone ke baad data delete ho jata hai

---

## 🔧 Syntax (Same as localStorage):

```js
sessionStorage.setItem("key", "value");
sessionStorage.getItem("key");
sessionStorage.removeItem("key");
sessionStorage.clear();
```

### 🧪 Use Cases:
- Multi-step form me data temporarily rakhna

- Search filters while navigating

- Draft data jab tak tab open hai

- Prevent form loss if page refreshes

### 📛 Limitations:
- Tab-specific: alag-alag tabs me alag data

- Only string format

- No auto-sync between tabs

### Example
```js
const step = { currentStep: 2 };
sessionStorage.setItem("formStep", JSON.stringify(step));

// Retrieve
const savedStep = JSON.parse(sessionStorage.getItem("formStep"));
console.log(savedStep.currentStep);  // 2
```


