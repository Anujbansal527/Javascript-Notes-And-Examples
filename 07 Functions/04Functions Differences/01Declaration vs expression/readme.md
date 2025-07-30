 # 🔍 Function Declaration vs Function Expression

JavaScript me functions ko likhne ke 2 major tarike hote hain:

---

### 🔹 Function Declaration
```js
function greet() {
  console.log("Hello from Declaration");
}
greet(); // ✅ Works even before the definition
```
### 🔑 Characteristics:
Function ko directly function keyword ke saath define karte ho.

Hoisting ke wajah se aap function ko uske pehle hi call kar sakte ho.

Named function hoti hai.

### 🔹 Function Expression
```js
const greet = function () {
  console.log("Hello from Expression");
};
greet(); // ✅ Works only after declaration
```
### 🔑 Characteristics:
Function ko variable me assign kiya jata hai.

Hoisting me function ka body nahi aata, only variable hoist hota hai as undefined.

Anonymous ya named dono expression ho sakti hai.

### ❌ Difference in Hoisting
```js
greet();  // ❌ Error: Cannot access 'greet' before initialization
const greet = function () { };
```
```js
greet();  // ✅ Works
function greet() { }
```

### 📊 Summary Table
| Feature                 | Function Declaration | Function Expression        |
| ----------------------- | -------------------- | -------------------------- |
| Syntax                  | `function name() {}` | `const fn = function() {}` |
| Hoisting                | ✅ Fully hoisted      | ❌ Not hoisted (only var)   |
| Callable before define? | ✅ Yes                | ❌ No                       |
| Use in callback         | ✅ Yes                | ✅ Yes                      |
| Named/Anonymous         | Named                | Mostly anonymous           |

### 💬 Interview Q&A
| ❓ Question                                   | ✅ Tip                                              |
| -------------------------------------------- | -------------------------------------------------- |
| Can you call a function before it's defined? | Only if it's declared (not expression)             |
| What is hoisted in function expression?      | Only variable name, not the function body          |
| Which is more common in modern JS?           | Function expressions (with arrow functions)        |
| Why prefer expressions sometimes?            | Useful in conditional logic or passing as callback |

### ✅ Best Practice
Use function expressions for better modularity and scope control, especially inside closures or higher-order functions.
Use function declarations for reusable utilities.




