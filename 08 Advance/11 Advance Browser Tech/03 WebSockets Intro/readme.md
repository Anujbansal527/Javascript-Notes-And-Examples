# 🔌 WebSockets – Real-Time Communication in JS

---

## 📌 Definition:
WebSocket ek protocol hai jo browser aur server ke beech **live, 2-way connection** banata hai — bina bar-bar HTTP request ke.

> Jaise WhatsApp ya stock market live updates — sab WebSocket pe kaam karte hain.

---

## ⚙️ Normal HTTP vs WebSocket

| Feature          | HTTP (Fetch/AJAX)             | WebSocket                    |
|------------------|-------------------------------|------------------------------|
| 🔁 Communication | Request → Response             | **Live 2-way** continuously  |
| 📤 Server Push   | ❌ Not Possible (unless polling) | ✅ Server can push anytime   |
| 🔌 Connection    | Opens-closes per request       | Persistent open connection   |
| 🚀 Use-Cases     | Static data, API calls         | Chats, games, live data      |

---

## 🔁 How WebSockets Work

```text
Browser <===> Server
  ↕  Persistent
  ↔  Real-time Messages
```
- Client connects with server using new WebSocket(url)

- Event listeners set: onopen, onmessage, onclose, onerror

- You can send/receive messages anytime

## 🧠 Real-World Use-Cases
- 💬 Chat apps (WhatsApp, Slack, etc.)

- 📈 Stock ticker / crypto dashboard

- 🛒 Live order tracking / delivery

- 🎮 Multiplayer gaming

## 🧪 Demo: Simple Echo Chat (Client Only)
    We'll make a basic UI:

    - ✅ Connect to a WebSocket echo server

    - ✅ Send message → get echo response

    We'll use public echo WebSocket server for testing:
    wss://echo.websocket.org (or other demo servers)

