# 🔹 Recursion in JavaScript

Recursion is a technique where a function calls itself to break down problems into smaller subproblems.

---

### ✅ Why Use Recursion?
- To solve problems that can be divided into subproblems (divide & conquer)
- When iteration isn't ideal or would make the logic too complex

---

### ✅ Key Concepts

🔸 **Base Case** – condition to stop recursion  
🔸 **Recursive Case** – function keeps calling itself  

```js
function recurse(n) {
  if (n === 0) return;
  console.log(n);
  recurse(n - 1);
}
```

### ✅ Flow Diagram Example
For recurse(3):
```js
CALL STACK:
recurse(3)
  → recurse(2)
     → recurse(1)
        → recurse(0) // stops here
```

### ✅ Visual Dry Run (Factorial)
```js
factorial(3)
= 3 * factorial(2)
= 3 * 2 * factorial(1)
= 3 * 2 * 1 * factorial(0)
= 3 * 2 * 1 * 1 => 6
```


### ✅ Pros:
- Elegant, clean code for tree-based/recursive problems

- Great for backtracking, nested structures, graphs

### ❌ Cons:
- Risk of stack overflow

- Not as performant as loops in JS (no TCO - Tail Call Optimization)