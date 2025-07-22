# 🔀 JavaScript Functions: Key Differences

Is module me hum functions ke major variations aur unke beech differences ko detail me compare karenge — with **real examples**, **interview questions**, and **conceptual clarity**.

---

## 📘 Topics Covered

| 🔢 | 📁 Files                             | 📌 Topic Description                              |
|----|--------------------------------------------|--------------------------------------------------|
| 1. | `01 declaration vs expression.*`           | Declaration vs Expression function               |
| 2. | `02 arrow vs regular.*`                    | Arrow vs Regular functions (with `this` context) |
| 3. | `03 function vs method.*`                  | Function vs Method (how they behave differently) |
| 4. | `04 call vs apply vs bind.*`               | call() vs apply() vs bind() in function context  |

---

## 📚 Interview Questions & Tips

| ❓ Question                                             | ✅ Answer Summary |
|--------------------------------------------------------|------------------|
| What is a function declaration?                        | Function defined with `function name() {}` syntax |
| What is a function expression?                         | Function assigned to a variable (`const x = function(){}`) |
| Can you call function before it's defined?             | ✅ Declaration — Yes (hoisted), ❌ Expression — No |
| What is the difference between arrow and regular fn?   | Arrow: no own `this`, no `arguments` object       |
| Can you explain bind, call, and apply difference?      | All change function's `this`, syntax is different |
| Function vs Method in JavaScript?                      | Method is a function inside object (with context) |
| When should you use `bind()` instead of `call()`?      | When you want to **permanently bind** a function  |

---

## 🔍 Keywords to Remember

- **Hoisting** – Only function declarations get hoisted completely
- **`this` keyword** – Changes meaning based on arrow/regular/method
- **First-class functions** – Functions can be passed/returned
- **Execution context** – Important for call/apply/bind behavior
- **Binding** – How `this` gets linked to a function/object

---

