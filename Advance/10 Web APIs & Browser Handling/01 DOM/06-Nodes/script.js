 // 👇 Parent container jisme hum changes karenge
const container = document.getElementById("container");

// ✅ Function: Naya element create karna aur add karna
function createElement() {
  // 1️⃣ Naya paragraph create kiya
  const newPara = document.createElement("p");
  // 2️⃣ Usme text dala
  newPara.innerText = "Yeh paragraph JS se create hua hai!";
  // 3️⃣ Usse container ke andar add kiya
  container.appendChild(newPara);

  console.log("Naya element create aur append kiya");
}

// ✅ Function: Existing element ko remove karna
function removeElement() {
  const oldPara = document.getElementById("oldPara");
  if (oldPara) {
    container.removeChild(oldPara);
    console.log("Old element remove kiya");
  } else {
    console.log("Old paragraph already remove ho chuka hai");
  }
}

// ✅ Function: Element ko replace karna
function replaceElement() {
  const oldPara = document.getElementById("oldPara");
  if (oldPara) {
    // Naya paragraph banaya
    const replacement = document.createElement("p");
    replacement.innerText = "Yeh naya paragraph hai jo replace hua hai";
    // Replace kiya
    container.replaceChild(replacement, oldPara);
    console.log("Element replace kiya");
  } else {
    console.log("Kuch replace karne ke liye nahi mila");
  }
}
