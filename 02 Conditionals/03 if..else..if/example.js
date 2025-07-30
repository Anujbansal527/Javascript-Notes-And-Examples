 // ✅ Grade system using if...else if
let marks = 82;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B"); // ✅ Output
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// ✅ Traffic light example
let signal = "yellow";

if (signal === "red") {
  console.log("Stop");
} else if (signal === "yellow") {
  console.log("Get Ready"); // ✅ Output
} else if (signal === "green") {
  console.log("Go");
} else {
  console.log("Invalid Signal");
}

// ✅ Login roles
let role = "editor";

if (role === "admin") {
  console.log("Full access");
} else if (role === "editor") {
  console.log("Edit access"); // ✅
} else if (role === "viewer") {
  console.log("Read-only access");
} else {
  console.log("Unknown role");
}