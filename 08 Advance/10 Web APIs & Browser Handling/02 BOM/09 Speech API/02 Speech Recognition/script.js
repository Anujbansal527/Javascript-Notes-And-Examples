// ✅ Step 1: SpeechRecognition object define karo
// Ye sirf Chrome aur kuch modern browsers me hi kaam karta hai
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ✅ Step 2: Ek naya recognition instance banao
const recognition = new SpeechRecognition();

// ✅ Step 3: Kuch basic settings set karo
recognition.lang = "en-US";               // Language English rakhi hai (hi-IN likhoge to Hindi detect karega)
recognition.interimResults = false;       // Agar false hai to sirf final result return hoga (live updates nahi milenge)
recognition.maxAlternatives = 1;          // Sirf 1 best match result hi chahiye (accuracy ke liye)


// ✅ Step 4: Output dikhane ke liye HTML element ko select karo
const output = document.getElementById("text");


// 🎙️ Step 5: Jab user mic se bolna shuru kare
function startListening() {
  recognition.start();  // Mic chalu karo
  output.textContent = "🔴 Listening... bolo kuch!";  // User ko status dikhana
}


// 📥 Step 6: Jab speech detect ho jaaye aur result mil jaaye
recognition.onresult = (event) => {
  // ✅ User ne jo bola uska text nikaalo
  const transcript = event.results[0][0].transcript;

  // 📝 Output ko screen pe dikhana
  output.textContent = transcript;

  // 🛠️ Developer ke liye console me bhi print
  console.log("Transcript:", transcript);
};


// 🛑 Step 7: Jab mic band karna ho
function stopListening() {
  recognition.stop(); // Mic band karo

  // 🔕 Status update karo ki mic band ho gaya
  output.textContent += " (⛔ Stopped)";
}


// ⚠️ Step 8: Agar koi error aata hai (jaise mic access block, unsupported language etc.)
recognition.onerror = (event) => {
  // ❌ Error message user ko show karo
  output.textContent = "❌ Error: " + event.error;
};
