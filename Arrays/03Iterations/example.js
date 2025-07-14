// ==========================================
// ✅ Sample Array
// ==========================================

const arr = ["apple", "banana", "mango", "orange"];

// ==========================================
// ✅ 1. for loop
// ==========================================

console.log("For loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(`Index ${i}: ${arr[i]}`);
}

// ==========================================
// ✅ 2. while loop
// ==========================================

console.log("\nWhile loop:");
let i = 0;
while (i < arr.length) {
  console.log(`Index ${i}: ${arr[i]}`);
  i++;
}

// ==========================================
// ✅ 3. do...while loop
// ==========================================

console.log("\nDo...while loop:");
let j = 0;
do {
  console.log(`Index ${j}: ${arr[j]}`);
  j++;
} while (j < arr.length);

// ==========================================
// ✅ 4. forEach
// ==========================================

console.log("\nforEach:");
arr.forEach((item, index) => {
  console.log(`Index ${index}: ${item}`);
});

// ==========================================
// ✅ 5. for...of (recommended for value loop)
// ==========================================

console.log("\nfor...of:");
for (let fruit of arr) {
  console.log("Fruit:", fruit);
}

// ==========================================
// ✅ 6. for...in (loop over indexes)
// ==========================================

console.log("\nfor...in:");
for (let index in arr) {
  console.log(`Index ${index}: ${arr[index]}`);
}

// ==========================================
// ❌ Bad: using for...in when order matters
// ⚠️ It works, but for...in is better for objects
