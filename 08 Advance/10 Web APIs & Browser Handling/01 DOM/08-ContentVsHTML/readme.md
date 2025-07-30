# innerText vs textContent vs innerHTML vs outerHTML

## 🧠 What are these?

Yeh sab properties **DOM element ke andar ke content ko read ya modify** karne ke liye use hoti hain, lekin inke behavior thode alag hote hain.

---

## 📊 Comparison Table

| Property        | Includes Tags | Hidden Text | Rendered Text Only | Editable |
|----------------|---------------|-------------|---------------------|----------|
| `innerText`     | ❌ No         | ❌ No        | ✅ Yes               | ✅ |
| `textContent`   | ❌ No         | ✅ Yes       | ❌ (raw text)        | ✅ |
| `innerHTML`     | ✅ Yes        | ✅ Yes       | ✅ + tags            | ✅ |
| `outerHTML`     | ✅ Yes (self) | ✅ Yes       | ✅ + element itself  | ✅ |

---

## 📌 Examples:

### innerText
```js
element.innerText = "Visible only text";
```

### textContent

```js
element.textContent = "Even hidden and extra spaces";
```
### innerHTML

```js
element.innerHTML = "<b>Bold</b> and <i>Italic</i>";
```
### outerHTML

```js
element.outerHTML = "<span>Whole element replaced</span>";
```
### 💡 When to Use What?
| Use Case                        | Use Property  |
| ------------------------------- | ------------- |
| Only visible content (rendered) | `innerText`   |
| All text including hidden       | `textContent` |
| Insert HTML                     | `innerHTML`   |
| Replace entire element          | `outerHTML`   |
