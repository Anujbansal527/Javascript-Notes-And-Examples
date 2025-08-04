# 📱 PWA (Progressive Web App)

## 📌 Definition:
PWA ek aisi website hoti hai jo:
- Offline chal sakti hai
- Phone pe "install" ho sakti hai
- Native app jaise feel karti hai (home screen icon, splash screen, etc.)

---

## 🧠 Required Components

| Part | Role |
|------|------|
| ✅ `manifest.json` | App ka meta info (name, icon, theme, display)  
| ✅ `service worker` | Offline support + background features  
| ✅ `HTTPS` | Secure context (browser trust karta hai)  
| ✅ `icon.png` | App install hone par icon dikhane ke liye  

---

## 🔁 Flow Diagram

```text
[ index.html ]
     |
     v
[ script.js ] ----> Register SW + manifest
     |
     v
[ sw.js ]    ----> Cache pages for offline
     |
     v
[ manifest.json ] ----> Tells browser: "This is an installable app"
```
## 🧪 Test karne ke liye:
- Site ko localhost ya HTTPS par run karo

- manifest.json + sw.js registered honi chahiye

- Chrome DevTools → Application → Manifest → Install prompt dikhega

## 💡 Real-World Use:
- News apps, Blog readers, Notes

- Offline tools like calculators

- Shopping apps with Add to Home