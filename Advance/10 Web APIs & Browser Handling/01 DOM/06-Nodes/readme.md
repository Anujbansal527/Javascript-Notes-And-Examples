 ## 🧠 What are DOM Nodes?

DOM ke har ek element (tag, text, comment, etc.) ko hum **Node** kehte hain.

### 🔹 Types of Nodes:
| Node Type | Description         |
|-----------|---------------------|
| 1         | Element Node (`<div>`) |
| 3         | Text Node            |
| 8         | Comment Node         |

---

## 🔧 Creating and Manipulating Nodes

### ✅ Create New Element:
```js
let div = document.createElement("div");
```

### ✅ Add Text inside:
```js
div.innerText = "Hello!";
```

### ✅ Append to body or any parent:
```js
document.body.appendChild(div);
```

### ✅ Remove Node:
```js
parent.removeChild(child);
```

### ✅ Replace Node:
```js
parent.replaceChild(newNode, oldNode);
```

### 🔁 Common Methods
| Method             | Description                           |
| ------------------ | ------------------------------------- |
| `createElement()`  | New element create karta hai          |
| `createTextNode()` | New plain text node create            |
| `appendChild()`    | Parent ke andar element dalta hai     |
| `removeChild()`    | Child node ko hata deta hai           |
| `replaceChild()`   | Ek node ko dusre se replace karta hai |

### 🧪 Real Use-Cases
- Form submit pe new item list me add karna

- Cart me product dynamically dikhana

- Old message hatana, naya message dikhana

