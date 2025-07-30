// ==========================================
// ✅ Mutator Methods
// ==========================================

let items = [1, 2, 3];

items.push(4); // Add to end
console.log("push:", items); // [1, 2, 3, 4]

items.pop(); // Remove last
console.log("pop:", items); // [1, 2, 3]

items.unshift(0); // Add to start
console.log("unshift:", items); // [0, 1, 2, 3]

items.shift(); // Remove from start
console.log("shift:", items); // [1, 2, 3]

items.splice(1, 1, 99); // Replace index 1 with 99
console.log("splice replace:", items); // [1, 99, 3]

items.reverse();
console.log("reverse:", items); // [3, 99, 1]

items.sort((a, b) => a - b); // Sort numerically
console.log("sort:", items); // [1, 3, 99]

// ==========================================
// ✅ Accessor Methods
// ==========================================

let nums = [10, 20, 30, 40, 50];

let sliced = nums.slice(1, 4);
console.log("slice:", sliced); // [20, 30, 40]

let joined = nums.join("-");
console.log("join:", joined); // 10-20-30-40-50

console.log("includes 30:", nums.includes(30)); // true
console.log("indexOf 40:", nums.indexOf(40));   // 3
console.log("lastIndexOf 20:", nums.lastIndexOf(20)); // 1

// ==========================================
// ✅ Transformation / Functional Methods
// ==========================================

let doubled = nums.map(num => num * 2);
console.log("map:", doubled); // [20, 40, 60, 80, 100]

let filtered = nums.filter(num => num > 25);
console.log("filter:", filtered); // [30, 40, 50]

let sum = nums.reduce((acc, val) => acc + val, 0);
console.log("reduce (sum):", sum); // 150

nums.forEach((num, i) => console.log(`forEach [${i}]:`, num));
// forEach [0]: 10 ...
 
let firstAbove30 = nums.find(num => num > 30);
console.log("find:", firstAbove30); // 40

console.log("some > 45:", nums.some(n => n > 45)); // true
console.log("every > 5:", nums.every(n => n > 5)); // true

// ==========================================
// ✅ Others
// ==========================================

let flatArr = [1, [2, 3], [4, [5]]].flat(2);
console.log("flat:", flatArr); // [1, 2, 3, 4, 5]

let filled = new Array(5).fill("x");
console.log("fill:", filled); // ["x", "x", "x", "x", "x"]



// ===========================================
// ✅ JavaScript Array Methods
// ===========================================

const fruits = ["apple", "banana", "mango"];

// ==============================
// ✅ push() – end me add karna
fruits.push("orange");
console.log("After push:", fruits); // ["apple", "banana", "mango", "orange"]

// ✅ pop() – last element hatao
fruits.pop();
console.log("After pop:", fruits); // ["apple", "banana", "mango"]

// ✅ unshift() – beginning me add karna
fruits.unshift("grape");
console.log("After unshift:", fruits); // ["grape", "apple", "banana", "mango"]

// ✅ shift() – first element hatao
fruits.shift();
console.log("After shift:", fruits); // ["apple", "banana", "mango"]

// ✅ indexOf() – index return karta hai element ka
console.log("Index of banana:", fruits.indexOf("banana")); // 1

// ✅ includes() – check karta hai element exist karta hai ya nahi
console.log("Includes mango?", fruits.includes("mango")); // true

// ✅ join() – array ko string me convert karta hai
console.log("Join with ,:", fruits.join(", ")); // apple, banana, mango

// ✅ slice() – naya array return karta hai (does not modify)
console.log("Slice (0, 2):", fruits.slice(0, 2)); // ["apple", "banana"]

// ✅ splice() – array ko modify karta hai (remove/insert)
fruits.splice(1, 1, "kiwi"); // index 1 se 1 item hatao, aur "kiwi" dalo
console.log("After splice:", fruits); // ["apple", "kiwi", "mango"]

// ✅ reverse() – original array reverse karta hai
fruits.reverse();
console.log("Reversed array:", fruits); // ["mango", "kiwi", "apple"]

// ✅ sort() – alphabetically sort karta hai
const names = ["Anuj", "Kiran", "Bhavesh"];
names.sort();
console.log("Sorted names:", names); // ["Anuj", "Bhavesh", "Kiran"]

// ✅ concat() – arrays ko merge karta hai (returns new array)
const vegetables = ["carrot", "tomato"];
const combined = fruits.concat(vegetables);
console.log("Combined:", combined); // ["mango", "kiwi", "apple", "carrot", "tomato"]

// ✅ fill() – array ke sabhi values ko ek value se bhar deta hai
let filledArray = new Array(5).fill(0);
console.log("Filled array:", filledArray); // [0, 0, 0, 0, 0]

// ✅ flat() – nested arrays ko flat karta hai (1 level by default)
let nested = [1, [2, [3]]];
console.log("Flat (1):", nested.flat()); // [1, 2, [3]]
console.log("Flat (2):", nested.flat(2)); // [1, 2, 3]
