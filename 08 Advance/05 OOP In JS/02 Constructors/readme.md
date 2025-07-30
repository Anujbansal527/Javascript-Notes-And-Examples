# 🧱 Constructor in JavaScript Classes

Constructor ek special method hota hai jo object banate waqt automatic call hota hai.

---

## 🔑 Points:

- Constructor ka naam hamesha `constructor` hi hota hai
- Ek class mein sirf ek constructor hota hai
- Agar hum nahi likhen to default constructor hota hai
- `this` keyword se current object ka reference milta hai

---

## Example:

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```
