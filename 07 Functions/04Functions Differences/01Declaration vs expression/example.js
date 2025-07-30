 // ✅ Function Declaration Example

// 🔹 Ye function declaration hai, isko hum declaration se pehle bhi call kar sakte hain
greetDeclaration(); // Output: Hello from Declaration

function greetDeclaration() {
  console.log("Hello from Declaration");
}

// -----------------------------------------------

// ❌ Function Expression Example

// greetExpression(); // ❌ Error: Cannot access 'greetExpression' before initialization

// 🔹 Ye function expression hai, ye ek variable me store ho raha hai
const greetExpression = function () {
  console.log("Hello from Expression");
};

greetExpression(); // ✅ Output: Hello from Expression

// -----------------------------------------------

// 🔹 Expression with named function (less common)
const greetNamed = function greetAlias() {
  console.log("Named Expression");
};
greetNamed(); // ✅ Works fine
// greetAlias(); // ❌ Error: greetAlias is not defined in outer scope

// -----------------------------------------------

// 🔸 Comparison via typeof and name
console.log(typeof greetDeclaration); // function
console.log(typeof greetExpression);  // function
console.log(greetDeclaration.name);   // greetDeclaration
console.log(greetExpression.name);    // greetExpression

// -----------------------------------------------

// 📌 Interview Tip Example: Hoisting Demo
try {
  hoistTest(); // ✅ Function Declaration will run
  function hoistTest() {
    console.log("Declaration hoisted");
  }
} catch (e) {
  console.log(e);
}

try {
  hoistTestExp(); // ❌ Will throw error
  const hoistTestExp = function () {
    console.log("Expression not hoisted");
  };
} catch (e) {
  console.log("Expression Error:", e.message);
}
