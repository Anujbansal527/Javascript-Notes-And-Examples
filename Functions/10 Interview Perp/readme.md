# 🔹 JavaScript Interview Theory Questions (With Hinglish Explanation)

---

### ✅ Q1. Difference between function declaration vs function expression?

- 🔹 Function Declaration: `function greet() {}` → Hoisted
- 🔹 Function Expression: `const greet = function() {}` → Not Hoisted

🧠: Declaration top pe chala jaata hai file ke, expression runtime pe execute hota hai.

---

### ✅ Q2. What is a closure?

- 🔹 A function that remembers variables from its lexical scope even when executed outside that scope.

🧠: Function ke andar ke variables ko yaad rakhta hai even jab woh function outer scope me chala jaye.

---

### ✅ Q3. What is the difference between `this` in arrow vs regular functions?

- 🔹 Arrow function → `this` is lexical (outer scope)
- 🔹 Regular function → `this` depends on how it’s called

🧠: Arrow ka `this` fixed hota hai, regular ka `this` dynamic hota hai.

---

### ✅ Q4. Can arrow functions be used as constructors?

- ❌ No. Arrow functions cannot be used with `new` keyword.

🧠: `new ArrowFunc()` likhoge to error aayega, kyunki woh constructor nahi ban sakti.

---

### ✅ Q5. What is the difference between parameters and arguments?

- 🔹 Parameters: Variables in function definition
- 🔹 Arguments: Actual values passed during call

🧠: Function define karte time jo naam dete ho → parameter. Call karte waqt jo value dete ho → argument.

---

### ✅ Q6. What is recursion?

- 🔹 A function that calls itself until a base case is reached

🧠: Ek function jo khud ko call karta hai jab tak ek stop condition (base case) milti hai.

---

### ✅ Q7. What is the difference between function and method?

- 🔹 Function: Standalone
- 🔹 Method: Function inside an object

🧠: Method → object ka function hota hai. Baaki sab functions standalone hote hain.

---

### ✅ Q8. What is hoisting?

- 🔹 JavaScript moves declarations (not initializations) to the top of their scope during compile phase.

🧠:1 Pehle JS sab function aur var declare kar leta hai file ke top pe (lekin unki values assign nahi karta)

---

