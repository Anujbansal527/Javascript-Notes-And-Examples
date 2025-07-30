// 1. Array Destructuring
const arr = [10, 20, 30];
const [a, b, c] = arr;
console.log(a, b, c); // 10 20 30

// 2. Skip values
const [x, , z] = [1, 2, 3];
console.log(x, z); // 1 3

// 3. Default values
const [p = 100, q = 200] = [undefined];
console.log(p, q); // 100 200

// 4. Swapping variables
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2 1

// 5. Object Destructuring
const user = {
  name: "Anuj",
  age: 24,
  city: "Indore"
};

const { name, age } = user;
console.log(name, age); // Anuj 24

// 6. Rename variable
const { city: location } = user;
console.log(location); // Indore

// 7. Default values in object
const { gender = "Male" } = user;
console.log(gender); // Male

// 8. Nested object destructuring
const student = {
  name: "Ravi",
  marks: {
    math: 95,
    science: 90
  }
};

const {
  marks: { math, science }
} = student;
console.log(math, science); // 95 90

// 9. Function parameter destructuring
function showUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
showUser(user); // Name: Anuj, Age: 24

// 10. Destructure in loop
const users = [
  { id: 1, uname: "A" },
  { id: 2, uname: "B" }
];

for (const { id, uname } of users) {
  console.log(id, uname); // 1 A, 2 B
}