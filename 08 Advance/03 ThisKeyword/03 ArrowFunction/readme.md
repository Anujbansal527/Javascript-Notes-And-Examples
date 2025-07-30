# 🔹 Arrow Function me `this`

## 📌 Definition:
Arrow functions ka `this` **lexically bound** hota hai — iska matlab:
🔹 Arrow function ka `this` uske parent scope se aata hai.  
🔹 Ye `this` ko khud define nahi karta jaise normal function karta hai.

---

## ✅ Key Differences:

| Feature                      | Arrow Function              | Regular Function            |
|-----------------------------|-----------------------------|-----------------------------|
| `this` binding              | Lexical (parent se lega)    | Dynamic (context based)     |
| Constructor use            | ❌ Not allowed              | ✅ Allowed                   |
| Arguments object            | ❌ Not available            | ✅ Available                 |
| `call`/`apply`/`bind`       | ❌ Can't override `this`    | ✅ Can override              |

---

## 🧠 Visual Flow:

```js
Parent Scope → Arrow Function → Use Parent `this`
```

### 🔍 Use Case:
- Callback functions me this ko preserve karne ke liye.

- setTimeout, event listeners ke andar.

### ⚠️ Common Mistake:
```js
const obj = {
  name: "Anuj",
  arrowFunc: () => {
    console.log(this.name); // ❌ undefined, kyunki this window/global hai
  },
};
obj.arrowFunc();
```

### ✅ Correct Use with Parent Lexical Scope:
```js
const obj = {
  name: "Anuj",
  regularFunc: function () {
    const arrow = () => {
      console.log(this.name); // ✅ "Anuj"
    };
    arrow();
  },
};
obj.regularFunc();
```

### 💬 Interview Tip:
"Arrow function ka this khud ka nahi hota, yeh surrounding lexical scope se inherit karta hai."

