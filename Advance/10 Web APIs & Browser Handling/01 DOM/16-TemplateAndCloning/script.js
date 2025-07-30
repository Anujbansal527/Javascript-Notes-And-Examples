 const addBtn = document.getElementById("addCard");
const container = document.getElementById("container");
const template = document.getElementById("card-template");

// 🟩 Button click pe naya card clone hoke add hoga
addBtn.addEventListener("click", () => {
  // 🧱 Template ke content ko clone karo
  const clone = template.content.cloneNode(true); // true = deep clone

  // 📝 Custom title and description dalne ke liye
  clone.querySelector(".card-title").textContent = "🚀 Dynamic Card";
  clone.querySelector(".card-desc").textContent = "Yeh card JavaScript se aaya hai!";

  // 📥 Container mein insert karo
  container.appendChild(clone);
});
