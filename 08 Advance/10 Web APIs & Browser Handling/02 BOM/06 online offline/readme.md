# 🌐 Online/Offline API

The **Navigator Online API** allows web apps to detect if the user is connected to the internet or not.

## 📦 Key Properties

- `navigator.onLine`  
  → Returns `true` if connected to internet, otherwise `false`.

## 🧠 Event Listeners

| Event     | Description                      |
|-----------|----------------------------------|
| `online`  | Fires when connection is restored |
| `offline` | Fires when connection is lost     |

---

## 🛠 Use Cases
- Show user a warning when disconnected
- Disable forms or actions requiring internet
- Auto-sync when back online (like Gmail, PWA)

---

## ⚠️ Note
- May not be 100% reliable (e.g. connected to a router with no internet)
