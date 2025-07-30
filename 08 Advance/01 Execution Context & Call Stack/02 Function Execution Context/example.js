// 🔹 Function Execution Context Example

function greetUser(username) {
  // 🧠 Memory Phase:
  // username = undefined
  // message = undefined

  var message = "Hello";
  console.log(message + " " + username); // 👉 Hello Anuj
}

// 🧠 Global Execution Context me function call
greetUser("Anuj");

// 🔁 Each call → new Function Execution Context

function add(x, y) {
  // Memory: x=undefined, y=undefined, result=undefined
  var result = x + y;
  return result;
}

var sum = add(10, 5); // 👉 Output: 15
console.log("Sum:", sum);

// 🔁 Another function call → another FEC
var sum2 = add(7, 8); // 👉 Output: 15
console.log("Sum2:", sum2);

// ✅ Function execution context stack se pop hota hai return ke baad