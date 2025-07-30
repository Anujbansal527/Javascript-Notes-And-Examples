 // ✅ Nested if example
let age = 20;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Entry Allowed ✅"); // ✅ Output
  }
}

// ✅ Role + department check
let role = "admin";
let department = "tech";

if (role === "admin") {
  if (department === "tech") {
    console.log("Grant full tech access"); // ✅
  }
}

// ✅ Bad nesting practice (too many levels)
let isLoggedIn = true;
let hasPermissions = true;
let isPremium = false;

if (isLoggedIn) {
  if (hasPermissions) {
    if (isPremium) {
      console.log("Show premium content");
    } else {
      console.log("Show normal content"); // ✅
    }
  }
}
