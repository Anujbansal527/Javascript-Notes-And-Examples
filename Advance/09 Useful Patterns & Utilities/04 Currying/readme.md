 # 🧩 Currying in JavaScript

---

## 🔰 What is Currying?

> Currying ek functional programming concept hai jisme ek function ke multiple arguments ko tod kar **ek-ek argument wale functions ki chain** banayi jaati hai.

Matlab:
```js
function add(a, b) { return a + b; }
// After currying:
function add(a) {
  return function(b) {
    return a + b;
  }
}
```
### 🔍 Real-World Use Cases
- 🎨 Custom greeting: greet("Hello")("Anuj")

- 💰 Tax calculation: calculateGST(18)(5000)

- 📦 Partial config: setTheme("dark")("admin")

### 🧠 Why Use Currying?
- ✅ Reusability
- ✅ Code readability
- ✅ Partial application
- ✅ Works great in functional composition

### 🔧 How Currying Works
- Pehle ek function first arg accept karta hai

- Fir woh return karta hai ek naya function jo next arg accept kare

- Jab sabhi args mil jaate hain → original logic run hoti hai

### 🧠 Flow Logic
```js
fn(a, b, c) →
    fn(a)(b)(c) → returns final output
```

### 🛠️ Manual Currying Example
```js
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
console.log(multiply(2)(5)); // 10
```

### 🛠️ Generic Curry Function
```js 
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return function (...next) {
      return curried(...args, ...next);
    };
  };
}
```



