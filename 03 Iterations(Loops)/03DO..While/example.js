// ✅ Basic do...while example
let i = 1;
do {
  console.log("i is:", i); // Runs at least once
  i++;
} while (i <= 5); // Output: 1 to 5

// ✅ Condition false from start – still runs once
let loggedIn = false;
do {
  console.log("Please login..."); // Always shows at least once
} while (loggedIn); // loggedIn is false

// ✅ With arrays
let nums = [10, 20, 30];
let index = 0;
do {
  console.log("Number:", nums[index]); // 10, 20, 30
  index++;
} while (index < nums.length);

// ✅ Infinite loop trap (don’t run!)
/*
let x = 1;
do {
  console.log("x:", x);
  // x is never incremented → infinite
} while (x < 5);
*/

// ✅ Using break inside do...while
let j = 1;
do {
  if (j === 4) break;
  console.log("j:", j); // 1, 2, 3
  j++;
} while (j <= 5);

// ✅ Using continue
let k = 0;
do {
  k++;
  if (k === 2) continue; // Skips 2
  console.log("k:", k); // 1, 3, 4, 5
} while (k < 5);
