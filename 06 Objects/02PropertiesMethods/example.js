// ✅ Example Object
const user = {
  name: "Anuj",
  age: 23,
  isStudent: true
};

// 🔹 Object.keys()
console.log("Keys:", Object.keys(user)); // ["name", "age", "isStudent"]

// 🔹 Object.values()
console.log("Values:", Object.values(user)); // ["Anuj", 23, true]

// 🔹 Object.entries()
console.log("Entries:", Object.entries(user)); 
// [ [ 'name', 'Anuj' ], [ 'age', 23 ], [ 'isStudent', true ] ]

// 🔹 Object.assign() - Clone
const cloned = Object.assign({}, user);
console.log("Cloned:", cloned); // new object with same data

// 🔹 Spread operator (Recommended)
const spreadClone = { ...user };
console.log("Spread clone:", spreadClone);

// 🔹 Object.hasOwnProperty()
console.log("Has key 'name'?", user.hasOwnProperty("name")); // true
console.log("Has key 'salary'?", user.hasOwnProperty("salary")); // false

// 🔹 "key" in obj
console.log("'age' in user?", "age" in user); // true

// 🔐 Freeze
Object.freeze(user);
user.name = "Updated"; // ❌ No change
console.log("After freeze:", user); // name remains "Anuj"

// 🔐 Seal
const sealedUser = { city: "Indore", country: "India" };
Object.seal(sealedUser);
sealedUser.city = "Bhopal";         // ✅ Allowed
delete sealedUser.country;          // ❌ Won’t work
sealedUser.pincode = 452001;        // ❌ Won’t add
console.log("Sealed object:", sealedUser);