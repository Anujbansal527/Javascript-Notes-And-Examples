# 📘 Asynchronous JavaScript
### 🔹 Kya hota hai Asynchronous JavaScript?
JavaScript default mein **single-threaded** hoti hai. Ye code ko **line by line** run karti hai (synchronous).  
Lekin real-life mein aise task hote hain jisme time lagta hai (e.g., API call, file read). Uske liye JS use karti hai:

- Web APIs
- Event Loop
- Callback Queue
- Microtask Queue

---

### 🧠 Why Async Programming?

- Non-blocking behavior (UI freeze nahi hota)
- Better user experience
- Network requests handle karna possible

---

### 🔄 Flowchart: Event Loop
```
graph TD
A[Call Stack] -->|Task Done| B[Web APIs]
B --> C[Callback Queue]
C -->|Call Stack empty| A
```

### 🔧 Topics Covered:
Sync vs Async

Callbacks

Callback Hell

Promises

Async / Await

Event Loop

Microtask vs Macrotask

Interview Tricky Questions
