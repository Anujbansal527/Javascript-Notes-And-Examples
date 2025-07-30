 
 # 🪟 window Object – JavaScript ka Global Boss

---

## 🔹 1. Kya hota hai window object?

- **`window` object browser ka top-most object hota hai**
- Sab kuch iske under aata hai → DOM, BOM, even functions like `alert`, `prompt`
- JavaScript mein `window` default hota hai → likhne ki zarurat nahi hoti

```js
alert("Hello!") // same as window.alert("Hello!")
```
### 🔹 2. Common window Methods
| Method            | Kaam kya karta hai                |
| ----------------- | --------------------------------- |
| `alert()`         | Pop-up message dikhata hai        |
| `confirm()`       | OK/Cancel pop-up (boolean return) |
| `prompt()`        | User se input leta hai            |
| `setTimeout()`    | Delay ke baad function call       |
| `setInterval()`   | Bar-bar function call hoti hai    |
| `clearTimeout()`  | Timer cancel karta hai            |
| `clearInterval()` | Interval cancel karta hai         |

### 🔹 3. Window Dimensions
```js
window.innerWidth   // viewport width
window.innerHeight  // viewport height
```
### 🔗 Real Life Use Cases:
- Form validation ke baad confirm() dikhana

- prompt() se naam lena

- Loader ke liye setTimeout() ya setInterval() lagana

- Banner ya pop-up delay ke baad dikhana
