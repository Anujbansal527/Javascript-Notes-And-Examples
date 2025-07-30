 # 💾 localStorage – Store Data in Browser (Permanent Until Cleared)

---

## 🔹 Kya hota hai localStorage?

- Ye browser ka built-in storage hota hai
- Data tab tak rahta hai jab tak manually delete na kiya jaye
- Simple key-value string format me data store karta hai
- Backend se completely alag – ye client-side hi hota hai

---

## 🔧 Syntax:

```js
localStorage.setItem("key", "value");      // Save item
localStorage.getItem("key");               // Get item
localStorage.removeItem("key");            // Remove item
localStorage.clear();                      // Clear all
```
### 🧪 Use Cases:
- Save dark/light theme

- Save token (⚠️ not recommended for secure data)

- Save user name, preferences, language

- Save cart, form data, drafts

### 📛 Limitations:
- Only string format (use JSON.stringify and JSON.parse for object)

- ~5MB max storage

- Not secure from XSS

### Example
```js
// Store object:
const user = { name: "Anuj", age: 24 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve:
const data = JSON.parse(localStorage.getItem("user"));
console.log(data.name);  // Anuj
```
