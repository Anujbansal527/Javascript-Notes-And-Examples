# 🔹 Prototype & Inheritance – Interview Questions (with Hinglish Explanations)

Yeh section sabse important hai for interviews and tricky MCQs.

---

## 🔸 Q1: `__proto__` vs `prototype` kya difference hai?

| Feature     | `__proto__`                            | `prototype`                            |
|-------------|----------------------------------------|-----------------------------------------|
| Belongs to  | Object instance                        | Constructor function                    |
| Type        | Hidden reference                      | Property of function                    |
| Purpose     | Prototype chain link                  | Shared methods & inheritance structure  |
| Accessed by | `obj.__proto__`                       | `Func.prototype`                        |

---

## 🔸 Q2: How does the prototype chain work?

- JS engine pehle object mein property dhundhta hai
- Agar nahi milti to `__proto__` (parent) mein jaata hai
- Yeh tab tak chalta hai jab tak:
  - Property mil jaaye  
  - Ya `null` tak pahuch jaaye

---

## 🔸 Q3: What is the output of this?

```js
function A() {}
A.prototype.sayHi = function () {
  console.log("Hi");
};

const obj = new A();
obj.sayHi(); // ??
```
✅ Output: "Hi"
⏩ Reason: sayHi is present in A.prototype, and obj.__proto__ points to it.

### 🔸 Q4: What happens if we override prototype?
```js
function A() {}
A.prototype = {
  greet() {
    return "Hello";
  }
};
const a1 = new A();
console.log(a1.greet()); // ??
```
✅ Output: "Hello"

⏩ But remember: A.prototype.constructor ab A nahi balki Object ho gaya hai.
Fix: A.prototype.constructor = A

### 🔸 Q5: True or False?
```js
class User {}
console.log(typeof User); // ??
```
✅ Answer: function

Reason: Class is syntactic sugar for constructor function.

### 🔸 More Practice Qs:
- Object.create() kya return karta hai?

- constructor property kya hota hai?

- new keyword se kya kya hota hai internally?

- Class ke methods kaha store hote hain?

- Kaise pata kare object ka prototype kya hai?

