 // ✅ Simple if condition example
let age = 18;

if (age >= 18) {
  console.log("Eligible for Voting"); // Output: Eligible for Voting
}

// ✅ Without curly braces (not recommended)
let temp = 35;
if (temp > 30) console.log("It's hot today!"); // Output: It's hot today!

// ✅ if with boolean
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome User!"); // Output: Welcome User!
}

// ✅ if with falsy value
let name = "";
if (name) {
  console.log("Name exists");
}
// No output, because empty string is falsy