### ✅ Definition:
Promise ek **object** hai jo future mein kisi async operation ka **result represent** karta hai.

> "Abhi kaam ho raha hai... jab complete hoga, tab batayenge success hua ya fail."

---

### 🔄 States of a Promise:

1. **Pending** – Kaam abhi chal raha hai
2. **Fulfilled** – Kaam successfully ho gaya
3. **Rejected** – Kaam fail ho gaya

---

### 📌 Syntax:

```js
let promise = new Promise(function(resolve, reject) {
  // async task
  if (success) {
    resolve(result); // success
  } else {
    reject(error);   // failure
  }
});
```

### 🧠 Methods:
- .then() – success case

- .catch() – failure case

- .finally() – always executed

### ✅ Use Case Flow:
```js
getData()
  .then(processData)
  .then(saveData)
  .catch(handleError)
  .finally(cleanUp);
```

### 🔥 Real World Examples:
- Fetching data from APIs

- Loading images

- Timer-based events




