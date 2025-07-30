# 🌐 BOM – Browser Object Model in JavaScript

---

## 🔰 What is BOM?

BOM ka matlab hota hai **Browser Object Model**. Ye browser-related functionalities ko control karne ke liye hota hai – jaise:

- Window dialogs (alert, prompt, confirm)
- URL change (location)
- Navigation (history)
- Browser info (navigator)
- Geolocation access
- Screen info, clipboard, etc.

📌 **DOM page content handle karta hai**, jabki **BOM browser ko handle karta hai.**

---

## 🧠 BOM Hierarchy
```js
Window (global)
│
├── document ← DOM
├── location ← URL info, redirect, reload
├── history ← back, forward, go
├── navigator ← browser/device info
├── screen ← width, height
├── localStorage ← browser storage
├── setTimeout ← timer
├── alert/prompt ← dialogs
└── ... etc.
```

---

## 🔍 BOM vs DOM

| Feature        | DOM                     | BOM                         |
|----------------|--------------------------|------------------------------|
| Purpose        | Webpage content          | Browser interaction          |
| Base Object    | `document`               | `window`                     |
| Examples       | getElementById, innerHTML| alert, location.href         |

---

## 🧩 Why Learn BOM?

✅ For every real-world project, you’ll need BOM:
- Form validations (alert/prompt)
- Page redirection (location)
- Storing data (localStorage)
- Knowing user's browser/device (navigator)
- Building SPAs (history API)
- Offline detection (navigator.onLine)
- Interacting with clipboard, speech, media, etc.

---
## ⚙️ Example Use Cases

- User location detect karke weather app banana
- Alert/prompt ke through form confirm karna
- Navigator se browser detect karna
- Online/offline detection ke through warning dikhana
- Background thread me file compress karna (Web Workers)

