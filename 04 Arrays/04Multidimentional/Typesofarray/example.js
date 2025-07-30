// =============================================
// ✅ 1. One-Dimensional Array
// =============================================

const fruits = ["apple", "banana", "mango"];
console.log("1D Array:", fruits);

// =============================================
// ✅ 2. Two-Dimensional Array (Matrix)
// =============================================

const matrix = [
  [1, 2],
  [3, 4]
];
console.log("2D Array (matrix):", matrix);
console.log("Access matrix[1][1]:", matrix[1][1]); // 4

// =============================================
// ✅ 3. Jagged Array
// =============================================

const jagged = [
  [1, 2],
  [3, 4, 5],
  [6]
];
console.log("Jagged Array:", jagged);

// =============================================
// ✅ 4. Multidimensional (Nested) Array
// =============================================

const nested = [
  [[1], [2]],
  [[3], [4]]
];
console.log("Nested Array:", nested);
console.log("Access nested[1][0][0]:", nested[1][0][0]); // 3

// =============================================
// ✅ 5. Sparse Array
// =============================================

const sparse = [];
sparse[3] = "X";
console.log("Sparse Array:", sparse);
console.log("Length:", sparse.length); // 4
console.log("Keys:", Object.keys(sparse)); // ['3']

// =============================================
// ✅ 6. Typed Array
// =============================================

const buffer = new ArrayBuffer(4); // 4 bytes
const view = new Uint8Array(buffer); // Each index is 1 byte
view[0] = 255;
view[1] = 128;
console.log("Typed Array (Uint8Array):", view); // [255,128,0,0]
