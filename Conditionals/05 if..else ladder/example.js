// ✅ Age group classification using ladder
let age = 30;

if (age <= 12) {
  console.log("Child");
} else if (age <= 19) {
  console.log("Teenager");
} else if (age <= 60) {
  console.log("Adult"); // ✅ Output
} else {
  console.log("Senior Citizen");
}

// ✅ Temperature-based message
let temperature = 5;

if (temperature <= 0) {
  console.log("Freezing Cold");
} else if (temperature <= 15) {
  console.log("Cold"); // ✅ Output
} else if (temperature <= 30) {
  console.log("Warm");
} else {
  console.log("Hot");
}

// ✅ Login status ladder
let status = "banned";

if (status === "active") {
  console.log("Welcome Back!");
} else if (status === "pending") {
  console.log("Please verify your email.");
} else if (status === "banned") {
  console.log("Access denied."); // ✅ Output
} else {
  console.log("Unknown status");
}