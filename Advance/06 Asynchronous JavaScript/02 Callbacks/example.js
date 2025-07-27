// 🔹 Simple Callback Example

// 👇 Ye ek simple function hai jo kisi naam ko greet karta hai
function greet(name) {
  console.log("👋 Hello " + name);
}

// 👇 Ye function kisi naam ko input leta hai (yaha hardcoded hai)
// Aur phir callback function ko call karta hai
function askName(callback) {
  const naam = "Anuj"; // Normally user input ya API se aata
  callback(naam); // callback function ko call kiya
}

// ✅ call askName and pass greet as callback
askName(greet); // Output: 👋 Hello Anuj

// --------------------------------------------

// 🔹 Another example: setTimeout with callback

// setTimeout bhi callback ka example hai
// Ye 2 sec baad ek anonymous callback function call karega
setTimeout(function () {
  console.log("⌛ 2 seconds baad chala ye callback");
}, 2000);

// --------------------------------------------

// 🔹 Calculator with callback function

// calculator function me 3 params liye: a, b aur operation (jo ek function hoga)
// operation yaha callback hai jo add ya multiply ho sakta hai
function calculator(a, b, operation) {
  return operation(a, b); // yaha pe callback call ho raha hai
}

// 👇 callback functions: add & multiply
function add(x, y) {
  return x + y;
}
function multiply(x, y) {
  return x * y;
}

// ✅ Calling calculator with different callbacks
console.log("➕", calculator(5, 3, add));       // Output: 8
console.log("✖️", calculator(5, 3, multiply));  // Output: 15
