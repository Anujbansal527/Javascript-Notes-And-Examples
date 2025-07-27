 // 🔹 Basic async function

// 👉 async function automatically promise return karti hai
// Yahaan hum directly ek string return kar rahe hain, but it behaves like: Promise.resolve("...")

async function greet() {
  return "👋 Hello from async function";
}

// greet() ek promise return karega, toh hum .then() se uska result handle kar sakte hain
greet().then((msg) => console.log(msg)); // Output: 👋 Hello from async function

// --------------------------------------------

// 🔹 Using await inside async

// 👉 wait function ek promise return karta hai jo "ms" milliseconds ke baad resolve hota hai
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ Waited for ${ms / 1000} seconds`);
    }, ms);
  });
}

// 👉 runTask ek async function hai jisme hum await use kar rahe hain
// await ka matlab hai: promise complete hone ka wait karo, bina blocking ke
async function runTask() {
  console.log("🚀 Task started");

  // pehla wait: 1 second
  const msg1 = await wait(1000);
  console.log(msg1); // ✅ Waited for 1 seconds

  // dusra wait: 2 seconds
  const msg2 = await wait(2000);
  console.log(msg2); // ✅ Waited for 2 seconds

  console.log("🏁 Task completed");
}

// runTask function call karte hi sequential async flow shuru hoga
runTask();

// --------------------------------------------

// 🔹 Error handling with try-catch

// 👉 async/await ke saath errors ko handle karne ke liye try-catch block ka use hota hai
// Yahan hum intentionally ek rejected promise ka use kar rahe hain

async function fetchData() {
  try {
    // yeh Promise.reject() error throw karega, jo catch me chala jayega
    const res = await Promise.reject("🚫 Server Error");
    console.log(res); // yeh execute nahi hoga
  } catch (err) {
    console.log("❌ Error caught:", err); // Error handle yahan hoga
  } finally {
    console.log("🎯 Done with async flow"); // finally block hamesha chalta hai
  }
}

// async function ko call karte hi uska flow start ho jata hai
fetchData();


/*
output
👋 Hello from async function
🚀 Task started
✅ Waited for 1 seconds
✅ Waited for 2 seconds
🏁 Task completed
❌ Error caught: 🚫 Server Error
🎯 Done with async flow
*/