// 👴 Step 1: Grandparent object banaya
const grandParent = {
  greet() {
    console.log("👴 Hello from Grandparent");
  },
};

// 👨 Step 2: Parent object banaya jo grandParent se inherit karta hai
const parent = Object.create(grandParent);
parent.sayHi = function () {
  console.log("👨 Hi from Parent");
};

// 👦 Step 3: Child object banaya jo parent se inherit karta hai
const child = Object.create(parent);
child.name = "👦 Anuj Bansal";

// 🔽 Step 4: Test karte hain prototype chain ka kaam

console.log(child.name); 
// ✅ Output: "👦 Anuj Bansal"
// 📌 Ye direct property hai child object ki

child.sayHi(); 
// ✅ Output: "👨 Hi from Parent"
// 📌 Ye parent se inherit hua hai (child -> parent)

child.greet(); 
// ✅ Output: "👴 Hello from Grandparent"
// 📌 Ye grandParent se inherit hua hai (child -> parent -> grandParent)

// 🔍 Step 5: Prototype chain manually check karte hain

console.log(Object.getPrototypeOf(child)); 
// ➡ parent object return karega

console.log(Object.getPrototypeOf(parent)); 
// ➡ grandParent object return karega

console.log(Object.getPrototypeOf(grandParent)); 
// ➡ Object.prototype (JavaScript ka base object)

console.log(Object.getPrototypeOf(Object.prototype)); 
// ➡ null (prototype chain ka end)

// ✅ Summary (Prototype chain):
// child -> parent -> grandParent -> Object.prototype -> null
