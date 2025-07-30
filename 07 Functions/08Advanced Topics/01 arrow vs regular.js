// 🔹 01_arrow_vs_regular.js

// ✅ Regular Function
total = 0;
function addRegular(a, b) {
  // Normal function jo "this" ka apna context banata hai
  return a + b;
}

console.log(addRegular(2, 3)); // 5


// ✅ Arrow Function
const addArrow = (a, b) => {
  // Arrow function ka "this" parent context se aata hai
  return a + b;
};

console.log(addArrow(4, 5)); // 9


// 🔸 Arrow vs Regular - `this` difference example:
const obj = {
  value: 100,

  regularFunc: function () {
    console.log("Regular: ", this.value); // this => obj
  },

  arrowFunc: () => {
    console.log("Arrow: ", this.value); // this => outer lexical (window or undefined)
  },
};

obj.regularFunc(); // Output: 100
obj.arrowFunc();   // Output: undefined (kyunki arrow function ka apna "this" nahi hota)


// ✅ Arrow function CANNOT be used as constructor
const Regular = function (name) {
  this.name = name;
};
const person1 = new Regular("Anuj");
console.log(person1); // { name: 'Anuj' }

// ❌ Error: Arrow function can't be used as constructor
const Arrow = (name) => {
  this.name = name;
};
// const person2 = new Arrow("Anuj"); // ❌ TypeError


// ✅ Regular function has "arguments" object
function printArgs() {
  console.log(arguments); // [Arguments] { '0': 1, '1': 2 }
}
printArgs(1, 2);

// ❌ Arrow function has NO arguments object
const printArrowArgs = () => {
  // console.log(arguments); // ❌ ReferenceError
};
// printArrowArgs(1, 2);


// - Arrow function concise hai but "this" aur "arguments" nahi hote
// - Regular function zyada flexible aur context-aware hoti hai
