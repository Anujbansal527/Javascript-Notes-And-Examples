 # 📝 Form Handling in JavaScript

## 🔹 What is Form Handling?
User input leke uska process karna — chahe validation ho ya server bhejna.

---

## 🔹 Events Used:
| Event         | Use |
|---------------|-----|
| `input`       | Real-time typing detect |
| `change`      | Field chhodte hi value check |
| `submit`      | Final submit ke time pe call hota hai |

---

## 🔹 preventDefault()
Form ke submit hone par **page reload hota hai**, usko rokhne ke liye:
```js
form.addEventListener("submit", function(e) {
  e.preventDefault();
});
```

### 🔹 Simple Validation Examples
- Empty fields

- Email format check

- Password length

### 🔹 Real-Life Uses:
- Login / Signup form

- Feedback form

- Search form with filters

### ⚠️ Best Practices:
- Check on submit, not just on input

- Give user feedback (error messages)

- Trim values to avoid blank spaces