// 🔒 CACHE_NAME constant - hum is naam se cache create karenge
const CACHE_NAME = 'offline-notes-v1';

// 📦 Ye wo files hain jo hum cache karna chahte hain jab app load ho
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/script.js',
  '/assets/style.css',
  '/assets/app.js'
];

// 🧱 Step 1: Jab service worker install hota hai
// Is event ke andar hum essential files ko cache karte hain
self.addEventListener('install', (event) => {
  console.log("🛠️ Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME) // ✅ Hum apna cache open kar rahe hain
      .then(cache => {
        console.log("📦 Caching files...");
        return cache.addAll(ASSETS_TO_CACHE); // ✅ Saari files ko cache mein daal rahe hain
      })
  );
});

// ✅ Step 2: Jab service worker activate hota hai
// Is step mein hum purane (old) caches ko delete karte hain (cleanup)
self.addEventListener('activate', (event) => {
  console.log("⚙️ Service Worker activated");
  event.waitUntil(
    caches.keys().then(keys => {
      // 🔁 Sirf wahi cache rakhenge jo current version ka ho
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME) // ❌ Agar koi purana cache hai to
            .map(key => caches.delete(key))    // 🗑️ Usse delete kar do
      );
    })
  );
});

// 🌐 Step 3: Jab koi request (fetch) hoti hai
// Pehle cache se data dene ki koshish karenge, agar nahi mila to network se laayenge
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // 🔁 Agar request cache mein mil gaya to use return karo
      // ❌ Agar cache mein nahi mila to network se fetch karo
      return response || fetch(event.request);
    }).catch(() => {
      // 🚫 Agar na cache se mila, na network se mila
      // To custom response dikhayenge
      return new Response("Offline and resource not available");
    })
  );
});
