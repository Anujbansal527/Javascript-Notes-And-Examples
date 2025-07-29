 // 🏭 Factory Function Pattern in JavaScript
// 🔍 Use-case: Object creation without using `class` or `new`

// ✅ User Factory
function createUser(name, age) {
  return {
    name,
    age,
    greet() {
      return `👋 Hello ${this.name}, Age: ${this.age}`;
    }
  };
}

// 🧪 Create users
const user1 = createUser("Anuj", 25);
const user2 = createUser("Bansal", 30);

console.log(user1.greet()); // 👋 Hello Anuj, Age: 25
console.log(user2.greet()); // 👋 Hello Bansal, Age: 30

// ✅ Circle Factory
function createCircle(radius) {
  return {
    radius,
    area() {
      return Math.PI * radius * radius;
    },
    circumference() {
      return 2 * Math.PI * radius;
    }
  };
}

// 🧪 Create circle
const c1 = createCircle(10);
console.log("🟢 Circle Area:", c1.area()); // 314.15...
console.log("🟢 Circle Circumference:", c1.circumference()); // 62.83...

/*
🌀 FLOW STEPS 

👉 Factory Function kya hai?
   - Ek normal function jo object return karta hai
   - Har baar jab call karte ho, ek naya object milta hai
   - Isme `new` keyword ka use nahi hota

👉 Example 1: createUser("Anuj", 25)
   - Return karta hai ek object with name, age, greet()

👉 Example 2: createCircle(10)
   - Return karta hai radius, area(), circumference()

🧠 Key points:

✔️ this ka use optional hai (kyunki closure use kar sakte ho)
✔️ Encapsulation maintained hoti hai
✔️ Classes ke alternative ke roop me use hota hai
✔️ Object creation ko DRY banata hai (repeat nahi karna padta)

📦 Real-world use:
- Component creation in UI (like `createButton()` or `createModal()`)
- Encapsulated reusable logic (e.g., `createUser`, `createLogger`, `createCart`)
- Redux Toolkit, React hooks internally use factory-like logic

📌 Comparison:

| Pattern         | Keyword | Reusability | this Binding |
|------------------|---------|-------------|--------------|
| Factory Function | ❌ new  | ✅ High     | Optional     |
| Class            | ✅ new  | ✅ High     | Mandatory    |
| Object Literal   | ❌      | ❌ Low      | Static       |

*/

