## 📖 Definition: What is DOM?

**DOM (Document Object Model)** ek tree-like structure hota hai jo browser HTML page ko load karne ke baad create karta hai. Is structure mein HTML elements ko **JavaScript ke object** ke roop mein represent kiya jata hai.

> DOM JavaScript ko yeh power deta hai ki wo HTML content ko **read**, **update**, **delete**, ya **create** kar sake dynamically.

---

## 🧠 Real World Example:

Jab aap kisi webpage par button dabate ho aur bina page reload ke content change ho jata hai — **yeh DOM manipulation se hota hai**.

---

## 🖼️ Flow Diagram:
```js
HTML Page
↓
DOM Tree
↓
JavaScript interacts via:
- document
- window
- elements (like div, h1, button, etc.)
```


---

## 🧩 DOM is NOT JavaScript

DOM JavaScript ka part nahi hai. Ye browser ke engine (jaise Chrome me V8 + Blink) ke through milta hai.

---

## 🔍 Key Concepts:

### ✅ `window`
- Sabse top-level global object
- Browser ki har cheez window ke andar hoti hai
- Ex: `window.alert()`, `window.document`, `window.innerWidth`

### ✅ `document`
- HTML document ko represent karta hai
- DOM ke through HTML elements ko access karta hai
- Ex: `document.getElementById()`, `document.title`

---

## 🧪 Sample Use-Cases:

| Task                           | DOM Role |
|--------------------------------|----------|
| Button click pe color change   | Event + DOM Manipulation |
| Form submit pe validation      | DOM + Event |
| Lazy load content on scroll    | DOM + Intersection Observer |

---
