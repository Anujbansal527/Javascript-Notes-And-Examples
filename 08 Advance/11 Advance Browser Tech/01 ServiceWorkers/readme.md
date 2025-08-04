# 🔧 01. Service Workers

## 📌 Definition:
Service worker ek **browser background script** hai jo:
- Network requests ko intercept kar sakta hai
- Assets ko cache karke offline use ke liye store kar sakta hai
- Background sync aur push notifications ka support deta hai

> Ye web app ko **offline functional** banata hai = PWA ke liye essential hai.

---

## ⚙️ Kaise Kaam Karta Hai?

1. ✅ **Register** service worker (HTML/JS file se)
2. ✅ Service worker **install** hota hai (pehli baar)
3. ✅ **Activate** hota hai aur cache set karta hai
4. ✅ **Fetch** events ko intercept karke cache ya network se response deta hai

---

## 🔐 Important Notes:
- Sirf **HTTPS ya localhost** pe hi service workers chalte hain
- Ek baar registered ho gaya, toh wo **background mein chalta rehta hai**
- Scope: `/sw.js` ka scope by default root path hota hai (`/`)

---

## 📁 Files:

- `index.html` – UI page
- `script.js` – Service worker register karne ka JS
- `sw.js` – Background file (install, activate, fetch events handle karta hai)

---

## 💡 Use-Cases

- Offline fallback pages
- Blog readers
- Notes apps
- Caching static assets like images/CSS/JS

---

## 🧪 Mini Project: Offline Notes App (Mini)

### Features:
- App open hote hi service worker register ho
- Assets (HTML, CSS, JS) cache ho jaye
- Agar internet band ho, phir bhi basic UI dikh jaye

> Iska implementation index.html + sw.js mein hoga

---
