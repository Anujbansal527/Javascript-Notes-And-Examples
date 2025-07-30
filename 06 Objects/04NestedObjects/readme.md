# 🧩 Nested Objects in JavaScript

Nested objects are objects **inside other objects**. They allow you to represent **hierarchical or structured data** like users, addresses, orders, etc.

---

## 🔹 Example of Nested Object

```js
const person = {
  name: "Anuj",
  address: {
    street: "MG Road",
    city: "Indore",
    country: {
      name: "India",
      code: "IN"
    }
  }
};
```

### 🧪 Accessing Nested Properties
```js
console.log(person.address.city);         // Indore
console.log(person.address.country.name); // India
```
### 🔸 Optional Chaining (?.)
Avoids runtime errors if a nested object/property doesn’t exist.
```js
console.log(person?.address?.zip); // undefined (no error)
```

### 🔸 Nested Destructuring
```js
const { address: { city, country: { code } } } = person;
console.log(city); // Indore
console.log(code); // IN
```

### 🧠 Interview Notes
| Question                                       | Tip/Answer                                      |
| ---------------------------------------------- | ----------------------------------------------- |
| How do you access nested object properties?    | Dot notation or destructuring                   |
| What is optional chaining?                     | `?.` operator to avoid errors on undefined/null |
| Is destructuring supported at multiple levels? | ✅ Yes                                           |
| How to check if a deeply nested value exists?  | Use `?.` + null check                           |

### 🔁 Iterating Over Nested Structures
Use recursion or nested loops if objects are deeply nested.
```js
function printNested(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      printNested(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}
```

### 🔒 Best Practices
Use optional chaining (?.)
Use typeof, Array.isArray() checks
Avoid too deep nesting if possible (flatten or restructure)


