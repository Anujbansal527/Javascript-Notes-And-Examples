// 🔹 Sync Example
// ✅ JavaScript ek single-threaded, synchronous language hai
// Line-by-line top to bottom execute hota hai

console.log("🔹 Sync Example:");
console.log("Start");   // Step 1
console.log("Middle");  // Step 2
console.log("End");     // Step 3

// Output:
// 🔹 Sync Example:
// Start
// Middle
// End

// ---------------------------------------------

// 🔹 Async Example (setTimeout)
// ✅ Yahan hum async ka concept dikhate hain setTimeout ke through
// setTimeout ek browser/Web API function hai jo callback queue me function bhejta hai after delay

console.log("\n🔹 Async Example:");
console.log("Start"); // Step 1

setTimeout(() => {
  // ✅ Ye 2 second ke delay ke baad chalega
  console.log("Async ka output - 2 sec ke baad"); // Step 3 (after delay)
}, 2000);

console.log("End");   // Step 2

// Expected Output:
// 🔹 Async Example:
// Start
// End
// (after
