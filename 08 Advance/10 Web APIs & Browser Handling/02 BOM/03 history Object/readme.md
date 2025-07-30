# 🧭 window.history – Control Back/Forward in JavaScript

---

## 🔹 Kya hota hai `history` object?

- `window.history` object browser ke **back/forward navigation** ko control karta hai.
- Ye browser ki history stack me se items ko move karne ke liye use hota hai.

---

## 🔹 Common Properties/Methods:

| Method               | Description                             |
|----------------------|-----------------------------------------|
| `history.length`     | Total pages in current session history  |
| `history.back()`     | 1 page back                            |
| `history.forward()`  | 1 page forward                         |
| `history.go(n)`      | `+1` = forward, `-1` = back             |

---

## 🔗 Examples:

```js
console.log(history.length);  // Current session me kitne pages visit hue

history.back();      // Browser ek page peeche jayega
history.forward();   // Browser ek page aage jayega
history.go(-2);      // 2 pages back
history.go(1);       // 1 page forward
```

### Flow Chart
```js
[Page 1] ← back() ← [Page 2] → forward() → [Page 3]
                          ↑
                   go(-1) / go(+1)

```
### 🧪 Real Use Cases:
- Single Page Applications (SPA) me manual routing

- Step-by-step navigation (quiz, form wizard)

- History length check karna for restricted navigation

- "Back to previous page" button banana

### ⚠️ Important:
- Ye sirf session history me kaam karta hai (same tab)

- Tab ya window close hone ke baad history reset ho jaati hai

