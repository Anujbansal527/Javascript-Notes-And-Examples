// 🧩 Partial Application Example in JavaScript
// 🔍 Use-case: Pre-fill kuch arguments pehle se, baad me baaki bharna

// ✅ Base function: 2 arguments leta hai – rate and amount
function calculateGST(rate, amount) {
  return (rate / 100) * amount;
}

// ✅ Partial function creator
function partial(fn, ...fixedArgs) {
  // 👇 Fixed arguments ko pakad ke rakh lo
  return function (...remainingArgs) {
    // 🧮 Original function ko fixed + new args ke sath call karo
    return fn(...fixedArgs, ...remainingArgs);
  };
}

// 🎯 Create 18% GST calculator
const gst18 = partial(calculateGST, 18); // 💡 rate ko fix kar diya as 18

console.log("GST on ₹1000:", gst18(1000)); // 180
console.log("GST on ₹2500:", gst18(2500)); // 450

/* 
🌀 FLOW STEPS 

👉 Step 1: calculateGST(18, 1000)
    - rate = 18
    - amount = 1000
    - Output = 18% of 1000 = ₹180

👉 Step 2: partial(calculateGST, 18)
    - 'partial' function ko diya gaya calculateGST and pehla argument = 18
    - return hua ek naya function (gst18) jisme rate fix ho gaya

👉 Step 3: gst18(1000) → internally ban gaya calculateGST(18, 1000)
    - Sirf amount dena padta hai

👉 Step 4: gst18(2500) → calculateGST(18, 2500)
    - Output = ₹450

🧠 Fayda kya hai Partial Application ka?

✔️ Aap functions ko customize karke reuse kar sakte ho
✔️ Jaise API ya GST calculation mein constant values fix kar sakte ho
✔️ Code zyada modular aur readable ho jata hai

📌 Difference with Currying:
- Currying function ko ek-ek argument mein todta hai
- Partial application kuch arguments fix kar deta hai ek hi baar mein
*/

