// 🔹 Simple Promise Example

// ✅ Ek naya Promise banaya
let meraPromise = new Promise((resolve, reject) => {
  let kaamHoGaya = true; // agar false karoge to reject chalega

  if (kaamHoGaya) {
    resolve("✅ Kaam ho gaya!"); // success case
  } else {
    reject("❌ Kaam fail ho gaya!"); // fail case
  }
});

// 📦 Promise ke result ko handle karne ke liye then, catch, finally use kiya
meraPromise
  .then((msg) => {
    // agar resolve call hua toh ye chalega
    console.log("THEN: ", msg);
  })
  .catch((err) => {
    // agar reject call hua toh ye chalega
    console.log("CATCH: ", err);
  })
  .finally(() => {
    // ye hamesha chalega — chahe success ho ya fail
    console.log("✨ Promise khatam ho gaya (chahe success ya fail)");
  });


// 🔹 Simulated async task using setTimeout

// ✅ Ek function jo delay ke baad Promise return karta hai
function waitForSec(sec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`✅ ${sec} second ka kaam complete`);
    }, sec * 1000); // delay in seconds
  });
}

// ✅ Chain banakar async kaam sequentially kiya gaya
waitForSec(2) // pehle 2 second ka wait
  .then((res) => {
    console.log(res);
    return waitForSec(1); // phir 1 second ka wait
  })
  .then((res) => {
    console.log(res);
  });


// 🔹 Error handling in Promises

// ❌ Intentional failure for demonstration
let failPromise = new Promise((resolve, reject) => {
  reject("🚫 Internet connection failed");
});

// ⚠️ Error ko .catch se handle kiya
failPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log("Error aaya:", err));
