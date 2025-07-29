# 🏭 Factory Functions in JavaScript

---

## 🔰 What is a Factory Function?

> Factory Function ek aisa normal function hota hai jo **naya object return karta hai**, bina `new` keyword ke use kare.

📌 Yeh ek alternative hai constructor functions ya classes ka:
```js
function createUser(name) {
  return {
    name,
    greet: () => `Hello, ${name}`
  };
}
```
### 🎯 Use Cases
- User creation, product models, shape generators

- Reusable blueprints for object creation

- Class alternative in older JavaScript

### 📦 Syntax Flow
```js
function factoryFunction(params) {
  // 1. Create object
  // 2. Add properties/methods
  // 3. Return object
}
```

### 🆚 Factory Function vs Constructor vs Class
| Feature         | Factory Function | Constructor | Class      |
| --------------- | ---------------- | ----------- | ---------- |
| Return required | ✅ Yes            | ❌ No        | ❌ No       |
| `new` keyword   | ❌ Not needed     | ✅ Yes       | ✅ Yes      |
| `this` keyword  | ❌ Optional       | ✅ Required  | ✅ Required |
| Easier to test  | ✅ Yes            | ❌ No        | ❌ No       |


### ✅ Advantages
✅ Cleaner syntax
✅ No confusion with this
✅ Return flexibility
✅ Easy composition

### ❗ Limitations
❌ Shared methods not memory-optimized (can use prototypes if needed)

### ✅ Interview Tip
“Factory Function is a simpler, functional way to create multiple similar objects without using new or this.”


