### ✅ Definition:
**Event Loop** JavaScript ka ek internal mechanism hai jo decide karta hai:

> "Kab kaunsa task execute hoga – sync ya async."

JavaScript single-threaded hai — iska matlab ek hi samay mein ek kaam.  
Event Loop ensure karta hai ki async operations (like setTimeout, Promises) bhi smoothly execute ho jayein **non-blocking** way mein.

---

### 🧠 Flow Explanation:

1. JS Code chalta hai in **Call Stack**
2. Async operations (setTimeout, fetch) chali jati hain **Web APIs** ke paas
3. Jab complete ho jaata hai, callback chala jata hai **Callback Queue** mein
4. Event Loop dekhta hai ki **Call Stack empty hai?**
5. Agar haan — toh callback ko **Call Stack** mein bhej deta hai

---

### 🔄 Visual Flowchart:

```mermaid
flowchart TD
  A[Main JS Thread (Call Stack)] --> B{Async Task?}
  B -- Yes --> C[Web APIs]
  C --> D[Callback Queue]
  D -->|If Call Stack Empty| A
```

### 🕵️‍♂️ Real Examples:
- setTimeout – goes to Web APIs

- click event – callback Queue

- Promise – goes to Microtask Queue


### ⚠️ Interview Confusion:
Q. setTimeout(fn, 0) kya immediately chalega?

A. Nahi!
Wo Web API ke paas jaata hai and sirf tabhi call stack mein aata hai jab stack empty ho.

### ✅ Concepts Related:
- Call Stack

- Web APIs

- Callback Queue (Macrotask Queue)

- Microtask Queue (Promises)

- Event Loop