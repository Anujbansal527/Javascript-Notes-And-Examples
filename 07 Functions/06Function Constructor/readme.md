 # 📘 Function Constructor in JavaScript

---

## 🔹 What is a Function Constructor?
JavaScript me aap `Function` constructor ka use karke naya function bana sakte ho dynamically. 

Ye bilkul aise hi hota hai jaise aap `new Function()` likhkar function ko banate ho runtime pe.

---

## 🔸 Syntax:
```js
const myFunc = new Function('arg1', 'arg2', 'return arg1 + arg2');
console.log(myFunc(2, 3)); // Output: 5
```

---

## 🔸 Example:
```js
const greet = new Function('name', 'return "Hello, " + name');
console.log(greet("Anuj")); // Hello, Anuj
```

---

## 🔸 Explanation:
- Ye syntax ek string accept karta hai arguments aur body ke roop me.
- Runtime pe JavaScript engine usko ek naya function object me convert karta hai.
- Har baar jab aap `new Function()` likhte ho, to wo ek NAYA execution context create karta hai.

---

## ⚠️ Drawbacks of Function Constructor:
| 🚫 Problem | ❌ Explanation |
|-----------|----------------|
| Performance issue | Function dynamically compile hota hai so thoda slow hota hai |
| Security Risk | String ke form me input hone ke kaaran XSS (cross-site scripting) jaise attack ho sakte hain |
| No Closure | Ye surrounding lexical scope ko access nahi kar sakta (unlike regular functions) |

---

## ✅ When to Use?
- Jab aapko **dynamically** user se input leke code generate karna ho (very rare case)
- Mostly **not recommended** in practice due to security and performance issues

---

## 💬 Interview Questions:

| ❓ Question | ✅ Answer |
|------------|----------|
| What is Function Constructor? | A way to define a function dynamically using `new Function()` |
| Can it access outer lexical scope? | ❌ No |
| Is it secure to use? | ❌ No, it can be dangerous if not handled properly |
| Is it same as regular function? | ❌ Not exactly. Function body is evaluated at runtime as string |
| Where is it used? | Rarely in dynamic code evaluation or interpreters |

---

## 🔁 Comparison
| Regular Function | Function Constructor |
|------------------|-----------------------|
| Lexical scope access | ❇️ Yes | ❌ No |
| Safer to use | ✅ Yes | ⚠️ Risky |
| Static syntax | ✅ Yes | ❌ Evaluated at runtime |
| Performance | Faster | Slower |



