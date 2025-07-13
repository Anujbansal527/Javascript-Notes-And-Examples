// ============================================
// ✅ 1. Simple Declaration, Redeclaration & Reassignment
// ============================================

var name = "Anuj"; // ➔ Ek variable 'name' declare kiya var se
console.log("Name:", name); // Output: Name: Anuj

// ✅ Redeclaration – Possible with var
var name = "Bansal"; // ➔ Dobara same naam se declare kiya, koi error nahi
console.log("Updated Name:", name); // Output: Updated Name: Bansal

// ✅ Reassignment – Possible
name = "Mr. B"; // ➔ Nayi value assign ki bina dobara declare kiye
console.log("Reassigned Name:", name); // Output: Reassigned Name: Mr. B

// ============================================
// ✅ 2. Hoisting
// ============================================

console.log("\n🔹 Hoisting Example:");

console.log("Greeting before declaration:", greeting); 
// Output: undefined
// ➔ JavaScript execution se pehle, 'var greeting;' upar move ho jata hai
// ➔ But value assign nahi hoti, sirf declaration hoti hai
// ➔ Isliye undefined aata hai, error nahi

var greeting = "Hello!"; // ➔ Ab greeting me value assign ho rahi hai

console.log("Greeting after declaration:", greeting); 
// Output: Hello!

/*
  🔍 JS internally isko aise treat karta hai:

  var greeting;                  // Declaration hoisted at the top
  console.log(greeting);         // undefined (default value for uninitialized var)
  greeting = "Hello!";           // Assignment happens here
*/

// ============================================
// ✅ 3. Function Scope
// ============================================

console.log("\n🔹 Function Scope Example:");

function testFunctionScope() {
  var city = "Indore"; // ➔ Function scope me var declare kiya
  if (true) {
    var city = "Bhopal"; // ➔ Same naam se overwrite ho gaya (function ke andar hi scope hai)
    console.log("Inside block:", city); // Output: Bhopal
  }
  console.log("Outside block:", city); // Output: Bhopal
}
testFunctionScope();

// ============================================
// ❗ 4. Not Block Scoped
// ============================================

console.log("\n🔹 Block Scope Issue:");

if (true) {
  var status = "active"; // ➔ if block ke andar declare kiya
}
console.log("Outside block:", status); 
// Output: active
// ➔ var block scope follow nahi karta, isliye bahar bhi accessible hai

// ============================================
// ✅ 5. Arrays with var
// ============================================

console.log("\n🔹 Array Example:");

var fruits = ["apple", "banana"]; // ➔ var se array banaya
console.log("Fruits:", fruits); // Output: [ 'apple', 'banana' ]

fruits.push("mango"); // ➔ array me naya element add kiya
console.log("After push:", fruits); // Output: [ 'apple', 'banana', 'mango' ]

var fruits = ["grape"]; // ➔ var se dobara declare bhi kar sakte ho
console.log("After redeclare:", fruits); // Output: [ 'grape' ]

// ============================================
// ✅ 6. Objects with var
// ============================================

console.log("\n🔹 Object Example:");

var user = {
  name: "Anuj",
  age: 22
};
console.log("Original User:", user); 
// Output: { name: 'Anuj', age: 22 }

user.age = 23; // ➔ Object ke property ko change karna allowed hai
console.log("Updated Age:", user); 
// Output: { name: 'Anuj', age: 23 }

var user = {
  name: "Bansal",
  age: 30
}; // ➔ Same naam se object ko dobara declare kiya
console.log("Redeclared User:", user); 
// Output: { name: 'Bansal', age: 30 }