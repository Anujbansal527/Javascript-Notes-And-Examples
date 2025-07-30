// 📘 Closures in JavaScript

/*
🔹 Definition:
Closure tab banta hai jab ek inner function apne outer function ke variables ko access karta hai,
bhalee hi outer function execute ho chuka ho.

Inner function outer scope ke variables ko "remember" karta hai.
*/

// 🔸 Example 1: Basic Closure
function outer() {
  let outerVar = "I am from outer scope";

  function inner() {
    console.log(outerVar); // inner function outerVar ko access kar raha hai
  }

  return inner; // inner function ko return kar diya
}

const closureFunc = outer();
closureFunc(); // Output: I am from outer scope

// 🔸 Example 2: Counter Using Closure
function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter1 = createCounter();
counter1(); // Count: 1
counter1(); // Count: 2

const counter2 = createCounter();
counter2(); // Count: 1 (Alag scope hai)

// 🔸 Example 3: Closure with Parameters
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(4)); // Output: 12

/*
- Har baar jab ek function return hota hai aur uske andar se koi function call hota hai,
  to wo outer variables ko "close over" karta hai.
- Isliye ise "Closure" kehte hain.

📌 Interview ke liye Points:
- Closure ek function ke sath uska lexical environment hota hai.
- Wo memory me us variables ko yaad rakhta hai jise wo use karta hai.
- Yeh JavaScript ke powerful concepts me se ek hai (used in data privacy, factory functions, etc.)
*/
