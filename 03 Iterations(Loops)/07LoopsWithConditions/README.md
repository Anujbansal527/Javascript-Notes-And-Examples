# 🔁 Loops with Conditions in JavaScript

JavaScript me hum loops ke andar conditions likh ke control karte hain ki loop kab **rukna chahiye**, ya kisi **iteration ko skip** karna chahiye.

---

## ✅ Keywords Used

| Keyword     | Description                                               |
|-------------|-----------------------------------------------------------|
| `break`     | Loop ko **poora terminate** karta hai.                    |
| `continue`  | Current iteration ko **skip** karta hai, next pe chala jata hai. |

---

## 🔹 `break` Statement

> Loop ko turant band kar deta hai jab condition meet ho jaye.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i); // Output: 1 2
}
```

---

## 🔹 `continue` Statement

> Current loop iteration skip kar deta hai (poora loop nahi rukta).

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // Output: 1 2 4 5
}
```

---

## ❓ Why no `goto` in JavaScript?

JavaScript me `goto` **exist nahi** karta intentionally.  
`goto` se **spaghetti code** ban jata tha (hard to debug, unreadable).  
Isliye JS me control flow ke liye **structured tools** diye gaye hain:

- `break`
- `continue`
- `if-else`
- `functions`
- `loops`

---

## 🧠 Interview Questions

- **Q: `break` vs `continue`?**  
- **Q: Loop ke andar `return` aur `break` ka difference?**  
- **Q: JavaScript me `goto` kyu nahi hai?**  
- **Q: Kya `break` nested loop ko bhi rokta hai?**

✅ A: `break` sirf **us loop** ko rokta hai jisme likha ho.  
Nested loop ko break karne ke liye **outer loop ka label** banana padta hai:

```js
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break outer;
    console.log(`i=${i}, j=${j}`);
  }
}
```

---

## ✅ Best Practices

- `break` ka use karo jab exact **exit point** chahiye  
- `continue` ka use karo jab kuch **iterations skip** karne ho  
- Avoid **deep nested break** unless absolutely needed

---
