# 🔄 Spread & Rest Operators (`...`)

## 🔹 Common Symbol: `...`

`...` operator ka use 2 jagah hota hai:

1. **Spread Operator** – Values ko expand karne ke liye
2. **Rest Operator** – Multiple values ko collect karne ke liye

---

## 🔹 1. Spread Operator

### ➤ Use:
- Arrays ya objects ke elements/props ko **expand** karne ke liye

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4, 5];
```

## 🔹 2. Rest Operator
### ➤ Use:
Function me unknown/multiple arguments ko handle karne ke liye

- Destructuring me baaki values ko collect karne ke liye
```js
function sum(...nums) {
  return nums.reduce((acc, val) => acc + val, 0);
}
```

### 🔹 Differences:
```js
| Feature   | Spread                | Rest                         |
| --------- | --------------------- | ---------------------------- |
| Use       | Expands elements      | Collects into array          |
| Placement | Right-hand side (RHS) | Left-hand side (LHS)         |
| Context   | Arrays, objects, args | Function args, destructuring |
```

### 🔹 Flow Diagram
```js
A[... Operator] --> B{Context}
B -- Function Param --> C[Rest Operator]
B -- RHS (Objects/Arrays) --> D[Spread Operator]
```

### 🔹 Use-Cases:
- Copying arrays/objects

- Merging arrays/objects

- Handling dynamic arguments

- Cleaner destructuring
