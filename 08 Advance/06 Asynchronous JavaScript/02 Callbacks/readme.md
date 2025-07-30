### ✅ Definition:
**Callback** ek function hota hai jo kisi doosre function ko argument ke roop mein diya jata hai aur jab kaam complete hota hai tab call kiya jata hai.

### 📌 Use:
- Asynchronous operations (e.g., API calls, file reading)
- DOM Events
- setTimeout, setInterval

---

### 🧠 Syntax:
```js
function greeting(name) {
  alert("Hello " + name);
}

function processUserInput(callback) {
  let name = prompt("Enter your name");
  callback(name);
}

processUserInput(greeting);
```

### 🔄 Flow:
```js
graph TD
A[Main Function] --> B[Callback Passed]
B --> C[Callback Invoked Later]
```

### ⚠️ Callback Issues:
- Nested callbacks

- Difficult to maintain (callback hell)

- Error handling complex

### 📚 Real-life Example:
```js
// Button click ke baad kuch kaam karna
document.getElementById("btn").addEventListener("click", function() {
  alert("You clicked me!");
});
```
