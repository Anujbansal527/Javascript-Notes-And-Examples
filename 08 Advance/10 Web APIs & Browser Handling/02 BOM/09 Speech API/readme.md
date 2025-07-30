# 🗣️ Web Speech API – Text-To-Speech (TTS) & Voice Recognition

---

## 🔹 Web Speech API kya hota hai?

- Voice se related kaam ke liye 2 alag APIs milte hain:

1️⃣ **Text-to-Speech (TTS)** → JS se bolne wala feature  
2️⃣ **Speech Recognition** → Voice sunna aur usko text me convert karna

---

## ✅ 1. Text To Speech (TTS)

### 📦 Object: `window.speechSynthesis`
### 📦 Class: `SpeechSynthesisUtterance`

```js
const msg = new SpeechSynthesisUtterance("Hello Anuj!");
speechSynthesis.speak(msg);
```
### 🔧 Methods:
- speechSynthesis.speak(utterance) → Bolta hai

- speechSynthesis.pause() / resume() / cancel()

### ✅ 2. Speech Recognition (🎙️ Voice to Text)
⚠️ Only works in Chrome (and Chromium-based) with proper mic permissions
```js
const recognition = new webkitSpeechRecognition();  // Chrome only
recognition.onresult = (event) => {
  console.log(event.results[0][0].transcript);
};
recognition.start();
```

### 🧠 Use Cases:
- Chatbots

- Voice search

- Form filling using mic

- Read aloud websites (TTS)

### 🔐 Security Note:
- Speech APIs need user permission

- Run only on HTTPS

- May not work on all devices/browsers

