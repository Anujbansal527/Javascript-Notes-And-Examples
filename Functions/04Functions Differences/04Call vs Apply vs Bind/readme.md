### 🧠 Purpose of call, apply, and bind:
All three are used to set the this context of a function and optionally pass arguments.

### 🔸 call() – Immediate invocation with arguments listed one by one
```js
function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}

const person = { name: "Anuj" };
greet.call(person, "Hello", "!"); // Hello Anuj!

```

### 🔸 apply() – Immediate invocation with arguments as an array
```js
greet.apply(person, ["Hi", "!!"]); // Hi Anuj!!
```

### 🔸 bind() – Returns a new function with bound context (not invoked immediately)
```js
const sayHello = greet.bind(person, "Hey", "!!!");
sayHello(); // Hey Anuj!!!
```

### 🔁 Difference Table
| Method    | Invokes immediately? | Arguments       | Returns a new function? |
| --------- | -------------------- | --------------- | ----------------------- |
| `call()`  | ✅ Yes                | Separate values | ❌ No                    |
| `apply()` | ✅ Yes                | Array           | ❌ No                    |
| `bind()`  | ❌ No                 | Separate values | ✅ Yes                   |


### 📌 Use Cases
- Borrowing methods from another object

- Setting this explicitly in event handlers

- Partial application using bind()

### 💬 Interview Q&A
| ❓ Question                                 | ✅ Tip                                  |
| ------------------------------------------ | -------------------------------------- |
| What is the use of `call()`?               | Invoke function with different `this`  |
| What is the difference between call/apply? | `apply()` takes array as args          |
| What is bind?                              | Returns new function with bound `this` |
| Can bind be chained?                       | Yes, but first bind sticks             |
| Does bind execute the function?            | ❌ No, it only returns new function     |




