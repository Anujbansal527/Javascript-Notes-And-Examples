 // 👇 Heading select kar rahe hain jiska hum style change karenge
const title = document.getElementById("title");

// ✅ Direct style change using element.style
function changeColor() {
  // 👇 Inline style add kar rahe hain
  title.style.color = "green";
  title.style.fontSize = "28px";
  console.log("Color aur font size change kiya inline style se");
}

// ✅ Class add karna using classList.add()
function addHighlight() {
  title.classList.add("highlight");
  console.log("Highlight class add kiya");
}

// ✅ Toggle karna class ko: agar lagi hai toh hata dega, warna add karega
function toggleDark() {
  title.classList.toggle("dark");
  console.log("Dark mode toggle kiya");
}
