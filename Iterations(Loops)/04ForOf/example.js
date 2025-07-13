// ✅ Looping over array
const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log("Fruit:", fruit); // Output: apple, banana, mango
}

// ✅ Looping over string characters
const name = "Anuj";
for (const char of name) {
  console.log("Char:", char); // A, n, u, j
}

// ✅ Looping over Set
const numbers = new Set([1, 2, 3]);
for (const num of numbers) {
  console.log("Set value:", num); // 1, 2, 3
}

// ✅ Looping over Map
const roles = new Map([
  ["Anuj", "Admin"],
  ["Bansal", "User"]
]);

for (const entry of roles) {
  console.log("Map entry:", entry); // ["Anuj", "Admin"], etc.
}

// ✅ Getting key and value separately
for (const [key, value] of roles) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// ❌ Invalid use on object (will throw error)
/*
const obj = { name: "Anuj", age: 22 };
for (const item of obj) {
  console.log(item); // ❌ TypeError: obj is not iterable
}
*/

// ✅ Use Object.entries if you want to loop over object
const person = { name: "Anuj", age: 22 };
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`); // name: Anuj, age: 22
}
