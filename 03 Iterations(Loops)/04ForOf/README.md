# 🔁 JavaScript `for...of` Loop

`for...of` loop use hota hai kisi **iterable** object (like array, string, map, set) ke **values** pe loop chalane ke liye.

---

## 🔹 Syntax

```js
for (const item of iterable) {
  // Use item
}
```

---

## 🔹 Flowchart

```
Start
  ↓
Pick next value from iterable
  ↓
Run block with that value
  ↓
Repeat until done
```

---

## 📌 Iterable Ka Matlab?

Koi bhi object jise aap `for...of` me chala sako — like:

- Array ✅  
- String ✅  
- Map ✅  
- Set ✅  
- Arguments ✅  
- ❌ Not: Plain Object  

---

## 🔹 Real-Life Example

"Ghar ke har member ka naam bolna" —  
**Values chahiye, keys nahi.**

---

## 📌 Use Cases

- Loop through arrays  
- Loop through characters in string  
- Loop through Map or Set values  
- Better readability than traditional loop  

---

## ⚠️ Common Mistakes

| Mistake                 | Explanation                            |
|-------------------------|----------------------------------------|
| Using on object         | Error: object is not iterable          |
| Trying to get index     | `for...of` doesn't give index          |
| Mutating the iterable   | Avoid changing array while looping     |

---

## 🧠 Interview Qs

- **Q: Difference between `for...in` and `for...of`?**  
- **Q: Can you use `for...of` on objects?**  
- **Q: Can you use `break`, `continue` inside `for...of`?**  
- **Q: How to get index while using `for...of`?**  

---

## 🛠 Best Practice

If you want **value only**, always prefer `for...of` over `for` or `forEach`.

---
