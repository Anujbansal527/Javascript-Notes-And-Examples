// 1. Simple string interpolation
let name = "Anuj";
let age = 24;

let message = `Hi, my name is ${name} and I am ${age} years old.`;
console.log(message); // Hi, my name is Anuj and I am 24 years old.

// 2. Multi-line strings
let multiline = `This is a multi-line string
that spans across
three lines!`;
console.log(multiline);

// 3. Expression evaluation
let a = 10;
let b = 20;
console.log(`Sum of ${a} and ${b} is ${a + b}`); // Sum of 10 and 20 is 30

// 4. Function inside template literal
function greet(name) {
  return `Hello, ${name.toUpperCase()}!`;
}
console.log(greet("anuj")); // Hello, ANUJ!

// 5. Use-case: HTML template
let product = "Phone";
let price = 9999;

let html = `
  <div class="card">
    <h2>${product}</h2>
    <p>Price: ₹${price}</p>
  </div>
`;
console.log(html);

// 6. Nested template literals
let language = "JavaScript";
let level = "Advanced";

let summary = `${name} is learning ${`${language} (${level})`}`;
console.log(summary); // Anuj is learning JavaScript (Advanced)