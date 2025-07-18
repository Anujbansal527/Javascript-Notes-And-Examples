// ✅ Sample Object
const user = {
  name: "Anuj",
  age: 23,
  isStudent: true
};

// 🔹 for...in loop (iterate over keys)
for (let key in user) {
  // 👉 Important to check it's own property
  if (user.hasOwnProperty(key)) {
    console.log(`for...in - ${key}: ${user[key]}`);
  }
}

// 🔹 Object.keys().forEach()
Object.keys(user).forEach((key) => {
  console.log(`Object.keys - ${key}: ${user[key]}`);
});

// 🔹 Object.values().forEach()
Object.values(user).forEach((value) => {
  console.log(`Value only:`, value);
});

// 🔹 Object.entries() with for...of
for (let [key, value] of Object.entries(user)) {
  console.log(`entries loop - ${key}: ${value}`);
};      