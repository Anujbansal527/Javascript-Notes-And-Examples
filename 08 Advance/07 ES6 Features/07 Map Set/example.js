// ===== Map =====

// 1. Create and add
const myMap = new Map();
myMap.set("name", "Anuj");
myMap.set(1, "One");
myMap.set(true, "Yes");

console.log(myMap.get("name")); // Anuj
console.log(myMap.get(1)); // One
console.log(myMap.get(true)); // Yes

// 2. Map size
console.log(myMap.size); // 3

// 3. Check if key exists
console.log(myMap.has("name")); // true

// 4. Delete a key
myMap.delete(1);

// 5. Iterate over map
myMap.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// 6. Convert Map to array
const mapArr = Array.from(myMap);
console.log(mapArr); // [ ['name', 'Anuj'], [true, 'Yes'] ]

// 7. Use object as key
const objKey = { id: 1 };
myMap.set(objKey, "Object Key");
console.log(myMap.get(objKey)); // Object Key

// ===== Set =====

// 1. Create and add
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // duplicate, ignored
mySet.add("Anuj");

console.log(mySet); // Set {1, 2, 'Anuj'}

// 2. Check if value exists
console.log(mySet.has(2)); // true

// 3. Set size
console.log(mySet.size); // 3

// 4. Delete value
mySet.delete(1);
console.log(mySet); // Set {2, 'Anuj'}

// 5. Iterate Set
for (const val of mySet) {
  console.log("Value:", val);
}

// 6. Convert to array
const setArr = [...mySet];
console.log(setArr); // [2, 'Anuj']

// 7. Remove duplicates from array using Set
const nums = [1, 2, 2, 3, 3, 4];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // [1, 2, 3, 4]