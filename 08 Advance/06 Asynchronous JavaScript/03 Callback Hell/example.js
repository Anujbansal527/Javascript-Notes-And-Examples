console.log("🌟 Start"); // Pehle yeh sync line print hoti hai

// 🔽 Yeh hai callback hell ka structure – nested setTimeouts
setTimeout(() => {
  console.log("✅ 1st kaam complete"); // 1 sec ke baad chalta hai

  setTimeout(() => {
    console.log("✅ 2nd kaam complete"); // pehle ke baad 1 sec

    setTimeout(() => {
      console.log("✅ 3rd kaam complete"); // fir 1 sec baad

      setTimeout(() => {
        console.log("✅ 4th kaam bhi complete"); // fir 1 sec baad
      }, 1000);

    }, 1000);

  }, 1000);

}, 1000);

console.log("🌟 End"); // Yeh bhi sync hai, turant chalega

/* 
🔴 Problem: Callback Hell
- Yeh code bahut deeply nested hai
- Read karna mushkil ho jata hai
- Maintain karna mushkil ho jata hai
- Error handling aur flow samajhna hard ho jata hai
- Agar 10 steps hote toh pura jungle ban jaata (Pyramid of Doom 😨)
*/

/* ✅ Solution: 
- Promises
- Async/Await
- Named functions (to break nesting)
*/

/*
output
🌟 Start
🌟 End
(wait 1s) → ✅ 1st kaam complete
(wait 1s) → ✅ 2nd kaam complete
(wait 1s) → ✅ 3rd kaam complete
(wait 1s) → ✅ 4th kaam bhi complete

*/