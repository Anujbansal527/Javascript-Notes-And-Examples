 // ✅ Basic ternary usage
let isMember = true;

let price = isMember ? "₹100" : "₹200";
console.log("Ticket Price:", price); // ✅ Output: ₹100

// ✅ Using in console.log
let marks = 75;
console.log(marks >= 60 ? "Pass" : "Fail"); // ✅ Output: Pass

// ✅ Nested ternary (⚠️ not recommended for long chains)
let score = 85;

let grade = score >= 90 ? "A" : 
             score >= 75 ? "B" :
             score >= 60 ? "C" : "F";

console.log("Grade:", grade); // ✅ Output: B

// ✅ Without assignment
let login = false;
login ? console.log("Welcome!") : console.log("Please login."); // ✅ Output: Please login.