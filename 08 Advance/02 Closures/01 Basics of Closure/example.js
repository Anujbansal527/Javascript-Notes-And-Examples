// 🔹 Closure ka Simple Example

// ✅ Ek function ke andar agar dusra function return hota hai,
//    aur wo inner function outer function ke variable ko access karta hai,
//    to usse "Closure" kehte hain.

function greetUser() {
  let user = "Anuj";  // 👉 ye variable outer function ka hai

  // 🔁 Inner function return ho raha hai
  // 👇 Ye function user ko yaad rakhta hai (Closure banata hai)
  return function () {
    console.log("Hello " + user);
  };
}

// ✅ greetUser() call hota hai → user = "Anuj" create hota hai
// ✅ Inner function return hota hai, jise hum greet variable me store karte hain
let greet = greetUser();  // greetUser call hua, user bana, inner function return hua

// ⚡ greet() jab call karenge to wo closure ki wajah se user = "Anuj" yaad rakhta hai
greet()
