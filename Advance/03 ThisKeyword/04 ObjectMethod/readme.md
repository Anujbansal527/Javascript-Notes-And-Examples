# 🔹 Object Method me `this`

## 📌 Definition:
Jab hum kisi function ko **object ke method** ke roop me call karte hain, tab `this` us object ko refer karta hai jiske andar woh method likha gaya hai.

---

## ✅ Syntax:

```js
const obj = {
  name: "Anuj",
  greet() {
    console.log(this.name); // 👉 "Anuj"
  },
};
obj.greet();
```

### 🔍 Important Notes:
- this will point to the object only if method is called using dot (.) notation.

- Agar method ko kisi aur variable me assign kar diya, toh context this ka change ho jaata hai.

### ⚠️ Common Pitfall:
```js
const obj = {
  name: "Anuj",
  show() {
    console.log(this.name);
  },
};

const ref = obj.show;
ref(); // ❌ undefined (window/global) because context lost
```

### 🧠 Summary:
| Situation                                | `this` refers to       |
| ---------------------------------------- | ---------------------- |
| `obj.method()`                           | `obj`                  |
| Method assigned to variable, then called | `window` / `undefined` |
| Arrow function as method                 | ❌ Not object itself    |

### 💬 Interview Tip:
"Jab aap object.method() call karte ho, tab this usi object ko point karta hai — but agar aap method ko alag variable me assign karke call karo, toh context change ho jaata hai."
