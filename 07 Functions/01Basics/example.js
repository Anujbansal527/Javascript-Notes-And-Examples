 // ✅ 1. No Parameters, No Return
// --> Bas ek task perform karega, value return nahi karega
function sayHi() {
  console.log("Hello Developer 👨‍💻");
}
sayHi(); // Output: Hello Developer 👨‍💻

// ✅ 2. Parameters, No Return
// --> Function me arguments bhejna hai, but kuch return nahi karega
function welcomeUser(name) {
  console.log("Welcome", name);
}
welcomeUser("Anuj"); // Output: Welcome Anuj

// ✅ 3. No Parameters, With Return
// --> Function kuch return karega, but koi input nahi lega
function getCurrentYear() {
  return 2025;
}
console.log("Year:", getCurrentYear()); // Output: Year: 2025

// ✅ 4. Parameters, With Return
// --> Function input bhi lega aur result return bhi karega
function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 3);
console.log("Multiplication:", result); // Output: 15

// ✅ Default Return (undefined)
// Agar koi return na ho, to by default undefined return karta hai
function test() {
  console.log("Test function");
}
console.log("Return value:", test()); // Output: Test function, Return value: undefined

// ✅ Function with multiple returns (using object or array)
function getUserData() {
  return {
    name: "Anuj",
    age: 23
  };
}
console.log(getUserData()); // Output: { name: 'Anuj', age: 23 }