 # 🧱 Singleton Pattern in JavaScript

---

## 🔰 What is Singleton Pattern?

> Singleton ek **design pattern** hai jisme sirf **ek hi object ya instance** create hota hai throughout the application.

🎯 Iska use hota hai jab aapko:
- 💾 Same configuration, logger, theme, DB instance chahiye ho
- ❌ Multiple objects create nahi karna

---

## 🧠 Why Use Singleton?

✅ Ek single shared instance  
✅ Memory efficient  
✅ Centralized logic  
✅ Global state handle

---

## 🧪 Real-World Examples

- 🌗 Dark Mode Controller  
- 🛠️ App Config (mode, theme, settings)  
- 📓 Logger (app-wide logging utility)  
- 🌐 Redux Store (single data store)

---

## 🔍 Flow of Singleton

1️⃣ Check if instance already exists  
2️⃣ Agar hai → return that instance  
3️⃣ Nahi hai → create new and store  
4️⃣ Return that instance

---

## ✅ Code Flow

```js
class Singleton {
  constructor() {
    if (Singleton.instance) return Singleton.instance;
    Singleton.instance = this;
  }
}
```

### OR via IIEF
```js
const instance = (() => {
  let obj;
  return () => {
    if (!obj) obj = { count: 0 };
    return obj;
  };
})();

```

### 🧠 Interview Tip
“Singleton ensures only one instance of a class exists at any time.”

### ❗ Downsides
❌ Can behave like a global var
❌ Hard to test sometimes
✅ Use with care when shared data/config is required
