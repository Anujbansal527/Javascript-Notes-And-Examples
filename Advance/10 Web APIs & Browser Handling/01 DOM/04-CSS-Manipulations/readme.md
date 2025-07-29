## 🎨 Why CSS Manipulation?

JavaScript se hum HTML elements ka:
- Style change kar sakte hain (color, font, size, etc.)
- CSS class add/remove/toggle kar sakte hain
- Animation ya transition trigger kar sakte hain

---

## 🔧 3 Ways to Manipulate CSS via JS

### ✅ 1. `element.style.property`
Direct inline CSS set karta hai

```js
element.style.color = "red";
element.style.backgroundColor = "black";
```
⚠️ CamelCase use hota hai: backgroundColor, fontSize, etc.

### ✅ 2. element.className
Pura class string replace karta hai
```js
element.className = "active bold";
```
❗ Pehle wali classes overwrite ho jaati hain

### ✅ 3. element.classList ✅ (Recommended)
| Method              | Description                           |
| ------------------- | ------------------------------------- |
| `add("class")`      | Add class                             |
| `remove("class")`   | Remove class                          |
| `toggle("class")`   | Add if not present, remove if present |
| `contains("class")` | Check if class exists                 |

```js
element.classList.add("highlight");
element.classList.toggle("dark-mode");
```

### 📌 Real Use-Cases:
- Button dabane par dark/light theme toggle

- Form error par border red karna

- Active tabs highlight karna
