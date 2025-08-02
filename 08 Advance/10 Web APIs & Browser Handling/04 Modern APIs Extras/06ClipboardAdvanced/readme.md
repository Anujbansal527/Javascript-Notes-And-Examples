# 📋 Clipboard API (Advanced)  

Modern Clipboard API allow karta hai JavaScript ko **direct clipboard se text read aur write** karne ka access – bina execCommand() ke.

---

## 🎯 Objective

- ✅ Text copy karna clipboard mein
- ✅ Clipboard se text read karna (browser se paste lena)
- ✅ Permission manage karna (required in some cases)

---

## 📦 Use Cases

- "Copy to clipboard" buttons (e.g., share links, coupon codes)
- Paste from clipboard (e.g., importing text)
- Clipboard-based mini tools (e.g., translators, analyzers)

---

## 🔁 Flow

1. User input lo  
2. Copy button se `navigator.clipboard.writeText()` use karo  
3. Paste button se `navigator.clipboard.readText()` call karo  
4. Output box me show karo result

---

## 🔧 Syntax

### ✅ Copy text to clipboard
```js
navigator.clipboard.writeText("Some Text").then(() => {
  console.log("Copied!");
});
```
## ✅ Read text from clipboard
```js
navigator.clipboard.readText().then((text) => {
  console.log("Pasted:", text);
});
```
## 📌 Notes
Clipboard API sirf secure origins (HTTPS or localhost) pe kaam karta hai

Kabhi-kabhi paste permission prompt aata hai (browser dependent)

readText() fails silently agar user permission na de

## 🧪 Demo
- Text type karo → "📋 Copy" click karo → clipboard mein chala jaye

- "📥 Paste" click karo → clipboard se text read ho