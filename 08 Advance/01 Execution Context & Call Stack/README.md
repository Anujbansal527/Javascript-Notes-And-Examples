# 🔹 Execution Context and Call Stack (JS Behind the Scenes)

JavaScript engine code ko do phase me run karta hai:

## 📌 1. **Memory Allocation Phase** (Creation Phase)
- Variables, functions ko memory allocate hoti hai
- `var` => `undefined`
- `let` and `const` => in **Temporal Dead Zone**
- Function declarations => pura function memory me chala jata hai

## 📌 2. **Execution Phase**
- Expressions execute hoti hain
- Actual value assign hoti hai variables ko

---

## 🔄 Flow of JavaScript Execution:
1. Global Execution Context banta hai (1 baar hi banta hai)
2. Har baar function call hone pe naya Execution Context banta hai
3. Sab Execution Contexts `Call Stack` me push/pop hote hain

---

## 📚 Key Concepts:

| Concept                         | Description |
|-------------------------------|-------------|
| Global Execution Context       | Sabse pehle banta hai, global scope me code run karta hai |
| Function Execution Context     | Har function call pe naya context |
| Lexical Environment            | Jaha pe code likha gaya hai, uska outer environment |
| Scope Chain                    | Nested scopes ko access karne ka system |
| Hoisting                       | Variables/functions ka top pe le jana before code run |
| Call Stack                     | JS execution ka Stack structure (LIFO) |

---

## 📊 Flowchart:
Run JS File
↓
Memory Phase (Allocate Memory)
↓
Execution Phase (Line by Line)
↓
Function Call → Push New Execution Context
↓
Function End → Pop from Stack


---

## 📌 Interview Pointers:

- JS me execution synchronous hota hai (ek line at a time)
- JS single-threaded hai
- Hoisting `var` ke sath hota hai `undefined` ke sath, `let`/`const` ke sath nahi

---



