 // ✅ Global context me `this`

console.log("🌍 Global Context Example");

// ----------------------------------
// 🔹 1. Global Scope (Browser environment)

// 👉 Browser me `this` global object ko refer karta hai — jo hota hai `window`
console.log(this); // 🔸 Output: window object (browser specific)

// ----------------------------------
// 🔹 2. Global var variable

// 👉 Jab hum var se koi variable global scope me define karte hain,
// toh wo window object ka property ban jata hai

var name = "Anuj";

// ✅ Isliye window.name access karne par value milti hai
console.log(window.name); // 🔸 Output: "Anuj"

// Note: Agar aap let ya const se define karte to window object ka part nahi banta

// let name = "Anuj";
// console.log(window.name); // ❌ undefined

// ----------------------------------
// 🔹 3. Strict Mode me `this`

// 👉 Jab hum "use strict" lagate hain, to `this` ka default behavior badal jata hai
// Normal me `this` global object hota hai
// Strict mode me agar kisi function ko bina kisi object ke call kiya jaye,
// to `this` hota hai `undefined`

"use strict";

function test() {
  console.log(this); // 🔸 Output: undefined
}

test();

// ----------------------------------
// 🔚 Summary:
// - Global scope me: `this` → window (browser)
// - var se defined variables → window ke property
// - Strict mode ke function me: `this` → undefined
