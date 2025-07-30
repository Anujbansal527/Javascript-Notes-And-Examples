 ## 🧠 What is DOM Traversal?

DOM Traversal ka matlab hai:
👉 Ek element se start karke uske **parent**, **child**, ya **sibling** elements ko access karna.

---

## 🔍 Parent Access

| Property        | Description                        |
|-----------------|------------------------------------|
| `parentNode`    | Immediate parent element           |
| `parentElement` | Similar to `parentNode` (use this) |

```js
element.parentElement;
```

### 👶 Children Access
| Property            | Description                            |
| ------------------- | -------------------------------------- |
| `children`          | Only element children (HTMLCollection) |
| `childNodes`        | All nodes (including text/comments)    |
| `firstElementChild` | First child element                    |
| `lastElementChild`  | Last child element                     |

### 👬 Sibling Access
| Property                 | Description                     |
| ------------------------ | ------------------------------- |
| `nextElementSibling`     | Next sibling (element only)     |
| `previousElementSibling` | Previous sibling (element only) |

```js
element.nextElementSibling;
```
### 📌 Example Use Cases
- Tab navigation

- Nested element traversal

- Parent update from child

- Show/hide sibling cards

### 🛑 Warning
- .childNodes gives text nodes too (like newlines), use .children for clean traversal.

- Always check if (element) to avoid null errors.
