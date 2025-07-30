// 📘 Memoization in JavaScript
// 🔍 Use-case: Heavy recursive functions like Fibonacci, factorial, etc.

// ❌ Slow recursive Fibonacci (without memoization)
function slowFib(n) {
  // 🧠 Base case: Agar n < 2 hai to wahi return karo
  if (n < 2) return n;

  // 🔁 Recursive call: Har call dobara n-1 aur n-2 calculate karta hai
  return slowFib(n - 1) + slowFib(n - 2);
}

// ✅ Memoize Utility Function
function memoize(fn) {
  const cache = {}; // 📦 Result store karne ke liye ek object (key-value pair)

  return function (...args) {
    const key = args.join("-"); // 🗝️ Arguments ko ek key mein convert karo (jaise "10")

    // 🔍 Agar result already cache mein hai to usi ko return karo
    if (cache[key]) {
      console.log("📦 From cache:", key);
      return cache[key];
    }

    // 🧮 Naya result calculate karo aur cache mein store karo
    const result = fn.apply(this, args); // fn(...args)
    cache[key] = result;
    return result;
  };
}

// 🧠 Memoized Fibonacci Function
// 🚀 Isme jab bhi ek value calculate hoti hai, wo cache mein store ho jati hai
const fib = memoize(function (n) {
  // 🧠 Base case
  if (n < 2) return n;

  // 🔁 Recursive call with memoized version
  return fib(n - 1) + fib(n - 2);
});

// ✅ Calling fib(10)
console.log("🚀 fib(10):", fib(10)); // Pehli baar calculate karega
console.log("🚀 fib(10):", fib(10)); // Dusri baar cache se directly milega

/* 
🌀 FLOW STEPS 

👉 Step 1: User calls fib(10)
    - console.log("fib(10):", fib(10));

👉 Step 2: memoize() function execute hota hai
    - Pehle cache check karta hai (cache["10"]?)

👉 Step 3: fib(10) ke liye fib(9) + fib(8) calculate hota hai
    - Dono memoized hain, to ye bhi cache check karenge
    - Agar cache nahi mila to phir aage calculate karenge

👉 Step 4: Har new value calculate hone ke baad cache me store hoti hai
    - Jaise fib(2) = 1 → cache["2"] = 1

👉 Step 5: Once base case (n < 2) mil jaata hai
    - Return hota hai aur recursion unwind hota hai

👉 Step 6: fib(10) tak ke sab results cache me aa jaate hain

👉 Step 7: fib(10) return hota hai

👉 Step 8: Dusri baar jab fib(10) call karte ho
    - Directly cache se mil jaata hai → ⚡ SUPER FAST!

📌 Advantage:
- Pehli baar slow (calculate hota hai)
- Dusri baar super fast (cache se result)
*/
