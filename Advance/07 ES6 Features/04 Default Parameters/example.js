// 1. Basic Example
function greet(name = "Anuj") {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Anuj!
greet("Bansal"); // Hello, Bansal!

// 2. Before ES6 - Old Way
function oldGreet(name) {
  name = name || "Default";
  console.log(`Hi, ${name}`);
}
oldGreet(); // Hi, Default

// 3. Multiple default params
function register(user = "Guest", age = 18) {
  console.log(`User: ${user}, Age: ${age}`);
}
register(); // User: Guest, Age: 18
register("Anuj", 25); // User: Anuj, Age: 25

// 4. Default param as expression
function generateID(id = Math.floor(Math.random() * 10000)) {
  console.log("Generated ID:", id);
}
generateID(); // Random ID
generateID(101); // 101

// 5. Using earlier parameter as default
function total(a = 1, b = a * 2) {
  console.log(`a: ${a}, b: ${b}`);
}
total(); // a: 1, b: 2
total(3); // a: 3, b: 6

// 6. ❌ Wrong Order (Avoid this mistake)
function wrong(a = 10, b) {
  console.log(a, b);
}
wrong(); // a = 10, b = undefined (not good practice)

// 7. With destructuring
function displayUser({ name = "Anuj", role = "User" } = {}) {
  console.log(`Name: ${name}, Role: ${role}`);
}
displayUser(); // Name: Anuj, Role: User
displayUser({ name: "Bansal" }); // Name: Bansal, Role: User

// 8. Arrow function with default
const show = (msg = "No message") => console.log(msg);
show(); // No message
show("Hello"); // Hello