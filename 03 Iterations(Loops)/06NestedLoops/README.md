### 📊 JavaScript Loop Comparison Table

| Loop Type     | Use For                 | Iterates On         | Can Break / Continue | Async-Friendly | Index Access  | Recommended Use Case                        |
|---------------|--------------------------|----------------------|-----------------------|----------------|----------------|-----------------------------------------------|
| `for`         | Known no. of iterations  | Numbers / Arrays     | ✅ Yes                | ✅ Yes         | ✅ Yes         | Traditional loop when index needed            |
| `while`       | Unknown limit            | Condition-based      | ✅ Yes                | ✅ Yes         | ⚠️ Manual      | Run loop until condition is false             |
| `do...while`  | Run at least once        | Condition-based      | ✅ Yes                | ✅ Yes         | ⚠️ Manual      | Run loop minimum once before checking         |
| `for...of`    | Iterables (values)       | Array, String, Set   | ✅ Yes                | ✅ Yes         | ❌ No          | Get values from iterable                      |
| `for...in`    | Object keys              | Object               | ✅ Yes                | ✅ Yes         | ✅ (key)       | Access object keys and properties             |
| `forEach()`   | Arrays (values)          | Array                | ❌ No                 | ❌ No          | ✅ (arg)       | Simple readable looping, not control-heavy    |

---

### ✅ Best Practices (Loop Selection)

| Situation                             | Best Loop     |
|---------------------------------------|---------------|
| Traverse array with index             | `for`         |
| Just need array values                | `for...of`    |
| Loop until external condition         | `while`       |
| Must run code block at least once     | `do...while`  |
| Loop object properties                | `for...in`    |
| Loop with readable syntax (no break)  | `forEach()`   |

---

# 🔁 JavaScript Nested Loops

`Nested loops` ka matlab hai ek loop ke andar doosra loop chalana.

> Common use: Tables, Patterns, Grids, Multi-Dimensional Arrays

---

## 🔹 Syntax

```js
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    // Inner loop body
  }
}
```

---

## 🔹 Real-World Analogy

"Classroom ke har row me har student ka naam lena"  
Outer loop → rows  
Inner loop → students per row

---

## 🔹 Flowchart

```
Start Outer Loop
  ↓
Start Inner Loop
  ↓
Execute inner body
  ↓
Inner loop condition false → Go to next outer
  ↓
Repeat
```

---

## 🔹 Common Use Cases

- Multiplication Tables  
- Star Patterns  
- Matrix Traversal  
- 2D Arrays  
- Game Boards  

---

## ⚠️ Mistakes to Avoid

| Mistake                    | Result                            |
|----------------------------|------------------------------------|
| Not resetting inner loop   | Unexpected infinite loops          |
| Overlapping variable names | Logical errors                     |
| Performance on large input | Nested loops are O(n²) in complexity |

---

## 🧠 Interview Questions

- **Q: How does nesting affect performance?**  
- **Q: Can you use `break` in nested loops?**  
- **Q: Write code to print a pattern using nested loops.**  
- **Q: How many times does inner loop run in total?**

---

### 💡 Tip:

Inner loop runs **completely** for **every** outer loop iteration.  
So if outer runs `n` times and inner runs `m` times → total = `n * m`

---
