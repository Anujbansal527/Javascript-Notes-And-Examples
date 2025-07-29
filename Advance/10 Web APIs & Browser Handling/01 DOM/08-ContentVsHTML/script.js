// 👇 Main element select kiya
const box = document.getElementById("contentBox");

// ✅ Saare content types ko console me print karenge
function logContent() {
  console.clear(); // Console ko clean rakhen for better readability

  console.log("🔹 innerText:");
  console.log(box.innerText); 
  // Output: "Hello 🌍"
  // Reason: Ye sirf visible content dikhata hai. Hidden span skip ho gaya.

  console.log("🔹 textContent:");
  console.log(box.textContent); 
  // Output: "Hello Hidden World 🌍"
  // Reason: Ye pura text dikhata hai, even if it's hidden with CSS.

  console.log("🔹 innerHTML:");
  console.log(box.innerHTML); 
  // Output: "Hello <span class="hidden">Hidden World</span> 🌍"
  // Reason: Ye andar ka full HTML + tags dikhata hai.

  console.log("🔹 outerHTML:");
  console.log(box.outerHTML); 
  // Output: "<div id="contentBox">Hello <span class="hidden">Hidden World</span> 🌍</div>"
  // Reason: Ye poora element + uska HTML dikhata hai.
}

// ✅ innerHTML se pura content change kar dena
function updateContent() {
  box.innerHTML = "<b>Naya content</b> <i>JavaScript se aaya hai!</i> 🚀";
  console.log("✅ innerHTML se content replace kiya gaya.");
}
