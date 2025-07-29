 // 🧼 Pure Function Examples in JavaScript
// 🔍 Use-case: Functional programming, clean logic, Redux reducers, unit testing

// ✅ 1. Basic Math - Pure Function
function add(a, b) {
  // 📦 Sirf input pe based output, koi external cheez nahi chhedta
  return a + b;
}
console.log("Add(2,3):", add(2, 3)); // Output: 5

// ✅ 2. Text formatter - Pure Function
function toUpper(text) {
  // 🧹 Sirf text input le raha hai aur naya uppercase version return kar raha hai
  return text.toUpperCase();
}
console.log("Upper:", toUpper("anuj")); // Output: ANUJ

// ❌ Impure Function Example (depends on outside variable)
let counter = 0;
function increment() {
  // ❌ Ye function ek global variable (counter) ko modify karta hai
  counter++; // Side effect (not allowed in pure functions)
  return counter;
}
console.log("Counter:", increment());
console.log("Counter:", increment());

// ✅ Redux-style Pure Reducer Function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      // ✅ Har baar naya state object return hota hai, bina original ko modify kiye
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const state = { count: 5 };
console.log("New State:", reducer(state, { type: "INCREMENT" })); // { count: 6 }

/*
🌀 FLOW STEPS 

👉 Step 1: add(2,3)
    - Same input hamesha same output dega
    - Koi external cheez (file, variable) affect nahi ho rahi = ✅ Pure

👉 Step 2: toUpper("anuj")
    - Ek input, predictable output, koi side-effect nahi = ✅ Pure

👉 Step 3: increment()
    - Global variable "counter" change ho raha hai = ❌ Impure
    - Output depends karta hai previous state pe

👉 Step 4: reducer(state, action)
    - Redux style mein likha gaya hai
    - State input aur action input se naya state generate hota hai
    - Original state change nahi hoti = ✅ Pure

🧠 Summary:

✔️ **Pure Functions**:
    - Same input → same output
    - No side effects (no DB calls, no file writes, no external var change)
    - Easily testable & predictable

❌ **Impure Functions**:
    - Depend ya modify karte hain global state ya external cheezein
    - Difficult to test & debug

📌 Real-world use:
- React & Redux mein har reducer function pure hona chahiye
- Testing aur reusability ke liye pure functions best practice hote hain

*/

