// ✅ Step 1: Text area ko access karo jisme user ne kuch likha hai
const textArea = document.getElementById("text");

// 🔊 Step 2: speak() function — Jab user chaahta hai ki text bolkar sunai de
function speak() {
  // 🎤 Step 2.1: SpeechSynthesisUtterance object banao jisme user ka text hoga
  const msg = new SpeechSynthesisUtterance(textArea.value);

  // 🛠️ Step 2.2: Optional settings set karo
  msg.lang = "en-US";     // 🗣️ Language English rakhi hai (hi-IN likhoge to Hindi bolega)
  msg.rate = 1;           // 🚀 Speed normal hai (0.1 to 2 allowed)
  msg.pitch = 1;          // 🎼 Voice ka pitch normal (0 to 2 allowed)

  // 🗣️ Step 2.3: Browser bolna start kare
  speechSynthesis.speak(msg);
}

// ⏸️ Step 3: pause() function — Agar bolte waqt pause karna ho
function pause() {
  // 📍 Speech ko temporarily pause kar do
  speechSynthesis.pause();
}

// ▶️ Step 4: resume() function — Pause ke baad wapas chalu karne ke liye
function resume() {
  // 🔁 Resume the paused speech
  speechSynthesis.resume();
}

// 🛑 Step 5: cancel() function — Speech ko completely stop karne ke liye
function cancel() {
  // ❌ Abhi jo speech bol raha hai use cancel kar do
  speechSynthesis.cancel();
}
