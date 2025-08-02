 # 📸 MediaDevices API  

MediaDevices API ka use browser se **camera** aur **microphone** access karne ke liye hota hai.  
Iska main function hota hai: `navigator.mediaDevices.getUserMedia()`

---

## 🎯 Objective

- Camera/mic access karna
- Video ko live preview mein dikhana
- Error handling karna (agar user deny kare)

---

## 📦 Use Cases

- Video conferencing apps (Zoom, Meet)
- QR/barcode scanners
- Selfie apps
- Audio/video recorders

---

## 🔁 Flow

1. Check karo browser `mediaDevices` support karta hai ya nahi  
2. `getUserMedia()` function se media access maango  
3. Agar user allow kare → stream ko `<video>` tag me lagao  
4. Agar deny kare → error show karo

---

## 🔧 Syntax

### ✅ Basic usage
```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Permission denied or error:", err);
  });
```
## 📌 Notes
- Permission prompt user ko milega

- Sirf HTTPS ya localhost pe hi kaam karta hai

- Tum video/audio dono ya alag-alag bhi access kar sakte ho:

    - { video: true }

    - { audio: true }

    - { video: true, audio: false } etc.

## 🧪 Demo:
- Button dabao → Camera chalu ho jaye

- Live video stream <video> tag mein dikhega
