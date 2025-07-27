 // 🔹 Memory Leak via Closure

// ❌ Yeh function closure ke through bigArray ko unnecessarily yaad rakhta hai
// Even though hum bigArray ka use nahi kar rahe, event listener uska reference hold karta hai

function memoryLeakExample() {
  let bigArray = new Array(1000000).fill("🔥🔥🔥"); // 1 million items

  document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked");
    // ⚠️ Mistake: callback closure me bigArray ka reference lock ho gaya
    // Garbage Collector bigArray ko clean nahi karega
  });
}
memoryLeakExample();

// -------------------------------------------------------------

// 🔹 Preventing Memory Leak (Safe Way)

// ✅ bigData ka reference remove kar diya after use, taaki GC usse clean kar sake

function safeClosure() {
  let bigData = new Array(1000000).fill("⚡");

  const clickHandler = function () {
    console.log("✅ Safe handler");
  };

  document.getElementById("btn").addEventListener("click", clickHandler);

  // ❗ Important: bigData ko null kar diya, ab closure unnecessary memory hold nahi karega
  bigData = null;
}
safeClosure();

// -------------------------------------------------------------

// 🔹 Memory Leak with setInterval

// ❌ Agar setInterval ko clear nahi karte, to closure me variables locked rahte hain,
// jise GC (Garbage Collector) kabhi clear nahi karta

function leakyInterval() {
  let count = 0;

  let interval = setInterval(() => {
    console.log("⏱️ Running:", count++);
    // Closure me count value locked hai
    // Agar clearInterval nahi karte to yeh interval chalta rahega — memory leak!
  }, 1000);

  // ✅ Best Practice: Clear interval after some time
  setTimeout(() => {
    clearInterval(interval);
    console.log("✅ Interval cleared");
  }, 5000); // after 5 seconds
}
leakyInterval();
