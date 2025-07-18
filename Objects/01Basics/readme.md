# 📘 JavaScript Object Basics

This section introduces how to **create, access, modify, and delete** properties from JavaScript objects.

---

## 🔹 Object Creation

```js
const user = {
  name: "Anuj",
  age: 23,
  isStudent: true
};
```
Objects are written in curly braces {}
Each item is a key-value pair, separated by 

### 🔸 Accessing Properties
```js
console.log(user.name);        // Dot notation → Anuj
console.log(user["age"]);      // Bracket notation → 23
```
Use dot notation for static access
Use bracket notation when key is dynamic or contains space

### 🔧 Modifying Object Values
```js
user.age = 24;
user["name"] = "Bansal";
```

### ➕ Adding New Properties
```js
user.city = "Indore";
user["country"] = "India";
```

### ❌ Deleting Properties
```js
delete user.isStudent;

```

### 💡 Useful Notes
Keys are always strings
Order of keys is not guaranteed
Objects are dynamic – you can add or delete properties anytime

### 🧠 Interview Points
| Question                                      | Answer / Tip                               |
| --------------------------------------------- | ------------------------------------------ |
| How to access keys with space?                | Use bracket notation: `obj["key name"]`    |
| Can we delete properties?                     | Yes, using `delete` keyword                |
| What if you access a non-existing key?        | Returns `undefined`                        |
| Difference between `in` and `hasOwnProperty`? | Both check key existence (see next topics) |






