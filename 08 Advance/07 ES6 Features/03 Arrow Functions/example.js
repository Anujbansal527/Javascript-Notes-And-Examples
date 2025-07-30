 
 // 1. Normal arrow function
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

// 2. Single parameter - brackets optional
const square = x => x * x;
console.log(square(4)); // 16

// 3. No parameter - use empty ()
const greet = () => console.log("Hello, Anuj!");
greet(); // Hello, Anuj!

// 4. Multiple lines - need return & {}
const subtract = (a, b) => {
  let result = a - b;
  return result;
};
console.log(subtract(10, 4)); // 6

// 5. Arrow function inside array method
const nums = [1, 2, 3];
const double = nums.map(num => num * 2);
console.log(double); // [2, 4, 6]

// 6. Arrow function & `this` issue
const obj = {
  name: "Anuj",
  regularFunc: function () {
    console.log("Regular:", this.name); // this = obj
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // ❌ this = global (undefined or window)
  }
};

obj.regularFunc(); // Regular: Anuj
obj.arrowFunc();   // Arrow: undefined

// 7. Arrow function with setTimeout (lexical this)
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++;
    console.log("Seconds:", this.seconds);
  }, 1000);
}

// new Timer(); // uncomment to see seconds incrementing

// 8. ❌ Arrow function as constructor - not allowed
/*
const Person = (name) => {
  this.name = name;
};
const p = new Person("Anuj"); // TypeError: Person is not a constructor
*/

// 9. ❌ Arrow functions don't have `arguments`
// Traditional Function
function normalFunc() {
  console.log("Arguments:", arguments);
}
normalFunc(1, 2, 3);

// Arrow Function - no arguments object
const arrowArgs = () => {
  // console.log(arguments); // ❌ ReferenceError
};
arrowArgs(1, 2);