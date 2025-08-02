// ✅ DOM elements ko access kar rahe hain
const current = document.getElementById("current"); // yahan current orientation dikhayenge
const status = document.getElementById("status");   // status messages ke liye

// ✅ Current screen orientation dikhane wala function
function showOrientation() {
  // 🔍 Check karo ki screen.orientation support karta hai ya nahi
  if (screen.orientation) {
    current.textContent = "Current Orientation: " + screen.orientation.type; // current orientation ka type dikhao (e.g. portrait-primary)
  } else {
    current.textContent = "❌ Screen Orientation API not supported."; // agar support nahi karta
  }
}

// 🔄 Jab bhi screen ka orientation change ho, usko suno (event listener)
if (screen.orientation) {
  screen.orientation.addEventListener("change", () => {
    showOrientation(); // naye orientation ko update karo
    status.textContent = "🔁 Orientation changed!"; // status me message dikhayo
  });
}

// 🔒 Portrait mode me lock karne wala function
function lockPortrait() {
  screen.orientation
    .lock("portrait") // orientation ko portrait mode me lock karo
    .then(() => {
      status.textContent = "✅ Locked to portrait."; // agar successfully lock ho gaya
    })
    .catch((err) => {
      status.textContent = "❌ Lock failed: " + err.message; // agar error aaye
    });
}

// 🔒 Landscape mode me lock karne wala function
function lockLandscape() {
  screen.orientation
    .lock("landscape") // orientation ko landscape me lock karo
    .then(() => {
      status.textContent = "✅ Locked to landscape."; // agar successfully lock ho gaya
    })
    .catch((err) => {
      status.textContent = "❌ Lock failed: " + err.message; // agar koi error aaye
    });
}

// 🔓 Orientation unlock karne wala function
function unlockOrientation() {
  // check karo ki unlock function available hai ya nahi
  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock(); // orientation ko unlock kar do
    status.textContent = "🔓 Orientation unlocked."; // success message
  } else {
    status.textContent = "❌ Unlock not supported."; // agar unlock support nahi karta
  }
}

// 🟢 Initial load par current orientation show karo
showOrientation(); // page load hote hi current orientation dikhado
