// ===== Optional Chaining (?.) =====

const user = {
  name: "Anuj",
  address: {
    city: "Indore",
    pincode: 452001,
  }
};

// 1. Safe access of existing nested property
console.log(user.address?.city); // Indore

// 2. Safe access of non-existing property
console.log(user.profile?.bio); // undefined (❌ error nahi aaya)

// 3. Access method safely
const result = user.getDetails?.(); // undefined
console.log("Method call safe:", result);

// 4. Optional chaining with arrays
const users = [{ name: "Anuj" }];
console.log(users?.[0]?.name); // Anuj
console.log(users?.[1]?.name); // undefined

// 5. Fallback of optional chaining with default
const email = user.contact?.email ?? "Not Available";
console.log(email); // Not Available

// ===== Nullish Coalescing (??) =====

// 6. Basic usage
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Guest

// 7. Difference with || operator
let score1 = 0;
let result1 = score1 || 100;  // 100 (0 is falsy)
let result2 = score1 ?? 100;  // 0 (null/undefined nahi hai)
console.log(result1); // 100
console.log(result2); // 0

// 8. With undefined
let val;
console.log(val ?? "Default"); // Default

// 9. With empty string
let text = "";
console.log(text || "Empty"); // Empty
console.log(text ?? "Empty"); // "" (null nahi hai)

// 10. Real-life example
function getUserName(user) {
  return user?.profile?.name ?? "Anonymous";
}

const u1 = { profile: { name: "Anuj" } };
const u2 = {};
console.log(getUserName(u1)); // Anuj
console.log(getUserName(u2)); // Anonymous