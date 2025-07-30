# DOM Events Handling

---

## 🧠 What is an Event?

Jab user kuch karta hai (button click, input type, mouse move), toh browser **event generate** karta hai. Hum JS me uss event ko **listen** karte hain using `addEventListener`.

---

## 🧩 Syntax:

```js
element.addEventListener("event", function);
```
Example:
```js
btn.addEventListener("click", () => {
  console.log("Button clicked");
});
```

### 🔥 Common Event Types
| Event       | Triggered When…                        |
| ----------- | -------------------------------------- |
| `click`     | Button ya kisi element pe click        |
| `input`     | Input field me kuch type karo          |
| `change`    | Select box / input blur ke baad change |
| `keydown`   | Keyboard key press hoti hai            |
| `keyup`     | Key chhodne par                        |
| `mouseover` | Mouse element ke upar jaye             |
| `mouseout`  | Mouse element se bahar aaye            |

### 📌 this, event, and target
- event: Event object deta hai (info about what happened)

- event.target: Kaunsa element trigger hua

- this: Same as event.target (inside normal function)

### ✅ Event Listener vs Inline
| Type               | Description               |
| ------------------ | ------------------------- |
| Inline JS          | `<button onclick="fn()">` |
| `addEventListener` | Modern approach, reusable |


