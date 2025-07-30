 // ⚡ IIFE (Immediately Invoked Function Expression) in JavaScript
// 🔍 Use-case: Run code immediately, create private scope, avoid global pollution

// ✅ Basic IIFE
(function () {
  console.log("👋 Hello from IIFE"); // Turant execute hoga
})();

// ✅ Arrow IIFE
(() => {
  console.log("⚡ Arrow IIFE executed!"); // Modern syntax
})();

// ✅ IIFE with parameters
(function (name) {
  console.log(`🙋 Hi ${name}, welcome!`);
})("Anuj");

// ✅ IIFE returning value
const sum = (function () {
  const a = 5, b = 10;
  return a + b; // 5 + 10 = 15
})();
console.log("Sum from IIFE:", sum); // 15

// ✅ IIFE for private scope (Closure based)
const counter = (function () {
  let count = 0; // 👀 Private variable

  return {
    increment: () => ++count,
    get: () => count
  };
})();

console.log("Counter:", counter.increment()); // 1
console.log("Counter:", counter.increment()); // 2
console.log("Current Count:", counter.get()); // 2

/* 
🌀 FLOW STEPS 

👉 Step 1: (function(){ ... })();
    - IIFE ka matlab hota hai: function define karo → turant execute karo
    - Iske liye () around function & () at end lagta hai

👉 Step 2: Arrow IIFE
    - Same kaam, bas modern arrow syntax se likha gaya hai

👉 Step 3: IIFE with parameters
    - Hum "Anuj" pass kar rahe hain function ko → wo turant execute hota hai

👉 Step 4: IIFE returning value
    - Function ke andar calculation hua
    - Uska return value directly sum variable me store ho gaya
    - Execution time pe result fix ho gaya (a + b = 15)

👉 Step 5: Private counter using IIFE
    - `count` variable sirf IIFE ke scope me exist karta hai
    - Bahar koi access nahi kar sakta directly
    - `increment()` aur `get()` sirf us scope ke andar se accessible hain
    - Yahi hota hai closure + data hiding

🧠 IIFE fayde:
✔️ Code auto-run karna ho
✔️ Global scope me variable leak na ho
✔️ Module-like private logic banana ho (jaise counter)
✔️ Closure use karna ho bina class/function export kiye

📌 Real-world use:
- Old JS me modules banane ke liye IIFE use hota tha
- Ab bhi lightweight encapsulation ke liye kaam aata hai

*/

