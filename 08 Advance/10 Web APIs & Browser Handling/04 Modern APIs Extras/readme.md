# 🚀 Modern Web APIs (Extras) – Explained in Hinglish

Is folder mein hum modern browser features explore karenge jo aaj ke real-world web apps mein use hote hain – jaise notifications, camera access, orientation control, clipboard actions, etc.

Ye sab APIs tumhare browser ke advanced powers ko unlock karti hain! 💪

---

## 📚 Topics Covered

### 1️⃣ [`01NotificationAPI`](./01NotificationAPI/)
**🛎️ Notification API**  
Browser notifications show karna jaise WhatsApp, Gmail me hota hai.  
- `Notification.requestPermission()`
- `new Notification("Title", { body, icon })`

**Use Cases:** Reminders, alerts, chat apps

---

### 2️⃣ [`02MediaDevicesAPI`](./02MediaDevicesAPI/)
**📸 MediaDevices API**  
Camera/mic access karna directly browser se.  
- `navigator.mediaDevices.getUserMedia({ video: true, audio: true })`

**Use Cases:** Video call apps, QR scanner, selfie apps

---

### 3️⃣ [`03ScreenOrientation`](./03ScreenOrientation/)
**📱 Screen Orientation API**  
Detect karo screen landscape ya portrait hai, aur lock bhi kar sakte ho.

- `screen.orientation.type`
- `screen.orientation.lock('portrait')`

**Use Cases:** Games, video players, immersive apps

---

### 4️⃣ [`04ResizeAndViewport`](./04ResizeAndViewport/)
**🖥️ Resize + Viewport Events**  
Browser window ya mobile screen resize hone par kaise handle karein.

- `window.innerWidth`, `innerHeight`
- `window.addEventListener("resize", ...)`

**Use Cases:** Responsive design, canvas resize, mobile keyboard adjust

---

### 5️⃣ [`05Accessibility`](./05Accessibility/)
**♿ Accessibility (A11Y) APIs**  
Web ko sabke liye usable banana – including screen reader users.

- `aria-label`, `aria-hidden`, `tabindex`
- Keyboard navigation aur semantic roles

**Use Cases:** Inclusive design, government/enterprise sites, WCAG compliance

---

### 6️⃣ [`06ClipboardAdvanced`](./06ClipboardAdvanced/)
**📋 Advanced Clipboard API**  
Direct clipboard se read/write karna (copy-paste buttons banane ke liye).

- `navigator.clipboard.readText()`
- `navigator.clipboard.writeText("Copy this!")`

**Use Cases:** Code editors, copy/share link buttons, paste helpers

---

## 🧠 Suggested Flow  
1. 🔔 Notifications →  
2. 📸 Media Devices (camera/mic) →  
3. 📱 Screen Orientation →  
4. 🪟 Resize + Viewport →  
5. ♿ Accessibility →  
6. 📋 Clipboard (Advanced)

---

## ✅ Objective:
In sab APIs ka use karke tum bana sakte ho:
- Voice-based apps 🗣️  
- Video tools 📷  
- Mobile-responsive PWA 📱  
- Clipboard utilities 📋  
- User-friendly, accessible UIs ♿  

---
