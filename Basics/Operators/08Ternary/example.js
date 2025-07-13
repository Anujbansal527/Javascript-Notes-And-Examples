// ===================================
// 🎯 Ternary Operator Examples
// ===================================

let age = 17;

let message = (age >= 18) ? "You can vote" : "You are underage";
console.log("Message:", message); // You are underage

// Nested ternary
let marks = 82;
let result = (marks > 90) ? "Excellent" :
             (marks > 75) ? "Very Good" :
             (marks > 60) ? "Good" : "Needs Improvement";
console.log("Result:", result); // Very Good

// Short-circuit example
let isLoggedIn = false;
let access = isLoggedIn ? "Dashboard" : "Login First";
console.log("Access:", access); // Login First

// Use in return statement
function getRole(role) {
  return role === "admin" ? "Full Access" :
         role === "user" ? "Limited Access" :
         "No Access";
}
console.log("User Role:", getRole("user")); // Limited Access