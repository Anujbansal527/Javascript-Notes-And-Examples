 // ✅ Output dikhane ke liye HTML element le rahe hain jahan hum status ya message dikhayenge
const status = document.getElementById("status");

// 🔔 Notification dikhane wala main function
function showNotification() {
  // 🛑 Step 1: Sabse pehle check karo ki browser Notification API ko support karta hai ya nahi
  if (!("Notification" in window)) {
    status.textContent = "🚫 Notification API not supported in this browser."; // agar support nahi karta toh message dikhado
    return; // aage ka code run mat karo
  }

  // ✅ Step 2: Check karo ki user ne pehle se permission di hui hai ya nahi
  if (Notification.permission === "granted") {
    sendNotification(); // agar di hai toh direct notification bhej do
  } 
  // ❓ Agar user ne abhi tak permission deny nahi ki hai (yaani na haan bola na naa)
  else if (Notification.permission !== "denied") {
    // 🙏 Step 3: User se permission maang lo
    Notification.requestPermission().then((perm) => {
      if (perm === "granted") {
        sendNotification(); // agar permission mil gayi toh notification bhej do
      } else {
        status.textContent = "❌ Permission denied!"; // agar user ne mana kar diya
      }
    });
  } 
  else {
    // 🚫 Agar user ne pehle se hi notifications block kar rakhe hain
    status.textContent = "❌ Notifications are blocked by the user.";
  }
}

// 📤 Ye function actual mein notification create karta hai
function sendNotification() {
  const notification = new Notification("📬 Hello Anuj!", {
    body: "Ye ek notification demo hai!", // notification ka message body
    icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png" // ek icon dikhane ke liye
  });

  // 🖱️ Jab user notification pe click kare tab kya karna hai
  notification.onclick = () => {
    status.textContent = "✅ Notification clicked!"; // status update kar do
  };
}
