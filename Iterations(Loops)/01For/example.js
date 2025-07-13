// ✅ Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("Value of i is:", i); // Output: 1,2,3,4,5
}

// ✅ Loop with array
let fruits = ["apple", "banana", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at ${i} is`, fruits[i]);
  // Output: Fruit at 0 is apple ...
}

// ✅ Loop with step size (odd numbers)
for (let i = 1; i <= 10; i += 2) {
  console.log("Odd:", i); // 1, 3, 5, 7, 9
}

// ✅ Decrementing loop
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i); // 5, 4, 3, 2, 1
}

// ✅ Break example
for (let i = 1; i <= 10; i++) {
  if (i === 4) break;
  console.log("Before break:", i); // 1, 2, 3
}

// ✅ Continue example
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Skip 3:", i); // 1, 2, 4, 5
}

// ✅ Mistake: using var (scope issue)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop:", i), 100);
  // Output: 3,3,3 (because var is function scoped)
}

// ✅ Fix with let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let loop:", j), 100);
  // Output: 0, 1, 2 (correct scoping)
}