# 🌍 window.location – URL Control in JavaScript

---

## 🔹 Kya hota hai?

`location` object browser window ke **URL** ko represent karta hai. Isse hum:
- current URL ko read kar sakte hain
- naye page pe redirect kar sakte hain
- URL ke parts jaise hostname, pathname, search query check kar sakte hain

---

## 🔹 Syntax:

```js
window.location.href        // Full URL
window.location.hostname    // Domain name
window.location.pathname    // Path
window.location.search      // Query string (?name=anuj)
window.location.hash        // #id
window.location.protocol    // https or http
```
### 🔁 Useful Methods:
| Method               | Description                  |
| -------------------- | ---------------------------- |
| `location.assign()`  | New page pe le jata hai      |
| `location.replace()` | Redirect with no back button |
| `location.reload()`  | Page reload karta hai        |

### 🔗 Examples:
```js
// Current URL dekhna
console.log(location.href);

// Page reload
location.reload();

// Page redirect (history mein ja sakte ho)
location.assign("https://google.com");

// Page replace (history mein back nahi ja sakte)
location.replace("https://example.com");
```
### 🧩 Real-World Use Cases
- Login hone ke baad redirect

- UTM tracking query params read karna

- Page reload on error

- SPA routing (advanced)

📌 Note: Ye sab window.location ke under hi aata hai, so window. likhna optional hai.

