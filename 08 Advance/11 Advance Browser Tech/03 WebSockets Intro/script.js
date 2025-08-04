// 📡 Step 1: WebSocket connection banayein
const socket = new WebSocket('wss://ws.postman-echo.com/raw');  // 🔁 Public echo server ka use ho raha hai

// 🧱 DOM elements le rahe hain
const outputDiv = document.getElementById('output');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('sendBtn');

// 📞 onopen – jab WebSocket connection successfully establish ho jaye
socket.addEventListener('open', () => {
  outputDiv.innerHTML += "<p>✅ Connected to WebSocket server!</p>"; // UI mein connection status dikhate hain
});

// 📩 onmessage – jab server se koi message receive hota hai
socket.addEventListener('message', (event) => {
  outputDiv.innerHTML += `<p><strong>🔁 Echo:</strong> ${event.data}</p>`; // Server ka reply (echo) UI par dikhate hain
});

// ❌ onerror – agar WebSocket mein koi error aaye
socket.addEventListener('error', (err) => {
  outputDiv.innerHTML += "<p>❌ Error occurred in WebSocket</p>"; // UI par error message dikhate hain
});

// 📤 Jab user "Send" button par click kare
sendBtn.addEventListener('click', () => {
  const msg = messageInput.value; // 📝 User ke input se message lete hain
  if (msg.trim()) {
    socket.send(msg);  // ✉️ Server ko message bhejte hain
    outputDiv.innerHTML += `<p>📤 You: ${msg}</p>`; // Apna message bhi UI mein dikhate hain
    messageInput.value = ''; // Input box ko clear kar dete hain
  }
});
