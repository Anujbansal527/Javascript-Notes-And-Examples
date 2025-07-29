// 👇 1. Button element select kiya
const btn = document.getElementById("clickBtn");

// ✅ Button pe click hone par alert aur console message aayega
btn.addEventListener("click", () => {
  alert("Button clicked!"); // Pop-up alert
  console.log("Click event trigger hua"); // Console log
});

// 👇 2. Input field select kiya
const input = document.getElementById("textInput");

// ✅ Input event: Har character type karte waqt trigger hota hai
input.addEventListener("input", (e) => {
  console.log("Input value:", e.target.value);
  // Jaise hi user kuch type kare, wo value console me print hogi
});

// 👇 3. Select dropdown select kiya
const dropdown = document.getElementById("dropdown");

// ✅ Change event: Jab bhi koi naya option select hoga
dropdown.addEventListener("change", (e) => {
  console.log("Selected:", e.target.value);
  // Jo value select ki, wo console me dikhegi
});

// 👇 4. Hover box select kiya
const hoverBox = document.getElementById("hoverBox");

// ✅ Mouseover: Jab mouse box ke upar aata hai
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "orange"; // Box ka color orange ho jaata hai
  console.log("Mouse upar gaya");
});

// ✅ Mouseout: Jab mouse box se bahar jaata hai
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue"; // Wapas light blue
  console.log("Mouse bahar gaya");
});

// ✅ Extra: Keyboard event on input field
input.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
  // Jaise hi koi key dabai, wo key console me dikh jaayegi
});
