// 🔹 1. Parameters vs Arguments – Basic Concept

// ✅ Parameters: Function define karte waqt jo variables pass hote hain
// ✅ Arguments: Function call karte waqt jo real values pass hoti hain

function greet(name, age) { // <-- 'name' and 'age' are PARAMETERS
  console.log(`Hello ${name}, you are ${age} years old.`);
}

greet("Anuj", 23); // <-- "Anuj" and 23 are ARGUMENTS

// 🔸 Interview: Parameters vs Arguments difference?

// 🔹 2. Arguments Object (in normal functions)

// Normal function me aapko ek special object milta hai called `arguments`
function showAll() {
  console.log("arguments object:", arguments); // ✅ array-like object
}
showAll(1, 2, 3, 4);

// 🔸 Note: `arguments` object me sabhi passed arguments milte hain
// 🔸 Interview: Kya arrow function me arguments hota hai?

// 🔹 3. Arrow Function me `arguments` ❌ nahi hota
const showArgs = () => {
  // console.log(arguments); // ❌ Error: arguments is not defined
  console.log("Arrow functions don't have 'arguments' object");
};
showArgs(1, 2);

// 🔸 Solution: Use rest operator in arrow functions
const showWithRest = (...args) => {
  console.log("Arguments using rest:", args); // ✅ [1,2,3]
};
showWithRest(1, 2, 3);

// 🔹 4. Using `arguments.length` to count how many values passed
function countArgs(a, b) {
  console.log("Expected:", countArgs.length); // 🔁 Number of parameters declared
  console.log("Received:", arguments.length); // 🔁 Number of arguments passed
}
countArgs(1); // Output: Expected: 2, Received: 1

// 🔸 Interview: countArgs.length kya return karega?

// 🔹 5. Use-case: Dynamic addition using arguments
function sumAll() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  console.log("Total:", total);
}
sumAll(10, 20, 30, 40); // ✅ Output: 100

// 🔹 6. Rest parameter is modern and recommended
function sumRest(...nums) {
  let total = nums.reduce((acc, cur) => acc + cur, 0);
  console.log("Rest Total:", total);
}
sumRest(1, 2, 3, 4, 5); // ✅ Output: 15


/*
| 🔎 Concept                     | 💡 Hint                                     |
| ------------------------------ | ------------------------------------------- |
| Parameters vs Arguments        | Parameters in definition, arguments in call |
| `arguments` object             | Only in regular functions                   |
| Rest parameters `(...args)`    | Recommended for modern JS                   |
| `arguments.length`             | Total args passed                           |
| `function.length`              | Total declared parameters                   |
| Arrow function me `arguments`? | ❌ Not supported                             |
*/