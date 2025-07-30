 # 🔄 MutationObserver in JavaScript

## 🔹 Kya hota hai?
`MutationObserver` ek built-in browser API hai jo DOM mein hone wale changes ko detect karta hai — bina polling ke.

Yeh real-time DOM monitoring ke liye bahut useful hai.

---

## 🔹 Kya detect kar sakte ho?
- Naye elements add hone par
- Text change hone par
- Attributes ya classes update hone par
- Elements remove hone par

---

## 🔹 Syntax:
```js
const observer = new MutationObserver(callbackFn);
observer.observe(targetElement, options);
```
### 🔹 Callback Example:
```js
const callback = (mutationsList, observer) => {
  mutationsList.forEach(mutation => {
    console.log("Mutation type:", mutation.type);
  });
};
```
### 🔹 Options:
| Option          | Use                                      |
| --------------- | ---------------------------------------- |
| `childList`     | Child elements add/remove detect         |
| `attributes`    | Attributes (e.g., class, id) mein change |
| `characterData` | Text content mein change                 |
| `subtree`       | Nested children bhi observe kare         |

### 🔹 Real-World Use Cases:
- Detect new messages in chat

- Track elements added via AJAX

- Monitor form or UI updates

