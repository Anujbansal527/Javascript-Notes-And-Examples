 // 🧰 Utilities Module Pattern in JavaScript
// 🔍 Use-case: Create reusable helper utilities in one private + global-safe object

const Utils = (function () {
  // ✅ Private helper (ye bahar access nahi hoga)
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return {
    // 🔡 Capitalize → Pehle letter ko uppercase
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),

    // 📧 Email checker using regex
    isEmail: (str) => emailRegex.test(str),

    // 📦 Array flatten recursively
    flattenArray: (arr) => arr.flat(Infinity),

    // 🧪 Deep clone using JSON method
    deepClone: (obj) => JSON.parse(JSON.stringify(obj)),

    // ❔ Check if item is empty
    isEmpty: (item) => {
      if (Array.isArray(item) || typeof item === "string") return item.length === 0;
      if (typeof item === "object" && item !== null) return Object.keys(item).length === 0;
      return !item;
    },

    // 🕒 Debounce utility
    debounce: function (fn, delay) {
      let timer;
      return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn.apply(this, args), delay);
      };
    },

    // ⏱️ Throttle utility
    throttle: function (fn, limit) {
      let lastCall = 0;
      return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
          lastCall = now;
          fn.apply(this, args);
        }
      };
    }
  };
})();

// 🧪 Test Utilities
console.log("Capitalize:", Utils.capitalize("hello")); // Hello
console.log("isEmail:", Utils.isEmail("anuj@gmail.com")); // true
console.log("Flatten:", Utils.flattenArray([1, [2, [3, 4]]])); // [1,2,3,4]
console.log("Empty Obj:", Utils.isEmpty({})); // true
console.log("Clone:", Utils.deepClone({ a: 1 })); // {a:1}

/*
🌀 FLOW STEPS 

👉 Step 1: IIFE run hota hi Utils object bana deta hai
    - emailRegex private hai, sirf andar use ho raha hai

👉 Step 2: Utils ke andar public methods define hain:
    - capitalize("hello") → "Hello"
    - isEmail("anuj@gmail.com") → true
    - flattenArray([1,[2,[3,4]]]) → deep flatten
    - deepClone({a:1}) → deep copy, not by reference
    - isEmpty([] or {}) → true if empty
    - debounce(fn, delay) → fn sirf delay ke baad chalega
    - throttle(fn, limit) → fn limited interval par chalega

👉 Step 3: External world sirf `Utils.methodName()` ke through access kar sakta hai
    - But internal helpers (like regex) protected hain

🧠 Fayda kya hai?

✔️ Modular & reusable utilities
✔️ Encapsulation (private helpers like regex)
✔️ No global namespace pollution
✔️ Easy to test & maintain

📦 Real-world use:
- Utility libraries (like Lodash, Ramda) follow similar patterns
- Project-wide helper functions store karne ke liye best practice

*/

