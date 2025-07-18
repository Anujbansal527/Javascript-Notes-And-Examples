# ⚙️ JavaScript Object Operations

This section covers **common operations** on objects including:
- Cloning (shallow/deep copy)
- Merging
- Comparing
- Freezing/Sealing
- Converting objects to arrays or strings

---

## 🔹 1. Cloning Objects

### ✅ Shallow Copy

Copies top-level keys only.

```js
const original = { name: "Anuj", age: 23 };
const copy = { ...original };

copy.name = "Bansal";
console.log(original.name); // Anuj (safe)
```
### ✅ Also works with Object.assign()

```js
const copy = Object.assign({}, original);
```

### ⚠️ Not Safe for Nested Objects
```js
const original = { user: { name: "Anuj" } };
const copy = { ...original };

copy.user.name = "Changed";
console.log(original.user.name); // Changed ❌
```
### ✅ Deep Copy
For nested structures – use recursion or structuredClone() (modern) or JSON method.
```js
const deep = structuredClone(original);

// OR (works for JSON-safe data)
const deep = JSON.parse(JSON.stringify(original));
```

### 🔸 2. Merging Objects
```js
const a = { name: "Anuj" };
const b = { age: 23 };
const merged = { ...a, ...b };
console.log(merged); // { name: 'Anuj', age: 23 }
```

### 🔸 3. Comparing Objects
Direct comparison fails for objects.
```js
const a = { name: "Anuj" };
const b = { name: "Anuj" };

console.log(a === b); // false ❌
```
✅ Use JSON comparison for simple objects
```js
console.log(JSON.stringify(a) === JSON.stringify(b)); // true ✅
```

### 🔸 4. Freeze and Seal
🔹 Object.freeze(obj)
Makes object immutable (no change, no add, no delete)
```js
const user = { name: "Anuj" };
Object.freeze(user);
user.name = "Bansal"; // ignored
```
🔹 Object.seal(obj)
Can update values, but can’t add/delete properties
```js
const user = { name: "Anuj" };
Object.seal(user);
user.name = "Bansal";  // ✅
user.age = 23;         // ❌ ignored
```
### 🔸 5. Convert to Arrays / Entries
```js
Object.keys(obj);    // ['name', 'age']
Object.values(obj);  // ['Anuj', 23]
Object.entries(obj); // [['name', 'Anuj'], ['age', 23]]
```

### 📌 Interview Q&A
| ❓ Question                          | ✅ Tip                                                     |
| ----------------------------------- | --------------------------------------------------------- |
| How do you clone objects in JS?     | `...spread`, `Object.assign()`                            |
| How to perform deep copy?           | Use `JSON.parse(JSON.stringify())` or `structuredClone()` |
| How to merge objects?               | `{ ...a, ...b }`                                          |
| How to compare two objects?         | Compare using `JSON.stringify()`                          |
| Difference between freeze and seal? | Freeze = Full lock; Seal = Update allowed                 |
| Can object keys be of any type?     | All keys are converted to strings                         |





