# 📋 Clipboard API

The **Clipboard API** allows web apps to programmatically **copy** and **paste** text to/from the system clipboard.

---

## 📌 Use Cases
- "Copy to clipboard" buttons
- Paste from clipboard into forms
- Auto-copy shareable links
- Developer tools copying logs, tokens, etc.

---

## 🔁 Flow (Optional)
1. User enters/selects text or clicks a button
2. JavaScript uses `navigator.clipboard.writeText()` or `readText()`
3. Text is copied to/pasted from the clipboard
4. Show success/failure message

---

## 🧪 Syntax

### ✅ Copy to Clipboard:
```js
navigator.clipboard.writeText("some text")
```
✅ Read from Clipboard:
```js
navigator.clipboard.readText().then((text) => {
  console.log("Pasted: ", text);
});
```
### ⚠️ Notes
- Requires user interaction (like a click)

- Must be served over HTTPS

- Works in modern browsers only

### 🎤  Example
"User clicks a 'Copy Link' button, the app copies a referral link to clipboard. Then user can paste it in WhatsApp."
