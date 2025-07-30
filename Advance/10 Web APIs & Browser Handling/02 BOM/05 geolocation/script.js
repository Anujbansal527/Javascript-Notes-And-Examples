// 🔍 Output dikhane ke liye element
const output = document.getElementById("output");

function getLocation() {
  // 📦 Step 1: Check karo ki browser geolocation support karta hai ya nahi
  if ("geolocation" in navigator) {
    // 🕐 User ko message dikhana jab tak permission allow kare
    output.textContent = "📡 Fetching location... please allow permission.";

    // ✅ Step 2: Location fetch karne ke liye getCurrentPosition use karte hain
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 🔓 Step 3 (Success): User ne permission de di, ab location mil gayi
        const lat = position.coords.latitude;       // 🌐 Latitude (X-axis)
        const lon = position.coords.longitude;      // 🌐 Longitude (Y-axis)
        const accuracy = position.coords.accuracy;  // 🎯 Kitni accurate location hai (in meters)

        // ✅ Result dikhana output element mein
        output.textContent = `✅ Location found:
        📍 Latitude: ${lat}
        📍 Longitude: ${lon}
        🎯 Accuracy: ${accuracy} meters`;
      },
      (error) => {
        // ❌ Step 4 (Error): Agar permission deny ho gayi ya location unavailable ho to error handle karo
        switch (error.code) {
          case error.PERMISSION_DENIED:
            // 🛑 User ne location access deny kar diya
            output.textContent = "❌ User denied the request for Geolocation.";
            break;
          case error.POSITION_UNAVAILABLE:
            // ❗ System location dikhane mein fail ho gaya
            output.textContent = "❌ Location information is unavailable.";
            break;
          case error.TIMEOUT:
            // ⌛ Location fetch karne mein zyada time lag gaya
            output.textContent = "❌ The request timed out.";
            break;
          default:
            // ❓ Unknown error jo above cases mein nahi aati
            output.textContent = "❌ An unknown error occurred.";
        }
      }
    );
  } else {
    // 🚫 Agar browser geolocation support hi nahi karta
    output.textContent = "🚫 Geolocation is not supported in your browser.";
  }
}
