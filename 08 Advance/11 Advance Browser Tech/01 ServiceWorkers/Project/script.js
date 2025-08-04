 // 📦 Step 1: Service Worker ko register karo agar browser support karta hai
if ('serviceWorker' in navigator) { // ✅ Check karo ki browser service worker support karta hai ya nahi

  // 📂 'sw.js' file ko register karo
  navigator.serviceWorker.register('sw.js')
    .then(reg => {
      // ✅ Agar registration successful ho gaya to ye message console me dikhayega
      console.log("✅ Service Worker Registered", reg);
    })
    .catch(err => {
      // ❌ Agar registration me koi error aaye to usse console me dikhaye
      console.error("❌ Service Worker Failed", err);
    });

} else {
  // 😢 Agar browser service worker support nahi karta to ye message dikhaye
  console.log("😢 Service Worker not supported in this browser");
}
