 // 🔹 Basic Closure via Function Return

// 👉 greetUser ek function hai jo ek inner function return karta hai
//    Inner function outer function ke parameter (userName) ko yaad rakhta hai — Closure

function greetUser(userName) {
  return function () {
    console.log("Hello, " + userName);
  };
}

const greetAnuj = greetUser("Anuj");  // greetUser("Anuj") se ek closure bana jisme "Anuj" yaad raha
greetAnuj(); // "Hello, Anuj"
greetAnuj(); // "Hello, Anuj" – same value yaad rakh raha hai (Closure)

// -------------------------------------------------------------

// 🔹 Counter Example

// 👉 createCounter function ek private variable count banata hai
//    Inner function closure ke through us count ko access karta hai
//    Har bar jab counter() call hoga, wo count++ karega aur print karega

function createCounter() {
  let count = 0;
  return function () {
    count++; // closure ke through count value preserve hoti hai
    console.log("Count is:", count);
  };
}

const counter = createCounter();
counter(); // Count is: 1
counter(); // Count is: 2
counter(); // Count is: 3 (value memory me store hai, har call pe badhti hai)

// -------------------------------------------------------------

// 🔹 Function Factory (Closure Based Power Function)

// 👉 power function ek exponent leta hai aur ek inner function return karta hai
//    Jo base value ko exponent ke saath power me convert karta hai
//    Har bar outer value (exponent) yaad rakhi jaati hai through Closure

function power(exponent) {
  return function (base) {
    return Math.pow(base, exponent); // Math.pow(base, exponent) ka use
  };
}

const square = power(2); // square function ban gaya, jisme exponent = 2 yaad hai
console.log("Square of 4:", square(4)); // 16

const cube = power(3); // cube function ban gaya, jisme exponent = 3 yaad hai
console.log("Cube of 3:", cube(3)); // 27
