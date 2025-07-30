# 🧵 Web Workers – Run JS in Background Thread

---

## 🔹 Kya hota hai Web Worker?

- JavaScript by default **single-threaded** hota hai.
- Agar aap heavy code run karte ho (e.g. loops, data processing), toh UI **hang** ho jata hai.
- 🔥 Solution: **Web Workers** – Separate thread me code run karo.

---

## 🔧 Kaise use kare?

### 🔹 Step 1: Worker file banao (e.g., `worker.js`)
```js
onmessage = function (e) {
  // Main thread se data mil gaya
  const result = heavyTask(e.data);
  postMessage(result); // Wapas bhejna
};
```
### 🔹 Step 2: Main thread me use karo (main.js)
```js
const worker = new Worker("worker.js");
worker.postMessage(data);         // Worker ko data bhejna
worker.onmessage = (e) => { ... } // Worker ka response lena
```
### 💡 Use Cases:
- Heavy calculations

- Image processing

- Background sync

- File handling (CSV parsing, compression)

- Avoid UI freeze (keep UX smooth)

### ⚠️ Notes:
- Worker file same origin hona chahiye

- No DOM access inside worker

- Communicate only via postMessage()


