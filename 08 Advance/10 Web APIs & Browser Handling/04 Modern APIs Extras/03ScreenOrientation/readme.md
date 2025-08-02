# 📱 Screen Orientation API  

Is API ka use device ki **screen orientation (portrait/landscape)** detect karne aur control karne ke liye hota hai.

---

## 🎯 Objective

- Check karo abhi screen kis mode me hai (portrait/landscape)
- Orientation lock/unlock karna (in supported browsers)
- Orientation change hone par event handle karna

---

## 📦 Use Cases

- Fullscreen video players
- Mobile games
- Drawing/canvas apps
- Apps that depend on orientation consistency

---

## 🔁 Flow

1. `screen.orientation` object ko access karo  
2. Use `screen.orientation.type` se current orientation check karo  
3. Lock karne ke liye use karo: `screen.orientation.lock("portrait")`  
4. Orientation change handle karo: `screen.orientation.addEventListener("change", ...)`

---

## 🔧 Syntax

### ✅ Get current orientation
```js
console.log(screen.orientation.type); // e.g., 'portrait-primary'
```
## ✅ Lock orientation (only fullscreen or supported environments)
```js
screen.orientation.lock("landscape").then(() => {
  console.log("Locked to landscape");
});
```
## ✅ Listen for orientation changes
```js
screen.orientation.addEventListener("change", () => {
  console.log("New orientation:", screen.orientation.type);
});
```
## 📌 Notes
- Locking works only in fullscreen mode on most mobile browsers

- Some browsers may not support locking (like Safari)

- Always handle .catch() in lock call to catch errors

## 🧪 Demo
- Show current orientation

- Button to lock/unlock orientation

- Message display on orientation change