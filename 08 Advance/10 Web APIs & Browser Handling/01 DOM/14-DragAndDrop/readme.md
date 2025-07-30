 # 🖱️ Drag and Drop in JavaScript

## 🔹 Kya hota hai Drag and Drop?
User kisi element ko mouse se kheench (drag) ke kisi doosre element par chhode (drop) — ye pura process JS se handle karte hain.

---

## 🔹 Required Events:

| Event           | Purpose |
|------------------|---------|
| `dragstart`      | Jab drag start hota hai |
| `dragover`       | Jab dragged item kisi element ke upar le jate hain (default prevent zaruri) |
| `drop`           | Jab item chhoda jata hai |
| `dragend`        | Jab drag complete ho jata hai |
| `dragleave`      | Jab dragged item kisi area se bahar jata hai |

---

## 🔹 Important Points:
- **Draggable attribute** HTML mein zaruri hai → `draggable="true"`
- `e.preventDefault()` is needed in `dragover` to allow drop

---

## 🧠 Use Cases:
- File uploads (drop zone)
- Rearranging list items
- Custom UI interactions (kanban board, cards, etc.)

---

## ⚠️ Notes:
- Safari mein drag events thode inconsistent ho sakte hain
- Mobile drag-drop manually handle karna padta hai (Touch events)

---

## 🔗 Related Topics:
- DataTransfer object
- FileReader API
- Custom Drag Visual
