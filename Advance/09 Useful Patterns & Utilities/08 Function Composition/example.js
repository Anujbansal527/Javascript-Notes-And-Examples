 // 🔗 Function Composition & Pipe in JavaScript
// 🔍 Use-case: Functional programming, chaining multiple single-purpose functions

// ✅ Basic single-responsibility functions
const double = (x) => x * 2;        // ➕ Double karta hai value ko
const square = (x) => x * x;        // ⏹️ Square karta hai
const subtractOne = (x) => x - 1;   // ➖ 1 minus karta hai

// ✅ Compose function (Right → Left)
const compose = (...fns) => (val) =>
  fns.reduceRight((acc, fn) => fn(acc), val);

// ✅ Pipe function (Left → Right)
const pipe = (...fns) => (val) =>
  fns.reduce((acc, fn) => fn(acc), val);

// 🎯 Compose: subtractOne(square(double(x)))
const composed = compose(subtractOne, square, double);
console.log("Compose:", composed(3)); // ((3*2)^2)-1 = 35

// 🎯 Pipe: double → square → subtractOne
const piped = pipe(double, square, subtractOne);
console.log("Pipe:", piped(3)); // ((3*2)^2)-1 = 35

/* 
🌀 FLOW STEPS 

👉 Step 1: double(3) = 6
👉 Step 2: square(6) = 36
👉 Step 3: subtractOne(36) = 35

⚙️ Compose(subtractOne, square, double)
    - Execution order: double → square → subtractOne (Right to Left)
    - So: double(3) = 6 → square(6) = 36 → subtractOne(36) = 35

⚙️ Pipe(double, square, subtractOne)
    - Execution order: double → square → subtractOne (Left to Right)
    - Same result, but flow is more natural like a pipeline

🧠 Use Cases:
✔️ Jab aapko multiple logic steps ek ke baad ek apply karne ho
✔️ Jab functions ko reusable & readable chain me likhna ho

📌 Function Composition vs Pipe:

| Feature        | compose()               | pipe()                  |
|----------------|-------------------------|--------------------------|
| Flow order     | Right → Left            | Left → Right             |
| Starts with    | Last function           | First function           |
| Syntax         | compose(f3, f2, f1)     | pipe(f1, f2, f3)         |
| Example        | f1(f2(f3(x)))           | f3(f2(f1(x)))            |

✅ Tip: Compose is more common in pure functional libraries like Redux/Redux Toolkit
✅ Tip: Pipe is more natural & readable for most devs (like data flow)

*/

