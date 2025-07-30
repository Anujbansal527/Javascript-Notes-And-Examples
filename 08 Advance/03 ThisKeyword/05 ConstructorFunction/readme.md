 
 # 🔹 Constructor Function me `this`

## 📌 Definition:
Constructor function ek blueprint hoti hai object banane ke liye. Jab aap `new` keyword ke sath us function ko call karte ho, tab:

🔹 A **new empty object** ban jaata hai  
🔹 `this` us naye object ko refer karta hai  
🔹 Aap us object me properties/methods assign kar sakte ho using `this`

---

## ✅ Syntax:

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new Person("Anuj", 25);
console.log(user1.name); // Anuj
```

### 🧠 Flowchart:
```js
Call Constructor Function
        ↓
`new` keyword lagaya?
        ↓
✅ YES → Create empty object → `this = newObj`
        ↓
Add properties → Return `this`
```

### ⚠️ Without new keyword:
```js
function Person(name) {
  this.name = name;
}
Person("Anuj");
console.log(window.name); // ❌ Global pollution
```

### 📌 this Inside Constructor:
- this refers to the object being created.

- Every call to constructor returns a new instance.

- Use instanceof to check instance identity.


### 🧪 Interview Tip:
"Constructor function ka this naya object refer karta hai jo new keyword se banta hai."

