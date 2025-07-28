# 📦 Map & Set in JavaScript (ES6)

## 🔹 Introduction

ES6 me `Map` aur `Set` do naye data structures introduce hue:

- ✅ **Map** – Key-value pairs with any type of key
- ✅ **Set** – Unique value collection (no duplicates allowed)

---

## 🔹 1. Map

### ➤ Features:
- Keys can be **any type** (object, function, primitive)
- Maintains **insertion order**
- Better for large data where key types vary

### ➤ Syntax:

```js
const myMap = new Map();
myMap.set("name", "Anuj");
console.log(myMap.get("name")); // Anuj
```

## 🔹 2. Set
### ➤ Features:
- Stores only unique values

- No duplicate allowed

- Values can be of any type

- Fast lookup

### ➤ Syntax:
```js
const mySet = new Set();
mySet.add(1);
mySet.add(1); // ignored
console.log(mySet); // Set {1}
```

### 🔹 Map vs Object
| Feature   | Object                   | Map                         |
| --------- | ------------------------ | --------------------------- |
| Key Types | String/Symbol            | Any (obj, func)             |
| Order     | Unordered                | Ordered                     |
| Size      | Manual (`Object.keys()`) | `map.size`                  |
| Iteration | For-in loop              | `map.forEach()` / `for..of` |


### 🔹 Set vs Array
| Feature    | Array                | Set                      |
| ---------- | -------------------- | ------------------------ |
| Duplicates | Allowed              | ❌ Not Allowed            |
| Type       | Any                  | Any                      |
| Methods    | Limited (filter/map) | Set has add, delete, has |
| Conversion | Direct               | `Array.from(set)`        |

### 🔹 Flow
```js
    A[Map/Set] --> B[Add Values]
    B --> C[Access / Iterate / Modify]
    ```