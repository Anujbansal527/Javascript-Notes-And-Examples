### 🧠 JavaScript Objects – Interview Q&A
🔹 Common Questions
| ❓ Question                                 | ✅ Tip                                                          |
| ------------------------------------------ | -------------------------------------------------------------- |
| What is an object?                         | Collection of key-value pairs                                  |
| How do you access values in an object?     | Using dot `.` or bracket `[]` notation                         |
| Can object keys be anything?               | Internally, all keys become strings                            |
| How to check if a key exists in an object? | Use `in` or `hasOwnProperty()`                                 |
| How to iterate over an object?             | Use `for...in` or `Object.entries()`                           |
| Can we clone an object?                    | Yes – using `spread`, `assign`, `JSON`, or `structuredClone()` |
| Difference between shallow & deep copy?    | Shallow → top-level only; Deep → nested objects too            |
| How to merge two objects?                  | Use `{ ...obj1, ...obj2 }`                                     |
| Can objects be frozen or sealed?           | Yes – use `Object.freeze()` and `Object.seal()`                |
| How to convert an object to array?         | Use `Object.keys()`, `Object.values()`, or `Object.entries()`  |
| Can objects have methods?                  | Yes – you can define functions as properties                   |

🧪 Real-World Coding Examples:
| Task                          | Logic / Methods                                                     |
| ----------------------------- | ------------------------------------------------------------------- |
| Clone object (shallow)        | `...spread`, `Object.assign()`                                      |
| Clone object (deep)           | `structuredClone()` or `JSON.parse(JSON.stringify())`               |
| Merge objects                 | `{...obj1, ...obj2}`                                                |
| Check if object is empty      | `Object.keys(obj).length === 0`                                     |
| Convert object to array       | `Object.entries(obj)`                                               |
| Count keys in object          | `Object.keys(obj).length`                                           |
| Iterate through keys & values | `for...in` or `Object.entries(obj).forEach()`                       |
| Delete a key                  | `delete obj.keyName`                                                |
| Freeze and seal               | `Object.freeze(obj)`, `Object.seal(obj)`                            |
| Nested object traversal       | Recursively access properties                                       |
| Compare two objects           | Use `JSON.stringify()` for shallow; deep compare needs custom logic |

❗ Pitfalls & Mistakes to Avoid
Don’t use == or === to compare objects directly
Shallow copy doesn’t work for nested structures
Avoid mutating original objects unless needed
Object keys with numeric strings behave like strings
Avoid sparse structures or hidden prototype chain hacks unless advanced use

🔥 Common Code Snippet Review
```js
const obj = { name: "Anuj", age: 23 };

// Accessing
console.log(obj.name);       // Dot notation
console.log(obj["age"]);     // Bracket notation

// Check property exists
console.log("name" in obj);              // true
console.log(obj.hasOwnProperty("name")); // true

// Object length
console.log(Object.keys(obj).length); // 2

// Looping
for (let key in obj) {
  console.log(key, obj[key]);
}

Object.entries(obj).forEach(([k, v]) => console.log(k, v));
```
💼 Top Interview Coding Tasks
| Task                                      | Description                            |
| ----------------------------------------- | -------------------------------------- |
| Shallow vs Deep Copy                      | Explain and implement both             |
| Frequency Counter                         | Count how many times each item appears |
| Convert array of objects to single object | Use `reduce()`                         |
| Group data by property                    | Use `reduce()` or `forEach()`          |
| Filter object by values                   | Loop and apply condition               |
| Merge arrays of objects by ID             | Use Map + merge logic                  |
| Find common keys/values                   | Compare keys with intersection         |
| Object flattening                         | Recursively flatten nested object      |
| Deep equality check                       | Use recursive logic to compare deeply  |
| Convert nested object to query string     | Custom recursive function              |






