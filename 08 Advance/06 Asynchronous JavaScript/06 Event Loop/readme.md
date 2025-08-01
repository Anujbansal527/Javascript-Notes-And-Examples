# 🔄 JavaScript Event Loop

### ✅ Definition:

**Event Loop** JavaScript ka ek internal mechanism hai jo decide karta hai:

> "Kab kaunsa task execute hoga – sync ya async."

JavaScript is **single-threaded**, iska matlab ek samay mein sirf ek kaam hota hai.  
Event Loop ensure karta hai ki async operations (like `setTimeout`, Promises, etc.) bhi smoothly run hoon — **non-blocking** way mein.

---

### 🧠 Flow Explanation:

1. JavaScript code execute hota hai **Call Stack** me
2. Async operations (`setTimeout`, `fetch`, etc.) chali jati hain **Web APIs** ke paas
3. Complete hone ke baad, unke callbacks chale jate hain **Callback Queue** me
4. **Event Loop** check karta hai:  
   ➤ Kya **Call Stack empty** hai?  
   ➤ Agar haan, to Callback Queue ka first task **Call Stack me push** ho jaata hai

---

### 🔄 Visual Flowchart

```mermaid
flowchart TD
  A[Main JS Thread (Call Stack)] --> B{Async Task?}
  B -- Yes --> C[Web APIs]
  C --> D[Callback Queue]
  D -->|If Call Stack Empty| A
```

---

### 🕵️‍♂️ Real-Life Examples:

| Task Type       | Goes To             |
|-----------------|---------------------|
| `setTimeout()`  | Web APIs → Callback Queue |
| `click` events  | Web APIs → Callback Queue |
| `Promise.then()`| Microtask Queue      |

---

### ⚠️ Interview Confusion

**Q: `setTimeout(fn, 0)` kya immediately chalega?**  
**A: ❌ Nahi!**  
Wo `Web API` ke paas jaata hai aur tabhi execute hota hai **jab Call Stack empty ho**.

---

### ✅ Related Concepts

| Concept            | Role |
|--------------------|------|
| **Call Stack**      | Where sync JS runs |
| **Web APIs**        | Browser APIs handle async ops |
| **Callback Queue**  | Stores `setTimeout`, `event` callbacks |
| **Microtask Queue** | Stores Promises, MutationObserver |
| **Event Loop**      | Bridge between Queue and Stack |

---

### 💡 Bonus Tip: Microtask > Macrotask

**Microtask Queue** (Promises) gets **priority** over Callback Queue (Macrotask like `setTimeout`)  
👉 So Promises `.then()` will **always run before** `setTimeout(fn, 0)`

---

