# 🔍 Destructuring in JavaScript

## 🔹 Definition:

Destructuring ek **ES6 feature** hai jisse hum **arrays aur objects se values extract** kar ke alag variables me assign kar sakte hain – easily and cleanly.

---

## 🔹 Types of Destructuring:

1. **Array Destructuring**
2. **Object Destructuring**
3. **Nested Destructuring**
4. **Function Parameters Destructuring**

---

## 🔹 Array Destructuring

```js
const arr = [1, 2, 3];
const [a, b, c] = arr;
```

### 🔹 Object Destructuring
```js
const user = { name: "Anuj", age: 24 };
const { name, age } = user;
```

### 🔹 Default Values
Agar koi value undefined ho to default assign kar sakte hain:
```js
const [a = 10, b = 20] = [5];
```

### 🔹 Rename Variables
```js
const { name: username } = user;
```

### 🔹 Function Parameter Destructuring
```js
function greet({ name, age }) {
  console.log(name, age);
}
```

### 🔹 Destructuring Flow
```js
A[Array / Object] --> B[Extract Values]
B --> C[Assign to Variables]
```

### 🔹 Use-Cases:
- Cleaner function parameters

- React props handling

- Swapping values

- API data parsing


