 # 👀 IntersectionObserver in JavaScript

## 🔹 Kya hota hai?
IntersectionObserver ek browser API hai jo detect karta hai ki koi element viewport (screen area) ke andar aa gaya hai ya nahi — bina scroll event lagaye.

---

## 🔹 Use Cases:
- Lazy loading images
- Scroll animation triggers
- Infinite scroll detection
- Analytics (user ne kya dekha)

---

## 🔹 Basic Syntax:
```js
let observer = new IntersectionObserver(callbackFn, options);
observer.observe(targetElement);
```
### 🔹 Callback Function:
```js
(entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // visible in viewport
    }
  });
}
```
### 🔹 Options:
| Option       | Use                                           |
| ------------ | --------------------------------------------- |
| `root`       | Viewport ya koi scrollable container          |
| `threshold`  | 0 to 1 → kitna visible hona chahiye           |
| `rootMargin` | Margin outside viewport (e.g. preload effect) |

### ⚠️ Tips:
- Best for performance (scroll listener nahi lagta)

- Observe multiple elements

- Don’t forget to unobserve/remove when needed


