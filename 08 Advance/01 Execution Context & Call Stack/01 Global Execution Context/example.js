// 🔹 Global Execution Context Example

// 🧠 Memory Phase
// a -> undefined
// greet -> function() { ... }

console.log(a); // 👉 Output: undefined (kyuki hoisting hui hai)

var a = 10; // 🟢 Execution Phase: a = 10

function greet() {
  console.log("Hello Anuj!"); // ✅ Function Declaration memory me already stored
}

greet(); // 👉 Output: Hello Anuj!

// 🧠 Let and Const
// Memory phase me ye TDZ me hote hain
// console.log(b); ❌ Error: Cannot access 'b' before initialization
let b = 20;

// ✅ Global Scope me likha hua code hi GEC me execute hota hai