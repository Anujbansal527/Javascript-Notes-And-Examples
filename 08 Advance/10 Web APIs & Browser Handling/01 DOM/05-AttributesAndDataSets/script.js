 // 👇 Image element select kiya
const img = document.getElementById("mainImage");

// ✅ getAttribute se src aur alt read kiya
console.log("Image src:", img.getAttribute("src"));
console.log("Alt text:", img.getAttribute("alt"));

// ✅ setAttribute se naya src laga diya
img.setAttribute("src", "https://via.placeholder.com/200");
console.log("Naya image src set kiya");

// 👇 Link select kiya
const link = document.getElementById("link");

// ✅ Link ko update kiya
link.setAttribute("href", "https://www.google.com");
link.innerText = "Go to Google";

// 👇 Button with data-* attributes
const infoBtn = document.getElementById("infoBtn");

// ✅ Dataset ka use: custom attributes ko access karna
infoBtn.addEventListener("click", () => {
  // 👇 Custom data attributes ko read kiya
  const userId = infoBtn.dataset.userId;
  const role = infoBtn.dataset.role;

  console.log("User ID:", userId);
  console.log("Role:", role);
});
