 # 🔔 Notification API 

Notification API allow karta hai browser ko **native system notifications** bhejne – jaise tum WhatsApp ya Gmail ka popup dekhte ho!

---

## 🎯 Objective

- Browser permission mangna
- Notification show karna with title, body, icon
- User ke click events handle karna (optional)

---

## 📦 Use Cases
- Chat/message alerts
- Daily reminders
- News updates
- Push notifications in PWAs

---

## 🔁 Flow

1. Check karo browser Notification support karta hai ya nahi  
2. User se permission maango  
3. Permission `granted` ho to notification dikhayo  
4. (Optional) Click/close handle karo

---

## 🔧 Syntax

### ✅ Check support
```js
if ("Notification" in window) {
  // supported
}
```
## ✅ Ask permission
```js
Notification.requestPermission().then((perm) => {
  console.log(perm); // "granted", "denied", or "default"
});
```
## ✅ Show notification
```js
new Notification("Hello!", {
  body: "Ye message Anuj ne bheja hai!",
  icon: "icon.png"
});
```
## 📌 Notes
- Sirf https sites pe kaam karta hai (localhost allowed)

- Notification tab band hone ke baad bhi dikh sakta hai (in PWA)

- User ke allow/deny karne ke baad bar bar permission nahi maangni chahiye

## 🧪 Demo: Message Notification
- User button dabaye → Notification dikhe

- Agar permission nahi mili ho to pehle allow maange
