// ============================================
// ✅ 1. Simple Declaration, Reassignment
// ============================================

let city = "Indore"; // ➔ let se variable declare kiya
console.log("City:", city); // Output: City: Indore

// ✅ Reassignment – Allowed
city = "Bhopal";
console.log("Updated City:", city); // Output: Updated City: Bhopal

// ❌ Redeclaration – Not allowed with let
// let city = "Delhi"; // ❌ SyntaxError: Identifier 'city' has already been declared

// ============================================
// ✅ 2. Block Scope
// ============================================

console.log("\n🔹 Block Scope Example:");

if (true) {
  let state = "MP"; // ➔ Block ke andar declare hua
  console.log("Inside block:", state); // Output: MP
}
// console.log("Outside block:", state); // ❌ ReferenceError: state is not defined

// ➔ let block scope follow karta hai, bahar access nahi kar sakte

// ============================================
// ✅ 3. Function Scope (Also supports block scope)
// ============================================

console.log("\n🔹 Function Scope with Block Isolation:");

function testLetScope() {
  let role = "Student";
  if (true) {
    let role = "Developer"; // ➔ New block scope
    console.log("Block role:", role); // Output: Developer
  }
  console.log("Function role:", role); // Output: Student
}
testLetScope();

// ============================================
// ✅ 4. Hoisting (but TDZ - Temporal Dead Zone)
// ============================================

console.log("\n🔹 Hoisting Example with let:");

try {
  console.log("Before declaration:", country); // ❌ ReferenceError
} catch (err) {
  console.log("Error:", err.message); // Output: Cannot access 'country' before initialization
}

let country = "India"; // ➔ Yahan se variable accessible hoga
console.log("After declaration:", country); // Output: India

/*
  🔍 Explanation:
  let variables bhi hoist hote hain lekin "TDZ" me rehte hain
  TDZ = Temporal Dead Zone (jahaan variable exist karta hai but accessible nahi hota)
*/

// ============================================
// ✅ 5. Arrays with let
// ============================================

console.log("\n🔹 Array Example with let:");

let colors = ["red", "blue"];
console.log("Colors:", colors); // Output: [ 'red', 'blue' ]

colors.push("green");
console.log("After push:", colors); // Output: [ 'red', 'blue', 'green' ]

// ❌ Redeclaration not allowed
// let colors = ["yellow"]; // ❌ SyntaxError

// ============================================
// ✅ 6. Objects with let
// ============================================

console.log("\n🔹 Object Example with let:");

let user = {
  name: "Anuj",
  age: 22
};
console.log("User:", user); // Output: { name: 'Anuj', age: 22 }

user.age = 23;
console.log("Updated Age:", user); // Output: { name: 'Anuj', age: 23 }

// ❌ Redeclaration not allowed
// let user = { name: "Bansal" }; // ❌ SyntaxError
