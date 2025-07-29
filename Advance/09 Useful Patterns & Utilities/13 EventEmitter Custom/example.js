// 📡 Custom EventEmitter Implementation (Pub/Sub Pattern)
// 🔍 Use-case: Custom event handling, decoupled communication, async architecture

class EventEmitter {
  constructor() {
    this.events = {}; // 📦 Events ke liye object store (key: eventName, value: listeners[])
  }

  // 🔔 Register event listener (multiple allowed)
  on(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  }

  // 🔔 Register once-only event listener
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);          // 🔁 Call once
      this.off(event, wrapper);   // ❌ Phir hata do
    };
    this.on(event, wrapper);
  }

  // 📣 Emit event and notify all listeners
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(fn => fn(data)); // 🔁 Sabko call karo
    }
  }

  // ❌ Remove specific listener
  off(event, callback) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(fn => fn !== callback);
  }
}

// 🧪 Test the EventEmitter
const emitter = new EventEmitter();

// 👂 Listener functions
function logger(data) {
  console.log("📝 Logger received:", data);
}

function alertUser(data) {
  console.log("🔔 ALERT:", data);
}

// 📌 Registering multiple listeners to "news" event
emitter.on("news", logger);
emitter.on("news", alertUser);

// ✅ Emit "news" → both listeners will trigger
emitter.emit("news", "🗞️ New JS Update Released!");

// ❌ Remove one listener (alertUser)
emitter.off("news", alertUser);

// ✅ Emit again → only logger will run
emitter.emit("news", "📢 Second notification");

// 🔂 once() listener → sirf ek baar chalega
emitter.once("exit", () => console.log("🚪 Exit called once"));

emitter.emit("exit"); // ✅ Runs
emitter.emit("exit"); // ❌ Won't run again

/*
🌀 FLOW STEPS 

👉 Step 1: emitter.on("event", fn)
    - Events object me array bana ke function add ho jata hai

👉 Step 2: emitter.emit("event", data)
    - Jo bhi functions us event ke sath linked hain, unko call karo with data

👉 Step 3: emitter.off("event", fn)
    - Event list me se specific function ko remove karo

👉 Step 4: emitter.once("event", fn)
    - Pehle on() se wrapper function add hota hai
    - Pehli baar emit hone ke baad off() se listener delete ho jata hai

🧠 Real-world use cases:
✔️ Custom event system in apps (pub-sub)
✔️ Frameworks like React, Vue use similar patterns internally
✔️ Node.js `EventEmitter` bhi isi concept pe based hai
✔️ Useful for messaging, UI updates, logging, analytics triggers

📦 Summary:

| Method      | Description                                |
|-------------|--------------------------------------------|
| on()        | Add listener                               |
| emit()      | Call all listeners with data               |
| off()       | Remove specific listener                   |
| once()      | Listener runs only one time                |

*/

