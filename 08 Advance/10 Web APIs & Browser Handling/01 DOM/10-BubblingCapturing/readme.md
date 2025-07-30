 # 🔁 Event Bubbling vs Capturing in JavaScript

## 🔹 What is Event Propagation?

Event Propagation describe karta hai ki **event DOM mein kaise travel karta hai**:
1. **Capturing Phase (Top to Target)** – root se element tak
2. **Target Phase (Element jisme event laga hai)**
3. **Bubbling Phase (Target se root tak)** – bubble back karta hai

---

## 🔹 Bubbling Phase
- Default hota hai
- Event target se upar parent elements tak propagate karta hai

```js
element.addEventListener("click", handler)
```
### 🔹 Capturing Phase
- Less commonly used

- Event top se target tak propagate karta hai

- Third argument true pass karna hota hai

```js
element.addEventListener("click", handler, true)
```

### 🔹 stopPropagation()
- Kisi bhi phase mein event ko propagate hone se rokta hai

### 🔹 Example Flow
- Outer div → Middle div → Inner button

- Click on button

- Check console logs for capturing vs bubbling

### 🔍 Use Cases
- Delegation ya nested elements ke sath sahi control

- Multiple layers of event handling

- Prevent unwanted double triggers



