// ==========================================
// ✅ Array Creation - Square Bracket Method
// ==========================================

let fruits = ["apple", "banana", "mango"]; // simple array
console.log("Fruits:", fruits); // [ 'apple', 'banana', 'mango' ]

// ==========================================
// ✅ Accessing Elements using Index
// ==========================================

console.log("First Fruit:", fruits[0]); // apple
console.log("Second Fruit:", fruits[1]); // banana

// ==========================================
// ✅ Changing Array Values
// ==========================================

fruits[1] = "orange"; // banana → orange
console.log("Updated Fruits:", fruits); // [ 'apple', 'orange', 'mango' ]

// ==========================================
// ✅ Array with Mixed Types
// ==========================================

let profile = ["Anuj", 22, true, null];
console.log("Mixed Array:", profile); // [ 'Anuj', 22, true, null ]

// ==========================================
// ✅ Using new Array() Constructor (Not recommended much)
// ==========================================

let numbers = new Array(1, 2, 3); 
console.log("Numbers using constructor:", numbers); // [ 1, 2, 3 ]

// ==========================================
// ✅ Creating Empty Array with Fixed Length
// ==========================================

let emptyArr = new Array(5);
console.log("Empty array of size 5:", emptyArr); // [ <5 empty items> ]

// ==========================================
// ✅ Dynamically Fill Array Using Spread + map
// ==========================================

let filledArr = [...Array(5)].map((_, i) => i + 1);
console.log("Filled array with 1 to 5:", filledArr); // [1,2,3,4,5]

// ==========================================
// ✅ Check Type of Array
// ==========================================

console.log("typeof fruits:", typeof fruits); // object ⚠️
console.log("Is fruits an array?", Array.isArray(fruits)); // true ✅

// ==========================================
// ✅ Index Out of Bound
// ==========================================

console.log("Out of range index:", fruits[10]); // undefined ❌

// ==========================================
// ✅ Array Length
// ==========================================

console.log("Length of fruits array:", fruits.length); // 3

// ==========================================
// ✅ Nested Arrays (Will cover in multidimensional module)
// ==========================================

let matrix = [[1, 2], [3, 4]];
console.log("Matrix 2D array:", matrix); // [ [1, 2], [3, 4] ]
