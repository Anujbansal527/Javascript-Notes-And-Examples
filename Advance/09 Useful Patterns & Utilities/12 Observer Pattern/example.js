// 🧭 Observer Pattern in JavaScript
// 🔍 Use-case: Notification system, pub-sub architecture, event handling, reactive UI

// ✅ Subject (Publisher)
class Subject {
  constructor() {
    this.observers = []; // 👀 Listener functions store honge yahan
  }

  // 🔔 Subscribe: Add listener
  subscribe(fn) {
    this.observers.push(fn);
    console.log("✅ Subscribed:", fn.name);
  }

  // ❌ Unsubscribe: Remove listener
  unsubscribe(fn) {
    this.observers = this.observers.filter(sub => sub !== fn);
    console.log("❌ Unsubscribed:", fn.name);
  }

  // 📢 Notify all subscribed observers
  notify(data) {
    console.log("📢 Notifying observers...");
    this.observers.forEach(fn => fn(data));
  }
}

// 🔁 Observers (Listeners): Functions that react to changes
function logger(data) {
  console.log("📝 Logger Received:", data);
}

function alertBox(data) {
  alert("🔔 Alert: " + data); // UI popup
}

// 🧪 Test the Observer Pattern
const news = new Subject();     // 🎙️ Create a new publisher

news.subscribe(logger);         // 🧾 Add logger as subscriber
news.subscribe(alertBox);       // 🧾 Add alertBox as subscriber

news.notify("🚀 JavaScript Observer Pattern Mastered!"); 
// 🔔 Both logger and alertBox will run

news.unsubscribe(alertBox);     // ❌ Remove alertBox from listeners

news.notify("📢 Only logger will see this."); 
// ✅ Only logger will run now

/*
🌀 FLOW STEPS 

👉 Step 1: `new Subject()` → ek object ban gaya jisme observer list hai

👉 Step 2: `.subscribe(fn)` → observers list me function add ho jata hai
    - logger, alertBox dono add hue

👉 Step 3: `.notify(data)` → har observer ko call karo with data
    - logger("🚀...") → console
    - alertBox("🚀...") → alert

👉 Step 4: `.unsubscribe(alertBox)`
    - observers list me se alertBox hata diya

👉 Step 5: `.notify()` again
    - Ab sirf logger chalega

🧠 Observer Pattern Key Points:

✔️ Real-world use:
    - Newsletters (subscribe/unsubscribe)
    - UI frameworks: React/Vue watch reactivity
    - Custom event systems (like Redux or RxJS)
    - WebSockets/data streams

✔️ Components:
    - Subject = Publisher
    - Observers = Subscribers (functions)
    - notify = Broadcast to all subscribers

✔️ Benefits:
    - Loose coupling (subject doesn't care what subscribers do)
    - Scalable: Add/remove listeners dynamically

*/

