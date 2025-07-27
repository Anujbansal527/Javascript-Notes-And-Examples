// 🔹 Microtask vs Macrotask in JavaScript

console.log("📢 Script Start");

// 🔸 Macrotask: setTimeout ek Macrotask queue me jata hai
setTimeout(() => {
  console.log("🕒 setTimeout (Macrotask)");
}, 0);

// 🔸 Microtask: Promise ka .then() callback Microtask queue me jata hai
Promise.resolve().then(() => {
  console.log("🔵 Promise 1 (Microtask)");
});

Promise.resolve().then(() => {
  console.log("🔵 Promise 2 (Microtask)");
});

console.log("📢 Script End");

/*
✅ Expected Output (Execution Order):

📢 Script Start        → Synchronous code (immediately runs)
📢 Script End          → Synchronous code continues
🔵 Promise 1 (Microtask) → Microtasks run after sync code, before Macrotasks
🔵 Promise 2 (Microtask)
🕒 setTimeout (Macrotask) → Macrotask runs at last (even with 0ms delay)
*/

// ---------------------------------------------------------------

// 💥 Bonus Example: Infinite Microtask Loop
// ❗ Yeh code microtask queue me infinite tasks daal raha hai
// ❌ Macrotask kabhi execute nahi hoga because microtask queue khatam hi nahi ho rahi

// Comment it out to test above code properly
/*
Promise.resolve().then(function chain() {
  console.log("🔁 Microtask Loop");
  Promise.resolve().then(chain); // Har bar ek nayi microtask queue me add ho rahi
});
*/

/*
🛑 Output: Console me continuously "🔁 Microtask Loop" print hoga
⚠️ Browser freeze ho sakta hai (infinite microtask queue)
*/

// 🔍 Summary:
// - Microtask: `Promise.then`, `queueMicrotask`, `MutationObserver`
// - Macrotask: `setTimeout`, `setInterval`, `setImmediate`, `requestAnimationFrame`
// - Microtasks ALWAYS run before Macrotasks after sync code
