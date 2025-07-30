 // 🟨 Parent element select karo
const ul = document.getElementById("list");

// ✅ Event Delegation apply kar rahe hain ul ke level par
ul.addEventListener("click", function(e) {
  // 🔍 Check karo ki click kisi <li> par hua hai
  if (e.target.tagName === "LI") {
    console.log("✅ Clicked on item:", e.target.textContent);
    // 💡 Example: kisi element ko highlight karo
    e.target.style.backgroundColor = "#c8e6c9";
  }
});
