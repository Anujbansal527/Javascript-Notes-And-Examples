# 🖥️ Screen API – Screen Size, Pixel Info, Fullscreen Mode

---

## 🔹 Kya hota hai Screen API?

- `window.screen` object user ke device ki screen ke baare me info deta hai.
- Ye screen size, available area, pixel depth jaise data return karta hai.
- Fullscreen APIs bhi modern part hain for immersive UX.

---

## 🔹 Common Properties:

| Property              | Description                             |
|------------------------|------------------------------------------|
| `screen.width`        | Total screen width (px)                  |
| `screen.height`       | Total screen height (px)                 |
| `screen.availWidth`   | Available width excluding taskbar etc.   |
| `screen.availHeight`  | Available height                         |
| `screen.pixelDepth`   | Bits per pixel (usually 24 or 32)        |
| `screen.orientation`  | Portrait or Landscape                    |

---

## 🖼️ Fullscreen API (Optional + Powerful):

```js
element.requestFullscreen();    // Enter fullscreen
document.exitFullscreen();      // Exit fullscreen
document.fullscreenElement      // Check current full element
```
🔐 Fullscreen usually works only on user interaction (like button click)
### 🧠 Use Cases:
- Game apps (immersive fullscreen)

- Responsive media viewer (image/video)

- Detect screen size before layout rendering

### 📌 Notes:
- Use screen only for screen resolution

- For actual viewport size → use window.innerWidth / innerHeight

- Fullscreen API has browser restrictions → must be from user action







