# 🌀 Debouncing in JavaScript

---

## 🔰 What is Debouncing?

> Debouncing ek technique hai jisme hum function ko tabhi call karte hain jab user ne input dena **band kar diya ho** — kuch time ke liye.

Matlab agar user **bar-bar kuch type ya scroll** kar raha hai, toh hum uss function ko repeatedly **call nahi** karte — **wait karte hain ki user ruk jaaye**.

---

## 🎯 Real-World Example

- 🔍 Search bar me har character type par API call naa ho  
- 🧮 Window resize ya scroll event par bar-bar calculations naa ho  
- 🛑 Form validations user ke rukne ke baad hi chalein  

---

## 🔧 How It Works

Debounce ek **timer set karta hai**, aur har nayi event ke saath **purani timer cancel karke nayi lagata hai**. Agar user ruk jaata hai (say, 500ms ke liye), toh function execute ho jata hai.

---

## 🧠 Flowchart Style Logic
```js
User types --> Clear previous timeout --> Set new timeout (e.g. 500ms)
|
--> If user stops for 500ms --> Run function
```
---

## 🛠️ Syntax / Structure

```js
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

```

###  🧪 Use Case Example
```js
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", debounce(function (e) {
  console.log("Searching for:", e.target.value);
}, 500));
```

###  Interview Question
Q: "What is the difference between Debounce and Throttle?"
A: Debounce waits till user stops triggering the event. Throttle runs function at regular interval.

