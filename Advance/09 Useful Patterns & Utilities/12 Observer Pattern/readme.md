# 👁️‍🗨️ Observer Pattern in JavaScript

---

## 🔰 What is Observer Pattern?

> Observer Pattern ek aisa design pattern hai jisme **ek object (subject)** ke paas multiple **observers (subscribers)** hote hain. Jab subject me change hota hai, wo sabko notify karta hai.

---

## 🎯 Real World Example:

- 🛎️ Bell bajte hi 10 log react karte hain  
- 🧾 Email notifications to subscribers  
- 🔄 Live data updates in UI (e.g., stock ticker)  
- 🧠 React/Redux re-renders based on state

---

## 🧱 Flow

```mermaid
  Subject --> Observer1
  Subject --> Observer2
  Subject --> Observer3
```
1. Subject: Main data holder

2. Observer: Functions listening to changes

3. Subject keeps a list of Observers

4. When subject updates → notify all observers


### 📦 Components
| Part          | Role                        |
| ------------- | --------------------------- |
| Subject       | Stores data, maintains list |
| Observer      | Registered listener         |
| subscribe()   | Add listener                |
| unsubscribe() | Remove listener             |
| notify()      | Call all observers          |



