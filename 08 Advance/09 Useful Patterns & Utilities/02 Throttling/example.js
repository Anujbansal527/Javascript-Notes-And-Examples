// 🧭 Throttling Example in JavaScript
// 📜 Use-case: Scroll tracking, mousemove, resize performance optimization

// ✅ Throttle Utility Function
function throttle(fn, limit) {
  let lastCall = 0; // ⏱️ Last time function call hua tha

  return function (...args) {
    const now = Date.now(); // 📆 Abhi ka current time

    // 🔍 Check karo kya limit cross ho gaya?
    if (now - lastCall >= limit) {
      lastCall = now; // 🕒 lastCall update karo
      fn.apply(this, args); // 🔁 Original function call karo
    }
  };
}

// 🧪 Example: Throttle scroll event

// 📦 Ek bada box jisse scroll ho sake
const box = document.createElement("div");
box.style.height = "2000px"; // 💡 Zyada height for scrolling
document.body.appendChild(box);

// 👇 Scroll event ke liye throttled listener lagate hain
window.addEventListener(
  "scroll",
  throttle(function () {
    // 📤 Sirf 1 second me ek baar print karega
    console.log("📜 Scrolling at:", new Date().toLocaleTimeString());
  }, 1000) // ⏱️ Limit = 1000ms = 1 second
);

// Jab user scroll karega, throttle function ensure karega ki
// 1 second me sirf ek baar hi `console.log` chale.
// ✅ Isse performance better hoti hai, spammy calls nahi hote.

/*
🌀 FLOW STEPS  

👉 Step 1: User page scroll karta hai → scroll event trigger hota hai

👉 Step 2: Throttle wrapper function run hota hai
    - Wo check karta hai ki last function call ko kitna time hua hai

👉 Step 3: Agar 1000ms (1 second) se zyada ho chuka hai
    ✅ To original function (console.log) call ho jaata hai
    🕒 lastCall update ho jaata hai to current time

👉 Step 4: Agar 1 second se kam hua hai since last call
    ❌ To function call ignore kar diya jaata hai

👉 Step 5: Ye process har scroll par repeat hoti hai
    - Lekin console.log sirf 1 sec mein ek baar hi chalega

✅ Result:
- Performance boost hota hai (CPU overload nahi hoti)
- Scroll events efficiently handle hote hain
*/
