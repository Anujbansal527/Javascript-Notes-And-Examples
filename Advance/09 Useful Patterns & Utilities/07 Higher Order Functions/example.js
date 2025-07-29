 // 🔁 Higher Order Functions in JavaScript
// 🔍 Use-case: Data transformation, filtering, aggregation, and dynamic function creation

const numbers = [1, 2, 3, 4, 5];

// ✅ map() → har element ko modify karta hai
const doubled = numbers.map((n) => n * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// ✅ filter() → sirf specific condition wale elements ko return karta hai
const even = numbers.filter((n) => n % 2 === 0);
console.log("Even:", even); // [2, 4]

// ✅ reduce() → sari values ko combine karke ek output deta hai (e.g. sum)
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
console.log("Sum:", sum); // 15

// ✅ HOF that returns another function
function multiplier(x) {
  // 👇 x fixed ho gaya, ab ek naya function return ho raha hai
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2); // 👆 x = 2 fix kar diya
console.log("2 x 5 =", double(5)); // 10

/*
🌀 FLOW STEPS 
👉 Step 1: map()
    - numbers = [1, 2, 3, 4, 5]
    - har item ko double karo → [2, 4, 6, 8, 10]
    - original array change nahi hota

👉 Step 2: filter()
    - condition: sirf even numbers chahiye
    - result: [2, 4]

👉 Step 3: reduce()
    - accumulator pattern use karta hai
    - acc + cur → sum hota jaata hai
    - result: 15

👉 Step 4: multiplier(x)
    - yeh ek function return karta hai
    - multiplier(2) → returns function(y) { return 2 * y; }
    - double(5) → 2 * 5 = 10

🧠 HOF (Higher Order Functions) ka matlab kya hai?
✔️ Aise functions jo:
   - Ek ya zyada functions ko as input lete hain
   - Ya ek function return karte hain

📌 Real-World Use:
- map, filter, reduce – data processing
- multiplier – functional programming pattern (like curry/partial)

✅ Benefits:
- Code concise hota hai
- Chainable hota hai (e.g., map().filter().reduce())
- Reusable and clean logic

*/

