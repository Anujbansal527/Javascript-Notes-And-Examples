// ✅ Hinglish Comments

// 📦 Step 1: Service Worker ko register karo
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js') // 'sw.js' file ko register karo
    .then(reg => {
      console.log("✅ Service Worker Registered", reg); // Agar success ho gaya
    }).catch(err => {
      console.error("❌ Registration Failed", err); // Agar kuch error aaya to
    });
}

// 📲 Step 2: App ko install karne ke prompt ko handle karo
let deferredPrompt;

// 🔔 Jab browser 'install prompt' trigger karta hai
window.addEventListener('beforeinstallprompt', (e) => {
  // ❗Default install popup ko roko
  e.preventDefault();

  // 🧺 Is event ko store karo future use ke liye
  deferredPrompt = e;

  // 👆 Hum apna custom install button create kar rahe hain
  const btn = document.createElement("button");
  btn.innerText = "📲 Install App"; // Button ka text
  document.body.appendChild(btn); // Button ko page par add karo

  // 👉 Jab user button pe click kare
  btn.addEventListener('click', () => {
    btn.style.display = "none"; // Button ko hide karo
    deferredPrompt.prompt();    // Actual browser install prompt dikhao

    // 👤 User ka response handle karo
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('✅ User installed the app'); // User ne install kar liya
      } else {
        console.log('❌ User dismissed the install'); // User ne mana kar diya
      }
      deferredPrompt = null; // Memory cleanup
    });
  });
});
