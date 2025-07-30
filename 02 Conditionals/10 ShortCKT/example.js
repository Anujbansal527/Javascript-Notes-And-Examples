 // ✅ Short-circuit with AND (&&)
let isLoggedIn = true;

isLoggedIn && console.log("Welcome!"); // ✅ Output: Welcome!

// ✅ Short-circuit with OR (||)
let userName = "";

let finalName = userName || "Guest";
console.log("Hello,", finalName); // ✅ Output: Guest

// ✅ Return values based on truthiness
console.log(0 && "Hello");       // ✅ Output: 0 (first false)
console.log(1 && "Hello");       // ✅ Output: Hello (last true)

console.log(false || "Hi");      // ✅ Output: Hi
console.log("User" || "Guest");  // ✅ Output: User

// ✅ Use case: default function call
let show = false;

show && console.log("This won't run"); // ❌ Not printed
show || console.log("Show is false");  // ✅ Output: Show is false

// ✅ React style usage
// isAuthenticated && <Dashboard />
// !isAuthenticated && <LoginPage />