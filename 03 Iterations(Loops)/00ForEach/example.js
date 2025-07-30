// ✅ Basic forEach loop
const names = ["Anuj", "Bansal", "Rahul"];

names.forEach(function(name) {
  console.log("Hello,", name);
});
// Output:
// Hello, Anuj
// Hello, Bansal
// Hello, Rahul

// ✅ With index
names.forEach(function(name, index) {
  console.log(`${index}: ${name}`);
});

// ✅ Arrow function
names.forEach((name, i) => {
  console.log(`Name at ${i} is ${name}`);
});

// ✅ Sum of numbers using forEach
const nums = [10, 20, 30];
let sum = 0;

nums.forEach((num) => {
  sum += num;
});
console.log("Sum:", sum); // 60

// ❌ Break or continue doesn't work
nums.forEach((num) => {
  if (num === 20) return; // Skips only this iteration, not like 'continue'
  console.log("Num is:", num); // 10, 30
});

// ✅ Access full array
nums.forEach((num, index, array) => {
  console.log(`At ${index}, Value: ${num}, Array: ${array}`);
});
