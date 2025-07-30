 # 📡 Custom EventEmitter in JavaScript

---

## 🔰 What is an EventEmitter?

> EventEmitter ek **Pub-Sub (Publish/Subscribe)** system hai jahan ek object **event register**, **fire**, aur **unsubscribe** kar sakta hai.

---

## 🎯 Real Life Examples:

- 📩 Button click → `onClick` listener
- 🔔 Notification bell → subscribe & get updates
- 📦 Node.js: `eventEmitter.on("data")`, `.emit("data")`
- 🧠 Chat app: join → get messages → leave

---

## 🧱 Core Methods

| Method        | Description |
|---------------|-------------|
| `on(event, cb)`      | Event ke liye callback register karo |
| `emit(event, data)`  | Event trigger karke sab listeners ko notify karo |
| `off(event, cb)`     | Callback ko unregister karo |
| `once(event, cb)`    | Sirf ek baar ke liye listen karo |

---

## 🔄 Flowchart

```mermaid
User -->|on| EventEmitter -->|store| Event
User -->|emit| EventEmitter -->|call| all callbacks
User -->|off| EventEmitter -->|remove| callback
```

### ✅ Interview Tip:
“Custom EventEmitter is a user-defined PubSub pattern for modular, decoupled event communication.”

### ✅ Benefits:
✅ Modular communication
✅ Loose coupling
✅ Event-driven code
✅ Fully reusable in UI, backend, games, etc.

