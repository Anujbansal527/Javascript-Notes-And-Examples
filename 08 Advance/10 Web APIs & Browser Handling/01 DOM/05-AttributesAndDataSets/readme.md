 # 📂 05_Attributes_&_DataSets – DOM Attributes & Custom Data Handling

---

## 🧠 What are Attributes?

HTML elements ke paas kuch **default attributes** hote hain jaise:
- `id`, `class`, `src`, `href`, `alt`, etc.
- Inhe JS se access/change bhi kar sakte hain

---

## 🔧 JS Methods to Work with Attributes

| Method                  | Description                         |
|-------------------------|-------------------------------------|
| `getAttribute(attr)`    | Attribute ki value ko get karta hai |
| `setAttribute(attr, val)` | Attribute ki value set karta hai  |
| `hasAttribute(attr)`    | Attribute present hai ya nahi       |
| `removeAttribute(attr)` | Attribute ko remove karta hai       |

---

## 🎯 Example:

```js
img.getAttribute("src");
link.setAttribute("href", "https://google.com");
```

### 🏷️ data-* Attributes (Custom)
Jab hume custom values store karni ho (like product-id, user-role), tab hum data-* attributes use karte hain.

Example:
```js
<button data-user-id="101" data-role="admin">Click Me</button>
```
JS Access:
```js
btn.dataset.userId  // "101"
btn.dataset.role    // "admin"
```
⚠️ Dash-case (data-user-id) → camelCase (dataset.userId)

### ✅ Use-Cases:
- Product/item IDs store karna

- User roles, categories, prices

- Dynamic logic control based on dataset


