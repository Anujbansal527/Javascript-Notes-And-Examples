# 🧭 Throttling in JavaScript

---

## 🔰 What is Throttling?

> Throttling ek technique hai jisme function **limited frequency** par hi execute hota hai — chahe user kitni baar bhi event fire kare.

👉 Iska matlab hai: Function repeatedly call **nahi hota**, balki **ek fixed time gap** ke baad hi chalta hai.

---

## 🔍 Real-World Examples

- 📜 Scroll events → show progress bar ya lazy load
- 📏 Window resize → layout update
- 🎮 Mouse movement → tracking limited times per second

---

## 🧠 Difference from Debounce

| Feature        | Debounce                             | Throttle                          |
|----------------|--------------------------------------|-----------------------------------|
| Working        | Waits for silence/inactivity         | Executes after fixed interval     |
| Use-case       | Search inputs, typing                | Scroll/resize, mousemove          |
| Control Type   | Delay after *last* event             | Delay between *every* execution   |

---

## 🔧 How It Works

Throttling uses a **"cooldown" period**. Jab function run ho jaata hai, toh agla execution **tabhi allow hota hai** jab cooldown complete ho jaye.

---

## 🧠 Flowchart Style Logic
```js
User triggers event → Run function if not in cooldown
|
└── Start cooldown (say 500ms)
|
└── Ignore other triggers during cooldown
```
---

## 🛠️ Syntax / Structure

```js
function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}
```
### 🧪 Example
```js
window.addEventListener("scroll", throttle(function () {
  console.log("Scrolling at", new Date().toLocaleTimeString());
}, 1000));
```
