 # 🪟 Resize & Viewport API  

Is API ka use browser window size detect karne, resize hone par react karne aur layout ko dynamically update karne ke liye hota hai.

---

## 🎯 Objective

- Detect karo screen ya window resize hone par kya karna hai
- Dynamically width/height display karo
- Mobile devices pe viewport (keyboard, zoom) changes samjho

---

## 📦 Use Cases

- Responsive design me help karta hai
- Canvas games ya chart redraw karna
- Detect when mobile keyboard opens (using visualViewport)
- Dynamic layout shifting or re-render

---

## 🔁 Flow

1. `window.innerWidth/innerHeight` se dimensions lo  
2. `resize` event listener lagao  
3. Mobile pe `visualViewport` se changes track karo (optional)

---

## 🔧 Syntax

### ✅ Window Size
```js
console.log(window.innerWidth, window.innerHeight);
```
## ✅ Resize Event
```js
window.addEventListener("resize", () => {
  console.log("Window resized:", window.innerWidth);
});
```
## ✅ Mobile Visual Viewport (optional)
```js
if (window.visualViewport) {
  visualViewport.addEventListener("resize", () => {
    console.log("Viewport changed:", visualViewport.height);
  });
}
```
## 
📌 Notes
- resize event desktop and mobile dono pe kaam karta hai

- Soft keyboard show/hide hone par bhi visual viewport change hota hai

- Debouncing resize can improve performance (advanced)

## 🧪 Demo
- Window resize karo → dimensions update hon

- Optional: Mobile keyboard se visual height change detect karo
