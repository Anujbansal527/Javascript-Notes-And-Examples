 // ✅ DOM elements ko select kar rahe hain
const video = document.getElementById("video"); // jahan video stream dikhayenge
const status = document.getElementById("status"); // status message dikhane ke liye

// 🎥 Camera access karne wala function
function startCamera() {
  // 🔍 Step 1: Sabse pehle check karo ki browser mediaDevices API ko support karta hai ya nahi
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    status.textContent = "🚫 Browser camera support nahi karta."; // agar support nahi hai toh message dikhao
    return; // aage ka code mat chalao
  }

  // 🙏 Step 2: User se camera permission maango aur agar mil jaaye toh stream dikhado
  navigator.mediaDevices
    .getUserMedia({ video: true }) // sirf video stream chahiye (audio nahi)
    .then((stream) => {
      video.srcObject = stream; // 📺 Stream ko video element me set kar do
      status.textContent = "✅ Camera chalu ho gaya!"; // success message dikhao
    })
    .catch((err) => {
      // ❌ Agar user ne permission deny ki ya koi aur error aayi
      console.error("Error:", err); // error ko console me print karo debugging ke liye
      status.textContent = "❌ Camera access fail: " + err.message; // user ko error message dikhado
    });
}
