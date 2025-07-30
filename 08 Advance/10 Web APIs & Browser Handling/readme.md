## 🔰 Introduction:

Jab JavaScript sirf ek scripting language thi, tab wo sirf variables, loops, conditions, functions tak limited thi.  
Lekin browser ne JS ko **powerful banane ke liye kuch pre-built functionalities (APIs)** provide ki, jise hum **Web APIs** kehte hain.

Ye Web APIs JavaScript ko **Browser ke environment ke sath interact** karne ke liye capabilities deti hain — jaise DOM, BOM, Storage, Events, Notifications, Clipboard access, etc.

---

## 📚 Definitions:

### ✅ What is a Web API?

**Web API** = Browser ke dwara diya gaya interface, jisse JavaScript real-world cheezein control kar sakta hai — jaise ki UI update karna, data store karna, notifications bhejna, camera use karna, etc.

> ⚠️ Note: Ye APIs JavaScript ka hissa nahi hoti, balki browser ke environment ka part hoti hain.

---

### ✅ DOM (Document Object Model)

DOM ek tree-structure hai jo HTML page ko represent karta hai. JavaScript ke through hum is tree ko **read**, **update**, ya **manipulate** kar sakte hain.

- `document.getElementById()`
- `element.innerText`, `element.style`, etc.

---

### ✅ BOM (Browser Object Model)

BOM provide karta hai browser-level objects jaise:
- `window`
- `navigator`
- `screen`
- `location`
- `history`

Yeh allow karta hai:
- Popups dikhana
- Browser ke info lena (screen size, connection status)
- Current URL ko access/update karna

---

### ✅ Modern Web APIs

Advanced browser APIs jaise:
- Notifications API
- Media Devices API (camera/mic)
- Intersection Observer
- Clipboard API
- Speech Recognition
- Resize/Orientation Detection

Ye sab UX ko smart aur responsive banane mein madad karte hain.

---

## 🧠 Difference Table:

| Feature         | Core JavaScript | DOM                     | BOM                       |
|-----------------|------------------|--------------------------|----------------------------|
| Source          | JS language itself | Browser-provided API | Browser-provided API     |
| Purpose         | Logic & computation | Webpage manipulation  | Browser/environment interaction |
| Example         | `var`, `if`, `for` | `document.querySelector()` | `window.alert()`         |
| Use-Case        | Program logic      | Update webpage          | Handle popups, browser info |

---

### 🔍 Real World Use-Cases:
| Topic                | Use Case Example                       |
| -------------------- | -------------------------------------- |
| DOM                  | Update UI when user types              |
| BOM                  | Detect screen size or user geolocation |
| Storage              | Save login state or cart data          |
| Timers               | Show countdowns or alerts              |
| Clipboard            | Copy-to-clipboard buttons              |
| IntersectionObserver | Lazy load images on scroll             |
| Notification API     | Push alert for new message             |
| MediaDevices API     | Webcam snapshot or mic access          |

### 🧩 Important Flow Diagram:
```yaml
HTML Page
   |
   V
DOM Tree (document object)
   |
   ├── Node Manipulation
   ├── Event Handling
   └── Form Access

Browser Environment (BOM)
   |
   ├── window
   ├── navigator
   ├── location
   ├── screen
   └── history

Modern APIs
   |
   ├── Notification
   ├── Clipboard
   ├── MediaDevices
   ├── Resize API
   └── Accessibility

```
