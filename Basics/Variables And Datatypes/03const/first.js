// ============================================
// ✅ 1. Simple Declaration
// ============================================

const name = "Anuj"; // ➔ const se variable declare kiya
console.log("Name:", name); // Output: Name: Anuj

// ❌ Reassignment not allowed
// name = "Bansal"; // ❌ TypeError: Assignment to constant variable.

// ❌ Redeclaration not allowed
// const name = "Mr. B"; // ❌ SyntaxError: Identifier 'name' has already been declared

// ============================================
// ✅ 2. Block Scope
// ============================================

console.log("\n🔹 Block Scope Example:");

if (true) {
  const city = "Indore";
  console.log("Inside block:", city); // Output: Indore
}
// console.log("Outside block:", city); // ❌ ReferenceError: city is not defined

// ============================================
// ✅ 3. Function Scope + Block Scope
// ============================================

console.log("\n🔹 Function Scope Example:");

function constExample() {
  const role = "Student";
  if (true) {
    const role = "Developer"; // ➔ Alag block ka role
    console.log("Block role:", role); // Output: Developer
  }
  console.log("Function role:", role); // Output: Student
}
constExample();

// ============================================
// ✅ 4. Hoisting (with TDZ)
// ============================================

console.log("\n🔹 Hoisting with TDZ:");

try {
  console.log(company); // ❌ ReferenceError
} catch (e) {
  console.log("Error:", e.message); // Output: Cannot access 'company' before initialization
}

const company = "OpenAI";
console.log("After declaration:", company); // Output: OpenAI

// ============================================
// ✅ 5. Arrays with const
// ============================================

console.log("\n🔹 Array with const:");

const colors = ["red", "blue"];
console.log("Colors:", colors); // Output: [ 'red', 'blue' ]

colors.push("green"); // ➔ Array ke elements change ho sakte hain
console.log("After push:", colors); // Output: [ 'red', 'blue', 'green' ]

// ❌ Reassignment not allowed
// colors = ["yellow"] // ❌ TypeError

// ============================================
// ✅ 6. Objects with const
// ============================================

console.log("\n🔹 Object with const:");

const user = {
  name: "Anuj",
  age: 22
};
console.log("User:", user); // Output: { name: 'Anuj', age: 22 }

user.age = 23; // ➔ Object ke properties change ho sakte hain
console.log("Updated Age:", user); // Output: { name: 'Anuj', age: 23 }

// ❌ Reassignment not allowed
// user = { name: "Bansal" }; // ❌ TypeError
