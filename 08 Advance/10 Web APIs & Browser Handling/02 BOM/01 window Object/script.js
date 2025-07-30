 
 // 🔹 Simple alert box
function showAlert() {
  // 👇 Ye ek pop-up show karega with OK button
  alert("👋 Hello! Ye alert window se aaya hai.");
}

// 🔹 Confirm box
function showConfirm() {
  // 👇 Ye user se OK/Cancel puchega → boolean return karega
  const result = confirm("✅ Kya aap is action ko confirm karte ho?");
  document.getElementById("output").textContent =
    result ? "✔️ User ne OK kiya." : "❌ User ne Cancel kiya.";
}

// 🔹 Prompt box
function showPrompt() {
  // 👇 Prompt user se naam puchega
  const name = prompt("👤 Aapka naam kya hai?");
  document.getElementById("output").textContent =
    name ? `👋 Welcome, ${name}` : "❌ Koi naam enter nahi hua.";
}

// 🔹 setTimeout example (one-time delay)
function startTimer() {
  setTimeout(() => {
    alert("⏰ 3 seconds baad ye alert aaya (setTimeout)");
  }, 3000); // 3000ms = 3 seconds
}

// 🔹 setInterval and clearInterval
let intervalId;

function startInterval() {
  let count = 0;
  intervalId = setInterval(() => {
    count++;
    document.getElementById("output").textContent = `🔄 Interval running... ${count}`;
  }, 1000); // Har 1 second me chalega
}

function stopInterval() {
  clearInterval(intervalId);
  document.getElementById("output").textContent = "⏹️ Interval stopped.";
}
