// 🔍 User ke browser/device info ko console me dekhne ke liye:

console.log("🧭 navigator.userAgent:", navigator.userAgent);
// 👉 Browser, OS, engine sab ek string me milega

console.log("💻 navigator.platform:", navigator.platform);
// 👉 User ka OS platform (Windows, Mac, Linux etc.)

console.log("🌐 navigator.language:", navigator.language);
// 👉 User ka preferred browser language (ex: en-US)

console.log("🌐 navigator.languages:", navigator.languages);
// 👉 Browser me set ki gayi languages (array me)

console.log("📶 navigator.onLine:", navigator.onLine);
// 👉 true → online, false → offline (good for offline UI)

console.log("🍪 navigator.cookieEnabled:", navigator.cookieEnabled);
// 👉 Cookies enabled hain ya nahi check karne ke liye

// 📍 Bonus: Check if geolocation is supported
if ("geolocation" in navigator) {
  console.log("📍 Geolocation supported hai ✅");
} else {
  console.log("❌ Geolocation supported nahi hai");
}

// 📸 Bonus: Check if camera/microphone is accessible
if (navigator.mediaDevices) {
  console.log("📷 mediaDevices supported hai ✅");
} else {
  console.log("❌ mediaDevices supported nahi hai");
}
