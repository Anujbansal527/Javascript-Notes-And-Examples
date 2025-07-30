# 🧭 window.navigator – Know the Browser & System

---

## 🔹 Kya hota hai navigator object?

- `window.navigator` browser ke baare mein detailed info provide karta hai.
- Ye read-only object hota hai – browser, platform, language, permissions jaise info deta hai.

---

## 🔹 Common Properties:

| Property              | Explanation                           |
|------------------------|----------------------------------------|
| `navigator.userAgent` | Browser & device info (raw string)     |
| `navigator.platform`  | OS info (Windows, Mac, Linux)          |
| `navigator.language`  | User’s browser language (e.g., en-US)  |
| `navigator.onLine`    | Internet connected or not (true/false) |
| `navigator.cookieEnabled` | Cookies enabled or not            |
| `navigator.geolocation` | Access to GPS/location object       |
| `navigator.mediaDevices` | Access to camera/mic API           |

---

## 🧪 Real-World Use Cases:

- Online/offline detection
- Language-based redirection
- Custom alerts for unsupported browsers
- Analytics/visitor behavior detection
- Permission management (e.g., mic/camera)

---

## 🧠 Example Usage:

```js
console.log(navigator.userAgent);      // Full browser & device string
console.log(navigator.language);       // Browser language
console.log(navigator.platform);       // OS info
console.log(navigator.onLine);         // Online status
console.log(navigator.cookieEnabled);  // Cookies supported or not
```
### ⚠️ Note:
- Ye sirf user-agent info provide karta hai, guaranteed secure detection nahi hai.

- Geolocation ke liye navigator.geolocation ka use hota hai (next module)
