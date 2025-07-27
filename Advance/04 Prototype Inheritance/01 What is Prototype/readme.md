# 🔹 What is Prototype?

JavaScript mein sabhi objects ka ek hidden property hota hai jise `[[Prototype]]` ya `__proto__` bolte hain.

Isse hum allow karte hain ek object ko dusre object se properties/methods inherit karne ke liye.

## ✅ Example

```js
const person = {
  greet() {
    console.log("Hello");
  }
};

const anuj = {
  name: "Anuj",
  __proto__: person
};

anuj.greet(); // "Hello"
```
Agar object mein method nahi mila, toh JS prototype ke through parent object mein dhundhta hai.
