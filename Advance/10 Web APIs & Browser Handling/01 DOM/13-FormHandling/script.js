 const form = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const errorBox = document.getElementById("errorBox");

// 🧠 Form submit hone pe listener lagaya
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 🔴 Page reload se bacha rahe hain

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // 🛑 Check: Kya dono fields bhare hain?
  if (name === "" || email === "") {
    errorBox.textContent = "❌ Name aur Email required hai!";
    return;
  }

  // 🛑 Check: Kya email valid format mein hai?
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorBox.textContent = "⚠️ Please enter valid email!";
    return;
  }

  // ✅ Sab sahi hai → Form process karo
  errorBox.textContent = "";
  console.log("✅ Form Submitted:", { name, email });

  // ✨ UI Reset karo
  form.reset();
});
