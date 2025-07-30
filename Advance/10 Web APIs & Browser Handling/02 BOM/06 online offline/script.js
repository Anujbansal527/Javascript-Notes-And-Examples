const statusDiv = document.getElementById("status");

// ✅ Function to update status text and color
function updateStatus() {
  if (navigator.onLine) {
    statusDiv.textContent = "✅ You are ONLINE";
    statusDiv.className = "online";
  } else {
    statusDiv.textContent = "❌ You are OFFLINE";
    statusDiv.className = "offline";
  }
}

// 🚀 Initial status check
updateStatus();

// 📡 Event listeners for online/offline
window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
