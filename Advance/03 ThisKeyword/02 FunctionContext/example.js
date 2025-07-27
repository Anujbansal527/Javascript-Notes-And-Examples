// 🔹 Function Context me `this` Explained in Hinglish

console.log("🔹 Function Context Examples");

// ✅ Non-strict mode me function call
function showNormal() {
  // 👉 Jab koi function normally call hota hai (non-strict mode), `this` global object (window in browser) hota hai
  console.log("👉 Normal Mode:", this); // window (in browser) ya global (in Node.js)
}
showNormal();

// ✅ Strict mode me function call
"use strict";
function showStrict() {
  // 👉 Strict mode me agar function directly call kiya jaye, to `this` undefined hota hai
  console.log("👉 Strict Mode:", this); // undefined
}
showStrict();

// ✅ Object ke through method call
const user = {
  name: "Anuj",
  greet: function () {
    // 👉 Jab function object ke method ke roop me call hota hai, `this` us object ko point karta hai
    console.log("👉 Object Method Call:", this.name); // "Anuj"
  },
};
user.greet(); // ✅ this → user object

// ✅ Method ko alag variable me assign karna
const ref = user.greet;
ref(); 
// ❌ `this` yahan window/global ho jata hai, user object nahi
// Output: undefined (kyunki this.name window.name hoga, jo exist nahi karta)

// ✅ Nested function inside object method
const team = {
  name: "Team JS",
  show: function () {
    // Outer method ke liye `this` → team object
    console.log("👉 Outer Method:", this.name); // Team JS

    function inner() {
      // 👉 Nested normal function ke liye `this` → window (non-strict) ya undefined (strict)
      console.log("👉 Inner Function:", this); // window / undefined
    }

    inner();
  },
};
team.show();
