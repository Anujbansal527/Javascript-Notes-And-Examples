// ✅ Looping over object keys
const user = {
  name: "Anuj",
  age: 22,
  role: "Developer"
};

for (let key in user) {
  console.log(`${key}: ${user[key]}`);
  // Output: name: Anuj, age: 22, role: Developer
}

// ✅ Check hasOwnProperty to avoid inherited properties
const base = { country: "India" };
const student = Object.create(base);
student.name = "Bansal";
student.age = 21;

for (let key in student) {
  if (student.hasOwnProperty(key)) {
    console.log("Own key:", key); // name, age
  }
}

// ✅ Looping over array (gives index)
const fruits = ["apple", "banana", "mango"];
for (let i in fruits) {
  console.log(`Index: ${i}, Value: ${fruits[i]}`);
  // Output: 0: apple, 1: banana, 2: mango
}

// ❌ Not recommended for arrays — better to use for...of

// ✅ Loop over string with index (rare case)
const str = "JS";
for (let i in str) {
  console.log(`Char at ${i} is ${str[i]}`); // 0: J, 1: S
}
