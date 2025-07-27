JavaScript mein jab hum kisi property ya method ko access karte hain, toh engine us property ko **direct object** mein search karta hai.

Agar nahi milti, toh wo check karta hai `[[Prototype]]` yaani `__proto__` mein.

Yahi chain tab tak chalte rehti hai jab tak:
- Property mil jaaye
- Ya `null` (top of prototype chain) pe pahunch jaaye

---

## ✅ Visual Flow

🟢 `anuj` --> 🔵 `person` --> 🔷 `Object.prototype` --> 🔴 `null`

---

## ✅ Real Example:

```js
const grandParent = {
  greet() {
    console.log("Hello from grandparent");
  }
};

const parent = Object.create(grandParent);
parent.sayHi = function () {
  console.log("Hi from parent");
};

const child = Object.create(parent);
child.name = "Anuj";

child.greet(); // 🔄 JS Engine: child ❌ → parent ❌ → grandParent ✅
child.sayHi(); // 🔄 child ❌ → parent ✅
```

### 🔎 Useful Tip:
```js
Object.getPrototypeOf(child); // shows parent object
```