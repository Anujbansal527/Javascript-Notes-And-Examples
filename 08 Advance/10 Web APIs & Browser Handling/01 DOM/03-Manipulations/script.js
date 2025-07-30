// 👇 Ye heading element ko select kar rahe hain
const mainText = document.getElementById("mainText");

// 📌 Function: Button dabane pe heading ka text change karenge
function changeText() {
  // innerText sirf visible text change karta hai
  mainText.innerText = "Text JS se change hua!";
  console.log("innerText se content change kiya");
}

// 👇 Input element select kar rahe hain
const inputBox = document.getElementById("inputBox");

// 📌 Function: Input box ka value JS se update karna
function updateInput() {
  // input ka value set kar diya
  inputBox.value = "Yeh JS se update hua!";
  console.log("Input value JS se change ki gayi");
}

// 👇 HTML inject karne ke liye element select
const htmlInject = document.getElementById("htmlInject");

// 📌 Function: innerHTML se HTML code inject karna
function injectHTML() {
  htmlInject.innerHTML = "<i>Yeh italic text hai</i> <b>aur bold bhi!</b>";
  console.log("innerHTML se dynamic HTML add kiya");
}
