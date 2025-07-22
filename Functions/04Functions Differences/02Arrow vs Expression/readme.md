 # 🔍 Arrow Function vs Regular Function

JavaScript me 2 common tarike ke functions hote hain:  
🔹 Regular Function  
🔹 Arrow Function (ES6+)

---

## 🔹 Regular Function

```js
function sayHello(name) {
  return "Hello " + name;
}
```
✅ Characteristics:

Apna khud ka this context hota hai

arguments object ka support milta hai

Constructor ke roop me use ho sakta hai (new ke sath)

### 🔹 Arrow Function
```js
const sayHello = (name) => "Hello " + name;
```
✅ Characteristics:

Apna this nahi hota (lexical this)

arguments object nahi hota

Constructor ke roop me use nahi kar sakte (new throw karega)

### 🔁 Differences: Summary Table
| Feature             | Regular Function         | Arrow Function                      |
| ------------------- | ------------------------ | ----------------------------------- |
| `this` context      | Dynamic (`this` changes) | Lexical (`this` parent se aata hai) |
| `arguments` support | ✅ Yes                    | ❌ No                                |
| Constructor use     | ✅ Yes (`new MyFunc()`)   | ❌ No (`TypeError`)                  |
| Syntax              | Verbose                  | Concise                             |
| Hoisting            | ✅ Yes (if declared)      | ❌ No (if assigned to variable)      |
| Usage               | General-purpose          | Mostly for callbacks, one-liners    |

### 💡 Use Cases
| Use Case                      | Prefer                   |
| ----------------------------- | ------------------------ |
| Callback function             | Arrow                    |
| Method in object/class        | Regular                  |
| Constructor function          | Regular                  |
| Inside setTimeout/setInterval | Arrow (to retain `this`) |

### ⚠️ Caution: Arrow functions as methods
```js
const user = {
  name: "Anuj",
  greet: () => {
    console.log("Hello", this.name); // ❌ undefined
  }
};
```
Above this.name will be undefined because arrow function doesn't bind its own this.

### 💬 Interview Q&A
| ❓ Question                                  | ✅ Answer                    |
| ------------------------------------------- | --------------------------- |
| Does arrow function have its own `this`?    | ❌ No, inherits from parent  |
| Can we use `arguments` in arrow functions?  | ❌ No                        |
| Can we use arrow functions as constructors? | ❌ No, throws error          |
| Which one is better for callback use cases? | ✅ Arrow                     |
| Which one should be used inside objects?    | Regular (if you use `this`) |






