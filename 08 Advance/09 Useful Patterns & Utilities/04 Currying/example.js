 // 🧩 Currying Example in JavaScript
// 🔍 Use-case: Reusable functions, partial application, functional programming

// ✅ Manual Currying Function
function greet(greeting) {
  // 👇 Yeh function ek aur function return karta hai (closure)
  return function(name) {
    return `${greeting}, ${name}!`; // 💬 Greeting + Name combine karke return
  };
}

console.log(greet("Hello")("Anuj")); // Hello, Anuj!

// ✅ Currying with calculator (real-life use-case)
function calculateGST(rate) {
  return function(amount) {
    return (rate / 100) * amount; // 🧮 GST calculation
  };
}

console.log("GST on ₹5000 at 18%:", calculateGST(18)(5000)); // ₹900

// ✅ Generic Currying Function (convert normal fn to curried)
function curry(fn) {
  return function curried(...args) {
    // ✅ Jab arguments complete ho jaye tab original function call
    if (args.length >= fn.length) {
      return fn(...args);
    }
    // 🔁 Agar arguments abhi incomplete hai, to aur le lo recursively
    return function (...next) {
      return curried(...args, ...next); // 📦 Previous + new args merge karo
    };
  };
}

// 🎯 Function with multiple arguments
function total(a, b, c) {
  return a + b + c;
}

const curriedTotal = curry(total); // 🎁 Curry bana diya
console.log("Total:", curriedTotal(10)(20)(30)); // 60

/* 
🌀 FLOW STEPS 

👉 Step 1: greet("Hello")("Anuj")
    - greet() ek function return karta hai jo "Anuj" accept karta hai
    - Dono values milte hi message generate hota hai

👉 Step 2: calculateGST(18)(5000)
    - calculateGST(18) returns ek function
    - wo ₹5000 leke 18% ka GST calculate karta hai

👉 Step 3: curry(fn)
    - Ye ek generic function hai jo kisi bhi fn ko curried form me convert kar deta hai
    - Jaise: total(a, b, c) → curry(total) ban gaya curriedTotal
    - Ab curriedTotal(10)(20)(30) is valid

🧠 Fayda kya hai Currying ka?
✔️ Reusability (e.g., const sayHi = greet("Hi"); sayHi("Anuj"))
✔️ Partial arguments handle karna (e.g., fix GST rate, use amount later)
✔️ Functional programming ke patterns follow karna

*/

