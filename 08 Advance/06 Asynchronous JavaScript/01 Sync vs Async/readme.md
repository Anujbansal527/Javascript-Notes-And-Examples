# 🔄 Synchronous vs Asynchronous JavaScript

---

### ✅ Synchronous JavaScript

- Code **line-by-line** execute hota hai.
- Jab tak ek line **completely execute** nahi hoti, agla step **start nahi hota**.
- **Blocking behavior**: Ek task poora hone ke baad hi doosra chalega.

---

### ✅ Asynchronous JavaScript

- Long-running tasks (like timers, API calls) ko **background me bhej diya jata hai**.
- JavaScript engine rukta nahi — aage badh jaata hai.
- Asynchronous tasks baad me complete hone ke baad **queue se execute** hote hain.

🧠 Common Examples:
- `setTimeout()`
- `setInterval()`
- `fetch()`
- `DOM events` (like clicks)

---

### 💡 Example Flow

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 1000);

console.log("3");
```

### 🧾 Output:

```
1
3
2  // (after 1 second)
```

---

### 🧠 Interview Insight

> JavaScript is **single-threaded**, but uses the **event loop + callback queue** for async behavior.

- **Synchronous = Blocking**
- **Asynchronous = Non-blocking**

---

