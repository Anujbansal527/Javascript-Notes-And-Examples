  // 📘 Array Operations in JavaScript

// ============================================
// 1️⃣ Shallow Copy (copies top-level only)
// ============================================
let original = [1, 2, 3];
let copy1 = [...original];       // Spread operator shallow copy
let copy2 = original.slice();    // slice() shallow copy
let copy3 = Array.from(original);

console.log("Original:", original); // [1, 2, 3]
console.log("Copy1:", copy1);       // [1, 2, 3]

// ============================================
// 2️⃣ Deep Copy (nested arrays/objects copied)
// ============================================
let nested = [1, [2, 3]];
let deep1 = JSON.parse(JSON.stringify(nested));
let deep2 = structuredClone(nested); // ✅ Preferred modern method

nested[1][0] = 99;
console.log("After modifying nested:", nested);   // [1, [99, 3]]
console.log("Deep1:", deep1);                     // [1, [2, 3]]
console.log("Deep2:", deep2);                     // [1, [2, 3]]

// ============================================
// 3️⃣ Merging Arrays
// ============================================
let a = [1, 2];
let b = [3, 4];
let merged = [...a, ...b]; // Using spread operator
console.log("Merged Array:", merged); // [1, 2, 3, 4]

// ============================================
// 4️⃣ Rotate Array
// ============================================
let arr = [1, 2, 3, 4, 5];

// Left Rotate by 2
let leftRotated = arr.slice(2).concat(arr.slice(0, 2));
console.log("Left Rotated:", leftRotated); // [3, 4, 5, 1, 2]

// Right Rotate by 2
let rightRotated = arr.slice(-2).concat(arr.slice(0, -2));
console.log("Right Rotated:", rightRotated); // [4, 5, 1, 2, 3]

// ============================================
// 5️⃣ Reverse Array
// ============================================
let reversed = [...arr].reverse();
console.log("Reversed Array:", reversed); // [5, 4, 3, 2, 1]

// ============================================
// 6️⃣ Remove Duplicates
// ============================================
let nums = [1, 2, 2, 3, 4, 4];
let unique = [...new Set(nums)];
console.log("Unique Elements:", unique); // [1, 2, 3, 4]

// ============================================
// 7️⃣ Frequency Count
// ============================================
let freq = {};
nums.forEach(num => {
  freq[num] = (freq[num] || 0) + 1; // Initial 0 then increment
});
console.log("Frequency Count:", freq); // { '1': 1, '2': 2, '3': 1, '4': 2 }

// ============================================
// 8️⃣ Sum of All Elements
// ============================================
let total = nums.reduce((sum, val) => sum + val, 0);
console.log("Total Sum:", total); // 16

// ============================================
// 9️⃣ Convert Array to String
// ============================================
let joined = nums.join("-");
console.log("Joined String:", joined); // "1-2-2-3-4-4"

// ============================================
// 🔟 Flatten Nested Arrays
// ============================================
let nestedArray = [1, [2, [3, 4]], 5];
console.log("Flat (1 level):", nestedArray.flat(1)); // [1, 2, [3, 4]]
console.log("Flat (2 levels):", nestedArray.flat(2)); // [1, 2, 3, 4, 5]

// ✅ Each step has been explained with console outputs to demonstrate results clearly.
