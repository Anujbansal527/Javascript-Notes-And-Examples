// 🔸 1. Object Shallow Copy using Spread Operator
const user = { name: "Anuj", age: 25 };
const copyUser = { ...user }; // Shallow copy banaya
copyUser.name = "Bansal";
console.log("Original:", user);     // { name: "Anuj", age: 25 }
console.log("Copied:", copyUser);   // { name: "Bansal", age: 25 }

// 🔸 2. Deep Copy using JSON (nested objects ke liye)
const original = {
  name: "Anuj",
  address: { city: "Indore", pin: 452001 },
};
const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Bhopal";

console.log("Original:", original.address.city); // Indore
console.log("Deep Copy:", deepCopy.address.city); // Bhopal

// 🔸 3. Check if Object is Empty
const emptyObj = {};
console.log("Is empty?", Object.keys(emptyObj).length === 0); // true

// 🔸 4. Merge Two Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 }; // obj2 ke values overwrite karega
console.log("Merged:", merged); // { a: 1, b: 3, c: 4 }

// 🔸 5. Iterate over Object
const userInfo = { name: "Anuj", age: 22 };
for (let key in userInfo) {
  console.log(`${key}: ${userInfo[key]}`);
}

Object.entries(userInfo).forEach(([k, v]) =>
  console.log(`Key = ${k}, Value = ${v}`)
);

// 🔸 6. Delete Property from Object
const data = { name: "Anuj", age: 23 };
delete data.age;
console.log("After delete:", data); // { name: 'Anuj' }

// 🔸 7. Freeze vs Seal
const person = { name: "Anuj", age: 23 };
Object.freeze(person);
person.age = 30; // ❌ Change nahi hoga
console.log("Frozen object:", person); // { name: 'Anuj', age: 23 }

const sealedObj = { name: "Anuj", age: 23 };
Object.seal(sealedObj);
sealedObj.age = 30; // ✅ Modify allowed
delete sealedObj.name; // ❌ Delete not allowed
console.log("Sealed object:", sealedObj); // { name: 'Anuj', age: 30 }

// 🔸 8. Convert Object to Array
const fruits = { a: "apple", b: "banana" };
console.log(Object.keys(fruits));   // ['a', 'b']
console.log(Object.values(fruits)); // ['apple', 'banana']
console.log(Object.entries(fruits)); // [['a', 'apple'], ['b', 'banana']]

// 🔸 9. Count Frequency of Characters
const str = "banana";
const freq = {};
for (let char of str) {
  freq[char] = (freq[char] || 0) + 1;
}
console.log("Frequency:", freq); // { b:1, a:3, n:2 }

// 🔸 10. Flatten a Nested Object (Simple Recursive)
function flattenObject(obj, parent = "", res = {}) {
  for (let key in obj) {
    let prop = parent ? `${parent}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flattenObject(obj[key], prop, res);
    } else {
      res[prop] = obj[key];
    }
  }
  return res;
}

const nested = {
  user: {
    name: "Anuj",
    address: {
      city: "Indore",
      pin: 452001,
    },
  },
};
console.log("Flattened:", flattenObject(nested));

// 🔸 11. Deep Compare (Shallow compare won't work for nested)
function isEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 == null ||
    obj2 == null
  )
    return false;

  const keys1 = Object.keys(obj1),
    keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const objA = { name: "Anuj", details: { age: 25 } };
const objB = { name: "Anuj", details: { age: 25 } };
console.log("Deep Equal?", isEqual(objA, objB)); // true

// 🔸 12. Convert array of objects to single object using reduce
const arr = [
  { id: 1, name: "Anuj" },
  { id: 2, name: "Bansal" },
];

const mapped = arr.reduce((acc, curr) => {
  acc[curr.id] = curr.name;
  return acc;
}, {});
console.log("Mapped Object:", mapped); // {1: "Anuj", 2: "Bansal"}
