// ✅ 1. First Order Function
function sayHello() {
  console.log("Hello World");
}
sayHello(); // Output: Hello World

// Ye ek simple function hai jo na koi function accept karta hai na return karta hai

// ✅ 2. Higher Order Function - Takes function as argument
function greetUser(callback) {
  console.log("Hello User!");
  callback(); // 🔁 calling the callback
}

// ✅ Callback Function
function thankYou() {
  console.log("Thanks for visiting!");
}

greetUser(thankYou); // Output: Hello User! \n Thanks for visiting!

// `thankYou()` function ko `greetUser()` me pass kiya gaya hai => callback ban gaya

// ✅ 3. Higher Order Function - Returns a function
function multiplyBy(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10

// `multiplyBy` ek HOF hai jo ek naya function return kar raha hai

// ✅ 4. Callback Example - setTimeout (async)
setTimeout(function () {
  console.log("Executed after 1 sec");
}, 1000);

// setTimeout ek built-in HOF hai, aur usme diya gaya function ek callback hai

// ✅ 5. Using Array Methods (map is HOF)
const nums = [1, 2, 3, 4];
const square = nums.map(n => n * n);
console.log(square); // Output: [1, 4, 9, 16]

// `map` ek HOF hai jo har element ke liye callback run karta hai

// ✅ 6. Custom map function (Manual HOF + Callback)
function customMap(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const doubled = customMap([1, 2, 3], (n) => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// custom HOF banaya hai jo ek array aur ek callback accept karta hai

// ✅ Summary:
// First Order: simple function
// Callback: passed as argument
// Higher Order: accepts/returns function
