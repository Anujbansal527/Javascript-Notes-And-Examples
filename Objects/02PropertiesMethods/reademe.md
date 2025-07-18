# 🛠️ JavaScript Object Properties & Built-in Methods

In this section, we’ll learn important built-in **methods** used for reading, manipulating, and managing objects.

---

## 📌 Built-in Object Methods

### 🔹 Object.keys(obj)
Returns an array of all keys.

```js
const user = { name: "Anuj", age: 23 };
console.log(Object.keys(user)); // ["name", "age"]
```

### 🔹 Object.values(obj)
Returns an array of all values.
```js
console.log(Object.values(user)); // ["Anuj", 23]
```

### 🔹 Object.entries(obj)
Returns an array of [key, value] pairs.

```js
console.log(Object.entries(user)); // [["name", "Anuj"], ["age", 23]]
```

### 🔹 Object.assign(target, source)
Used to clone or merge objects.

```js
const address = { city: "Indore" };
const userInfo = Object.assign({}, user, address);
```

### ✅ Can also use the spread operator:
```js
const userInfo = { ...user, ...address };
```

### 🔹 Object.hasOwnProperty(key)
Check if a property exists directly on the object.
```js
console.log(user.hasOwnProperty("name")); // true
```

### 🔹 "key" in obj
Another way to check key existence (includes inherited properties too).
```js
console.log("age" in user); // true
```

### 🔐 Object.freeze(obj)
Prevents any changes (add/remove/update).

```js
Object.freeze(user);
user.name = "Updated"; // ❌ won't work
```

### 🔐 Object.seal(obj)
Allows updating, but no add/remove.
```js
Object.seal(user);
user.name = "Updated"; // ✅ works
delete user.age;       // ❌ won't work
```

### 📚 Summary Table
| Method             | Description                      |
| ------------------ | -------------------------------- |
| `Object.keys()`    | Get all keys                     |
| `Object.values()`  | Get all values                   |
| `Object.entries()` | Get all \[key, value] pairs      |
| `Object.assign()`  | Clone or merge objects           |
| `Object.freeze()`  | Make object fully read-only      |
| `Object.seal()`    | Prevent add/delete, allow modify |
| `hasOwnProperty()` | Checks if key exists directly    |

### 📌 Interview Questions
| ❓ Question                                                 | ✅ Tip                                 |
| ---------------------------------------------------------- | ------------------------------------- |
| How to loop all keys in an object?                         | Use `Object.keys()` or `for...in`     |
| What is the difference between `in` vs `hasOwnProperty()`? | `in` checks prototype too             |
| How to clone an object?                                    | Spread operator or `Object.assign()`  |
| Can you add properties to a frozen object?                 | ❌ No – it’s immutable                 |
| Which method is better for checking if key exists?         | `hasOwnProperty()` (for clean checks) |
