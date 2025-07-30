 ### 📌 What’s the difference between a function and a method?
| Term     | Description                          |
| -------- | ------------------------------------ |
| Function | A standalone block of reusable code  |
| Method   | A function that belongs to an object |


### 🔹 Function
- Independent block of logic

- Can be declared globally or inside another function

- Doesn’t rely on an object unless explicitly passed

```js
function greet() {
  console.log("Hello from a function");
}
greet(); // Hello from a function
```

### 🔹 Method
- A function attached to an object

- Accesses this referring to the object it belongs to
```js
const person = {
  name: "Anuj",
  greet: function () {
    console.log("Hello", this.name);
  }
};

person.greet(); // Hello Anuj

```

### 🔁 Differences Table
| Feature        | Function                        | Method                      |
| -------------- | ------------------------------- | --------------------------- |
| Defined inside | Global or local scope           | Inside an object            |
| `this`         | Not bound to object             | Refers to parent object     |
| Call style     | `func()`                        | `object.method()`           |
| Use case       | Utility, computation, callbacks | Object behavior definition  |
| Reusability    | High                            | Tied to object (contextual) |


### 💬 Interview Q&A
| ❓ Question                                 | ✅ Tip                           |
| ------------------------------------------ | ------------------------------- |
| What is a method in JS?                    | A function inside an object     |
| Does a function always need an object?     | ❌ No                            |
| Can a method access `this`?                | ✅ Yes, points to its object     |
| Can a function become a method?            | ✅ Yes, if assigned to an object |
| Can a method be reused outside the object? | ✅ Yes, but `this` may be lost   |

