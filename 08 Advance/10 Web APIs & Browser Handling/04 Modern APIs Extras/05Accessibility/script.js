// ✅ Demo: Alert region update (screen reader will announce)
// 🔔 Yeh element alert role ya aria-live region ke liye hona chahiye taaki screen reader us message ko padhe
const alertBox = document.getElementById("alert-msg");

// ⏳ 2 second baad message update karo
setTimeout(() => {
  alertBox.textContent = "🔔 Form loaded successfully. Please enter your details."; 
  // 🗣️ Agar alertBox me aria-live="polite" ya role="alert" diya hai,
  // toh screen reader is text ko automatically announce karega
}, 2000);
