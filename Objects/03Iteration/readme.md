# 🔁 Iterating Over Objects in JavaScript

Objects don’t support normal loops like `for`, `for...of` directly. Instead, we use special techniques to **iterate over keys, values, or entries**.

---

## 🔹 `for...in` Loop

Used to iterate over **keys (property names)** of an object.

```js
const user = { name: "Anuj", age: 23 };
for (let key in user) {
  console.log(key, user[key]);
}
```
⚠️ Loops inherited properties too – use hasOwnProperty() to filter.

### 🔹 Object.keys(obj).forEach()
Used to loop over keys using forEach().
```js
Object.keys(user).forEach((key) => {
  console.log(key, user[key]);
});
```
### 🔹 Object.values(obj).forEach()
Used to loop only over values.
```js
Object.values(user).forEach((value) => {
  console.log(value);
});
```
### 🔹 Object.entries(obj)
Returns [key, value] pairs.
```js
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}
```
### 🧠 Best Practices
| ✅ Use                               | 🔍 Why                                            |
| ----------------------------------- | ------------------------------------------------- |
| `Object.entries()` with `for...of`  | Best for key + value                              |
| `Object.keys().forEach()`           | Simple and readable                               |
| `for...in` + `hasOwnProperty()`     | Good for classic loops                            |
| Avoid `for...of` directly on object | Throws error unless used on iterable (like array) |

### ❓ Interview Tips
| Question                                      | Answer / Tip                     |
| --------------------------------------------- | -------------------------------- |
| How to loop keys and values of an object?     | `Object.entries()` or `for...in` |
| How to loop only values?                      | `Object.values().forEach()`      |
| How to prevent inherited props in `for...in`? | Use `hasOwnProperty()`           |
| Can you use `for...of` directly on object?    | ❌ No, throws TypeError           |

### ⚠️ Important
Objects are not iterable by default.
You can convert them into array form using:
Object.keys()
Object.values()
Object.entries()

