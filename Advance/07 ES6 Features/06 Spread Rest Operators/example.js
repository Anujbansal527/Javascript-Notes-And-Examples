// ===== Spread Operator =====

// 1. Array Copy
const nums = [1, 2, 3];
const copy = [...nums];
console.log(copy); // [1, 2, 3]

// 2. Array Merge
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4]

// 3. Spread string into array
const name = "Anuj";
const letters = [...name];
console.log(letters); // ['A', 'n', 'u', 'j']

// 4. Spread in object
const user = { name: "Anuj", age: 24 };
const newUser = { ...user, city: "Indore" };
console.log(newUser); // { name: 'Anuj', age: 24, city: 'Indore' }

// 5. Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
shallow.b.c = 99;
console.log(original.b.c); // 99 (same ref)

// ===== Rest Operator =====

// 6. Function argument collection
function sum(...numbers) {
  console.log(numbers); // [1,2,3]
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3)); // 6

// 7. Destructuring with rest (arrays)
const [first, ...rest] = [10, 20, 30, 40];
console.log(first); // 10
console.log(rest);  // [20, 30, 40]

// 8. Destructuring with rest (objects)
const person = { name: "Anuj", age: 24, city: "Indore" };
const { name: n, ...others } = person;
console.log(n);      // Anuj
console.log(others); // { age: 24, city: "Indore" }

// 9. Use rest in arrow functions
const logAll = (...args) => console.log(args);
logAll("hi", 1, true); // ["hi", 1, true]

// 10. Wrong usage ❌
// Spread can't be used on LHS
// const [...nums] = 5; ❌ Invalid