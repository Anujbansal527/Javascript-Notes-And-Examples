// ✅ Ye ek parent object hai jisme ek greet method hai
const person = {
  greet() {
    console.log("👋 Hello from parent object");
  },
};

// ✅ Ab hum ek child object banate hain jiska prototype 'person' object hai
const anuj = {
  name: "Anuj Bansal",
  age: 25,
  __proto__: person, // 👈 Prototype inheritance set kiya (legacy way)
};

// 🔸 child object ke apne properties
console.log(anuj.name); // ✅ Anuj Bansal
console.log(anuj.age);  // ✅ 25

// 🔸 greet() method anuj object me direct nahi hai, lekin prototype chain ke through mil gaya
anuj.greet(); // ✅ Hello from parent object (mil gaya prototype se)

// 🔍 Check: kya greet() anuj ka apna method hai?
console.log(anuj.hasOwnProperty("greet")); // ❌ false (prototype se aaya hai)

// 🔍 Check prototype chain
console.log(Object.getPrototypeOf(anuj)); // 👀 person object
