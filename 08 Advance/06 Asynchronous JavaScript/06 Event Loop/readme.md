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
   ✅ Kya **Call Stack empty** hai?  
   ✅ Agar haan, to Callback Queue ka first task **Call Stack me push** ho jaata hai

---

### 🔄 Visual Flowchart

> ⚠️ Mermaid diagrams may not render on GitHub. Use [Mermaid Live Editor](https://mermaid.live/edit) or VS Code extensions to preview.

```mermaid
flowchart TD
  A[Main JS Thread (Call Stack)] --> B{Async Task?}
  B -- Yes --> C[Web APIs]
  C --> D[Callback Queue]
  D -->|If Call Stack Empty| A
```
### 🔄 ASCII-Based Diagram (GitHub-friendly)
```pgsql
+------------------------+
|   Call Stack           |
+------------------------+
            |
            v
  Async Task? (setTimeout, fetch)
            |
            v
+------------------------+
|      Web APIs          |
+------------------------+
            |
            v
+------------------------+
|   Callback Queue       |
+------------------------+
            |
            v
Event Loop checks Stack
     |
     v
Push task to Call Stack
```
### 🕵️‍♂️ Real-Life Examples
| Task Type          | Where it Goes             |
| ------------------ | ------------------------- |
| `setTimeout()`     | Web APIs → Callback Queue |
| `click` event      | Web APIs → Callback Queue |
| `fetch()`          | Web APIs → Callback Queue |
| `Promise.then()`   | → Microtask Queue         |
| `MutationObserver` | → Microtask Queue         |

### ⚠️ Common Interview Confusion
Q: Kya setTimeout(fn, 0) turant chalega?
A: ❌ Nahi!
Wo Web API ke paas jaata hai aur sirf Call Stack empty hone ke baad hi Callback Queue se wapas aata hai.

### ✅ Related Concepts
| Concept             | Description                            |
| ------------------- | -------------------------------------- |
| **Call Stack**      | Executes sync JS code                  |
| **Web APIs**        | Browser APIs handling async operations |
| **Callback Queue**  | Macrotasks (e.g. `setTimeout`, events) |
| **Microtask Queue** | Promises, `queueMicrotask()`           |
| **Event Loop**      | Bridge between stack and queues        |

### 💡 Bonus Tip: Microtask vs Macrotask
✅ Microtask Queue > Callback Queue (Macrotask)

- Promise.then() executes before setTimeout(fn, 0)

- Always empty the Microtask queue before picking from Callback Queue
```js
Promise.resolve().then(() => console.log("microtask"));
setTimeout(() => console.log("macrotask"), 0);

// ✅ Output:
// microtask
// macrotask
```
### 📌 Summary
- JavaScript runs in a single thread

- Event loop handles async tasks non-blockingly

- Microtasks are prioritized over macrotasks

- Use Promises for precise timing & control

