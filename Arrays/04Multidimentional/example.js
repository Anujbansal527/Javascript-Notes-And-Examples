
// ==========================================
// ✅ Creating a 2D Array
// ==========================================

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Original Matrix:");
console.log(matrix);

// ==========================================
// ✅ Accessing Elements
// ==========================================

console.log("matrix[0][0]:", matrix[0][0]); // 1
console.log("matrix[1][1]:", matrix[1][1]); // 5
console.log("matrix[2][2]:", matrix[2][2]); // 9

// ==========================================
// ✅ Looping through 2D Array
// ==========================================

console.log("\nUsing nested for loop:");
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(`matrix[${i}][${j}] =`, matrix[i][j]);
  }
}

// ==========================================
// ✅ Flattening 2D Array
// ==========================================

let flat = matrix.flat();
console.log("\nFlattened array:", flat); // [1,2,3,4,5,6,7,8,9]

// ==========================================
// ✅ Transpose Matrix (Swap rows and cols)
// ==========================================

let transposed = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
console.log("\nTransposed Matrix:", transposed);
/*
[
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
]
*/

// ==========================================
// ✅ Clone a 2D Array
// ==========================================

let clone = matrix.map(row => [...row]);
clone[0][0] = 999;
console.log("\nOriginal Matrix:", matrix[0][0]); // Still 1
console.log("Cloned Matrix:", clone[0][0]); // 999
