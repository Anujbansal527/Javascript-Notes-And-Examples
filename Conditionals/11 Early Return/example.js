 // ✅ Early return example
function checkUser(role) {
  if (role !== "admin") {
    return "Access Denied"; // ✅ Early exit
  }

  // Only runs if role is admin
  return "Welcome Admin";
}

console.log(checkUser("editor")); // ✅ Output: Access Denied
console.log(checkUser("admin"));  // ✅ Output: Welcome Admin

// ✅ Early return for validation
function calculateDiscount(price) {
  if (price <= 0) {
    return "Invalid Price";
  }

  let discount = price * 0.1;
  return `Discount is ₹${discount}`;
}

console.log(calculateDiscount(-100)); // ✅ Output: Invalid Price
console.log(calculateDiscount(500));  // ✅ Output: Discount is ₹50

// ✅ Without early return (👎 not recommended)
function oldCheck(num) {
  let result;
  if (num > 10) {
    result = "Greater";
  } else {
    result = "Lesser or Equal";
  }
  return result;
}

// ✅ With early return (clean)
function newCheck(num) {
  if (num <= 10) return "Lesser or Equal";
  return "Greater";
}