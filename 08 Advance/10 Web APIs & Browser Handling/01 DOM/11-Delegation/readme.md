# 🔄 Event Delegation in JavaScript

## 🔹 Definition:
Event Delegation ek aisa technique hai jisme hum **parent element par ek hi event listener lagate hain**, instead of child elements.

Yeh tab kaam aata hai jab:
- Multiple similar elements ho (list items, buttons, etc.)
- Dynamically created elements ho
- Performance optimize karni ho

---

## 🔹 Kaise Kaam Karta Hai?
1. Parent par event listener lagao
2. Event automatically child tak bubble karta hai
3. `event.target` ka use karke pata karo kis child ne trigger kiya

---

## 🔹 Syntax Example:
```js
parent.addEventListener("click", function(e) {
  if (e.target.matches("li")) {
    // li par click hua
  }
});
```
### 🧠 Advantages:
- Performance optimized (1 event listener only)

- Dynamically added elements bhi handle ho jate hain

- Maintainable and cleaner code

### ⚠️ Caution:
- Make sure target element is matched properly (e.target.matches)

- Kabhi kabhi event bubbling block ho sakta hai

### 📌 Real Use-Cases:
- Dropdown menu

- List item click

- Table row action

- Dynamic forms