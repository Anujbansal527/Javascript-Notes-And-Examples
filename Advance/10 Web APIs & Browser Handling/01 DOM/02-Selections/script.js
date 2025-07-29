// ✅ ID se element select karna
const heading = document.getElementById("title");
console.log("ID se mila:", heading);

// ✅ Class se multiple elements (HTMLCollection)
const texts = document.getElementsByClassName("text");
console.log("Class se mile (HTMLCollection):", texts);

// ✅ Tag se sabhi <div> elements
const divs = document.getElementsByTagName("div");
console.log("Tag se mile:", divs);

// ✅ querySelector: pehla match return karega
const firstBox = document.querySelector(".box");
console.log("querySelector se mila:", firstBox);

// ✅ querySelectorAll: sabhi match return karega (NodeList)
const allBoxes = document.querySelectorAll(".box");
console.log("querySelectorAll se mile:", allBoxes);

// ✅ NodeList par hum forEach laga sakte hain directly
allBoxes.forEach((box, index) => {
  console.log(`Box ${index + 1} ka content:`, box.innerText);
});
