 // ✅ Function that uses `this`
function introduce(city, age) {
  console.log(`Hi, I am ${this.name} from ${city}. I am ${age} years old.`);
}

const person = { name: "Anuj" };

// 🔹 Using call()
// Immediately invokes the function and passes arguments separately
introduce.call(person, "Indore", 22); 
// Output: Hi, I am Anuj from Indore. I am 22 years old.

// 🔹 Using apply()
// Similar to call, but arguments are passed as an array
introduce.apply(person, ["Delhi", 23]);
// Output: Hi, I am Anuj from Delhi. I am 23 years old.

// 🔹 Using bind()
// Does not invoke the function immediately
const boundFunc = introduce.bind(person, "Mumbai", 24);
boundFunc(); 
// Output: Hi, I am Anuj from Mumbai. I am 24 years old.

// 🔸 Extra Example: Borrowing method
const user1 = {
  name: "Anuj",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

const user2 = {
  name: "Bansal"
};

user1.greet.call(user2); // Output: Hello Bansal

// 🔸 Partial Application Example
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2); // Pre-fixes a = 2
console.log(double(5)); // Output: 10
