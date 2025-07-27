// 🔹 Q1: Counter using Closure

// ✅ createCounter ek closure return karta hai
// `count` variable private hota hai har counter ke liye

function createCounter() {
  let count = 0; // private variable
  return function () {
    return ++count; // closure me value store rahegi
  };
}

const inc = createCounter();
console.log("Q1 ➤", inc()); // 1
console.log("Q1 ➤", inc()); // 2

// -------------------------------------------------------------

// 🔹 Q2: Button only works once (once utility)

// ✅ once() ek aisa wrapper function return karta hai
// Jo fn ko sirf ek baar hi allow karta hai run hone ka

function once(fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      fn.apply(this, args); // pehli baar chal jaayega
    } else {
      console.log("⚠️ Already used once!");
    }
  };
}

const oneTime = once(() => console.log("Q2 ➤ Clicked!"));
oneTime(); // Q2 ➤ Clicked!
oneTime(); // ⚠️ Already used once!

// -------------------------------------------------------------

// 🔹 Q3: Memoization using Closure

// ✅ Memoization technique: agar same input dobara aaye,
// to calculation repeat na ho, result cache se mile

function memoize(fn) {
  const cache = {}; // private cache
  return function (x) {
    if (cache[x]) {
      console.log("Q3 ➤ From Cache:", cache[x]);
      return cache[x];
    } else {
      const result = fn(x);
      cache[x] = result;
      return result;
    }
  };
}

const square = memoize(n => n * n);
console.log("Q3 ➤", square(4)); // 16
console.log("Q3 ➤", square(4)); // From Cache: 16

// -------------------------------------------------------------

// 🔹 Q4: API Limiter using Closure (Limit 3 calls)

// ✅ Ek counter banaya gaya jo track karega kitni baar API call hui
// Agar limit se zyada call ki to block kar dega

function apiLimiter(fn, limit = 3) {
  let count = 0;
  return function (...args) {
    if (count < limit) {
      count++;
      fn(...args); // allowed
    } else {
      console.log("Q4 ➤ 🚫 API limit reached");
    }
  };
}

const api = apiLimiter((x) => console.log("Q4 ➤ API called:", x));
api(1); // allowed
api(2); // allowed
api(3); // allowed
api(4); // 🚫 API limit reached
