 let counter = 0; // 🔢 Counter value track karne ke liye
let intervalId = null; // 🆔 Interval ka reference store karenge

const counterBox = document.getElementById("counter");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

// ▶️ START button click event
startBtn.addEventListener("click", () => {
  if (intervalId !== null) return; // Agar already chal raha hai toh dobara start mat karo

  intervalId = setInterval(() => {
    counter++;
    counterBox.textContent = counter; // DOM mein counter update karo
    console.log("⏱️ Running... ", counter);
  }, 1000);
});

// ⏹️ STOP button click event
stopBtn.addEventListener("click", () => {
  clearInterval(intervalId); // Interval ko band karo
  intervalId = null; // reset ID
  console.log("❌ Counter stopped");
});
