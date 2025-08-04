const CACHE_NAME = "pwa-cache-v1"; // 🏷️ Cache ka unique naam (versioning ke liye)
const ASSETS = [
  "/",               // 🏠 Homepage
  "/index.html",     // 📄 Main HTML file
  "/script.js",      // 🧠 JavaScript logic
  "/manifest.json",  // 📱 PWA ka manifest
  "/icon.png"        // 🖼️ App icon
];

// 🧱 Install Phase – Jab service worker install ho raha ho
// Yahan hum app ki basic files (shell) ko cache karte hain
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("📦 Caching app shell"); // Console par message
      return cache.addAll(ASSETS);         // Saari important files cache mein save
    })
  );
});

// ✅ Activate Phase – Jab new service worker activate ho
// Yahan hum purane (old) cache ko delete karte hain
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)   // 🔍 Sirf current cache name ko chhodo
          .map(key => caches.delete(key))      // 🗑️ Purane cache ko delete karo
      )
    )
  );
});

// 🌐 Fetch Phase – Jab browser koi resource request kare
// Pehle cache check karo, agar nahi mila to network se fetch karo
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request); // 🧾 Agar cache mein mila to use karo, warna online se lao
    })
  );
});
