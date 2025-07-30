// ✅ Object Create
const user = {
  name: "Anuj",         // name key
  age: 23,              // number value
  isStudent: true       // boolean value
};

console.log("Original user:", user);

// ✅ Access Properties
console.log("Name (dot):", user.name);         // Dot notation
console.log("Age (bracket):", user["age"]);    // Bracket notation

// ✅ Modify Properties
user.age = 24;                  // age updated
user["name"] = "Bansal";        // name updated
console.log("Updated user:", user);

// ✅ Add New Properties
user.city = "Indore";           // new key added
user["country"] = "India";      // another key
console.log("Added new props:", user);

// ✅ Delete a Property
delete user.isStudent;          // removed boolean key
console.log("After delete:", user);

// ✅ Accessing non-existing key
console.log("Profession:", user.profession); // Output: undefined

// ✅ Dynamic property access (useful in loops or dynamic keys)
const key = "city";
console.log("Dynamic key:", user[key]); // Indore