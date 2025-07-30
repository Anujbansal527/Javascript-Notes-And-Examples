 // 📘 Arrays: Interview Q&A Examples (JavaScript)

// ✅ 1. Difference between [] and Array()
const a = [];                 // Preferred way: creates empty array
const b = new Array(5);       // Creates a sparse array of length 5
console.log("a:", a);         // []
console.log("b:", b);         // [ <5 empty items> ]

// ✅ 2. Check if variable is an array
console.log(Array.isArray(a)); // true

// ✅ 3. typeof [] === 'object'
console.log(typeof a);         // object

// ✅ 4. Mixed type array
const mixed = ["Anuj", 21, true, null];
console.log("Mixed array:", mixed);

// ✅ 5. Remove duplicates using Set
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)];
console.log("Unique:", unique); // [1, 2, 3]

// ✅ 6. Flatten nested array
const nested = [1, [2, [3]]];
const flat = nested.flat(2);
console.log("Flattened:", flat); // [1, 2, 3]

// ✅ 7. Rotate array left by k positions
const arr = [1, 2, 3, 4, 5];
const k = 2;
const leftRotated = arr.slice(k).concat(arr.slice(0, k));
console.log("Left Rotated:", leftRotated); // [3, 4, 5, 1, 2]

// ✅ 8. map vs forEach vs filter
const nums2 = [1, 2, 3, 4];
const doubled = nums2.map(n => n * 2);
const filtered = nums2.filter(n => n % 2 === 0);
nums2.forEach(n => console.log("forEach item:", n));
console.log("Mapped:", doubled);   // [2, 4, 6, 8]
console.log("Filtered:", filtered); // [2, 4]

// ✅ 9. Sparse array
const sparse = [1, , 3];
console.log("Sparse:", sparse); // [1, <1 empty item>, 3]
console.log(sparse.length);     // 3
console.log(sparse[1]);         // undefined

// ✅ 10. Common operations
const input = [10, 20, 30, 40];
const reversed = [...input].reverse(); // reverse()
const sum = input.reduce((acc, cur) => acc + cur, 0); // reduce()
const max = Math.max(...input); // Math.max() with spread
const min = Math.min(...input); // Math.min() with spread
console.log("Reversed:", reversed);
console.log("Sum:", sum);
console.log("Max:", max);
console.log("Min:", min);

// ✅ 11. Shallow Copy
const shallow = input.slice(); // slice() shallow copy
shallow[0] = 999;
console.log("Shallow Copy:", shallow); // Changes only shallow
console.log("Original:", input);       // Original remains unchanged

// ✅ 12. Deep Copy
const nestedArr = [[1], [2]];
const deep = JSON.parse(JSON.stringify(nestedArr)); // Deep clone using JSON
deep[0][0] = 999;
console.log("Deep:", deep);           // [[999], [2]]
console.log("Original Nested:", nestedArr); // [[1], [2]]

// ✅ 13. slice vs splice
const fruits = ["apple", "banana", "mango"];
const sliced = fruits.slice(1, 2); // slice(start, end) - non-destructive
const spliced = fruits.splice(1, 1); // splice(start, deleteCount) - modifies array
console.log("Sliced:", sliced);
console.log("Spliced:", spliced);
console.log("After Splice:", fruits); // ['apple', 'mango']

// ✅ 14. Clone array safely
const cloned = [...input]; // Spread syntax
console.log("Cloned:", cloned);

// ✅ 15. Checking if all elements are even
console.log(input.every(n => n % 2 === 0)); // every() => true

// ✅ 16. Checking if any element is greater than 35
console.log(input.some(n => n > 35)); // some() => true

// ✅ 17. Use find()
const found = input.find(n => n > 25); // find() => first match
console.log("First > 25:", found); // 30

// ✅ 18. fill() method
const fillArr = new Array(5).fill(0); // Fills all index with 0
console.log("Filled Array:", fillArr); // [0, 0, 0, 0, 0]

// ✅ 19. includes() method
console.log(input.includes(20)); // true
console.log(input.includes(100)); // false

// ✅ 20. indexOf() and lastIndexOf()
console.log(input.indexOf(30)); // 2
console.log(input.lastIndexOf(30)); // 2 (same in this case)

// ✅ 21. join() and toString()
const joined = input.join("-");
console.log("Joined:", joined); // "10-20-30-40"
console.log("toString:", input.toString()); // "10,20,30,40"

// ✅ 22. concat()
const more = [50, 60];
const merged = input.concat(more); // Combines two arrays
console.log("Merged:", merged);

// ✅ 23. sort() and reverse()
const unsorted = [4, 1, 10, 3];
unsorted.sort((a, b) => a - b); // Ascending
console.log("Sorted:", unsorted);
unsorted.reverse();
console.log("Reversed Again:", unsorted);

// ✅ 24. flatMap()
const nums3 = [1, 2, 3];
const expanded = nums3.flatMap(n => [n, n * 2]);
console.log("FlatMapped:", expanded); // [1, 2, 2, 4, 3, 6]
