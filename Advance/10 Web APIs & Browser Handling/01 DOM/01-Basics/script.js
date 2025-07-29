// 📌 Yeh browser ka sabse top-level object hota hai
console.log("Window Object:", window);

// 📌 document bhi window ke andar hi hota hai
console.log("Document Object:", document);

// 📌 Hum ek DOM element ko JS se select kar rahe hain
const heading = document.getElementById("mainHeading");

// 📌 Button click hone par heading change karne ke liye function
function changeHeading() {
  // 👇 Text ko change kar diya JavaScript se
  heading.innerText = "DOM ko hum JS se control kar rahe hain!";

  // 👇 Console me bhi bata diya
  console.log("Heading changed via JS");
}

// ✅ Jab aap page load karte ho, tab document object aapke HTML ka structure JS me available bana deta hai
// ✅ Uske baad hum koi bhi element select kar sakte hain, update kar sakte hain, ya naya add bhi kar sakte hain
