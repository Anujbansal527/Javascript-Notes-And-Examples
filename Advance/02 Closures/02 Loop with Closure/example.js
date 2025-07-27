// 🔹 Problem with var

// 👉 var ki scope function-level hoti hai, isliye loop ke baad i = 3 ho jata hai
// Jab setTimeout chalta hai (1 sec baad), tab tak loop complete ho chuka hota hai

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("❌ var i:", i); // hamesha 3 print hoga
  }, 1000);
}

// --------------------------------------------

// 🔹 Solution using let

// 👉 let ki scope block-level hoti hai
// Har iteration me ek naya i banega, aur wahi setTimeout ke andar accessible hoga

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("✅ let i:", i); // 0, 1, 2
  }, 1000);
}

// --------------------------------------------

// 🔹 Solution using IIFE (Immediately Invoked Function Expression)

// 👉 IIFE ka use karke har iteration me i ki current value ko function me x ke roop me bhej dete hain
// setTimeout closure me x value lock ho jaati hai, toh 0,1,2 sahi se print hota hai

for (var i = 0; i < 3; i++) {
  (function (x) {
    setTimeout(function () {
      console.log("✅ IIFE i:", x); // 0, 1, 2
    }, 1000);
  })(i);
}
