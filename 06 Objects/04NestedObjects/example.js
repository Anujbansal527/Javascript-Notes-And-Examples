// ✅ Nested object
const user = {
  name: "Anuj",
  age: 23,
  address: {
    street: "MG Road",
    city: "Indore",
    pin: 452001,
    country: {
      name: "India",
      code: "IN"
    }
  }
};

// 🔹 Access nested properties
console.log("City:", user.address.city); // Indore
console.log("Country Code:", user.address.country.code); // IN

// 🔹 Optional chaining
console.log("Zip:", user?.address?.zip); // undefined (safe)

// 🔹 Destructuring
const {
  address: {
    city,
    country: { name: countryName }
  }
} = user;

console.log("Destructured City:", city); // Indore
console.log("Destructured Country:", countryName); // India

// 🔹 Iterating over nested objects recursively
function printNested(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null && !Array.isArray(obj[key])) {
      console.log("🔸 Nested in:", key);
      printNested(obj[key]); // recursion
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

printNested(user);