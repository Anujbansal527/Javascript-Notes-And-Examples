// 🔹 Part 1: Event Loop with Microtask vs Macrotask

// 👉 Synchronous code sabse pehle chalta hai
console.log("🟢 Start");

// 👉 setTimeout ek Macrotask hai, jo Web APIs me chala jata hai
setTimeout(() => {
  console.log("🕒 setTimeout callback"); // Macrotask → baad me chalta hai
}, 0);

// 👉 Promise .then() ek Microtask hai, jo sab Macrotasks se pehle chalta hai
Promise.resolve().then(() => {
  console.log("🔵 Promise .then()"); // Microtask → Macrotask se pehle
});

console.log("🟢 End");

// ✅ Output:
// 🟢 Start
// 🟢 End
// 🔵 Promise .then()
// 🕒 setTimeout callback

// 🧠 Explanation:
// JS Event Loop me pehle Microtask Queue run hoti hai (Promises etc.)
// Uske baad Macrotask Queue (setTimeout, setInterval, etc.)

// -------------------------------------------------------------------

// 🔹 Part 2: Blocking Code Example

// 👉 Yeh function CPU ko busy rakh kar "call stack" ko block karta hai
function blockForSeconds(sec) {
  let start = Date.now();
  while (Date.now() - start < sec * 1000) {
    // Busy wait → kuch aur kaam nahi hoga is dauraan
  }
}

console.log("⏱ Start");

// 👉 setTimeout Macrotask hai, jo 1 second ke baad queue me chala jata hai
setTimeout(() => {
  console.log("✅ Timer callback"); // Yeh tab tak nahi chalega jab tak stack free na ho
}, 1000);

// 👉 Yeh blocking function 3 seconds tak sab kuch rok dega
blockForSeconds(3); // ❌ Blocks everything for 3 sec

console.log("🏁 End");

// ✅ Output:
// ⏱ Start
// 🏁 End
// ✅ Timer callback (late due to blocking)

// 🧠 Explanation:
// JS single-threaded hoti hai, agar call stack busy hai (like in while loop), 
// toh setTimeout ka callback delay ho jaata hai — even after its timer expires.
