// ✅ Basic IIFE
(function () {
  console.log("🚀 This is an IIFE");
})();

// ✅ IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}`);
})("Anuj");

// ✅ IIFE as Module Pattern
const counter = (function () {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
})();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
console.log(counter.count);       // undefined (private!)