# 🔁 Getters & Setters in JavaScript

Getters aur Setters JavaScript mein **controlled access** dene ke liye use hote hain — bina directly property ko access/edit kare.

---

## 🧠 Why Use?

- Validation apply karna
- Internally private variable ko read/write karna
- Secure and maintainable code likhna

---

## 📘 Syntax:

```js
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name; // read access
  }

  set name(newName) {
    if (newName.length > 0) {
      this._name = newName;
    }
  }
}
```

### 🔍 Note:
- get and set methods ko call karte waqt ()` nahi lagte.

- Best practice: use underscore _var for internal storage.

### 🆚 Get/Set vs Direct Access
| Action         | Direct Access  | Getter/Setter  |
| -------------- | -------------- | -------------- |
| Read           | obj.prop       | obj.prop       |
| Write          | obj.prop = val | obj.prop = val |
| Add Validation | ❌ No           | ✅ Yes          |

### ⚠️ Important:
You can also use get and set with computed properties and private fields (#) for extra control.

### ✅ Real Example:
```js
class BankAccount {
  constructor(owner, balance) {
    this._owner = owner;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount > 0) {
      this._balance = amount;
    }
  }
}
```