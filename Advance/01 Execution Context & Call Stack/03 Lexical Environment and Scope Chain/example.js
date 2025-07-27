// 🔹 Lexical Environment & Scope Chain Example

var name = "Anuj"; // Global scope

function greet() {
  // 🧠 Local scope of greet
  var message = "Hello";

  function sayHi() {
    // 🧠 sayHi ka apna Lexical Environment
    // Lekin message ko access kar raha hai outer (greet) scope se
    console.log(message + " " + name); // 👉 Hello Anuj
  }

  sayHi(); // Function call → Execution Context banta hai
}

greet(); // 🔁 Scope chain follow hota hai

// ✅ Scope resolution → sayHi → message (local of greet) → name (global)

// ❌ Error if variable not found in entire chain
function test() {
  console.log(notFound); // ❌ ReferenceError
}
test();