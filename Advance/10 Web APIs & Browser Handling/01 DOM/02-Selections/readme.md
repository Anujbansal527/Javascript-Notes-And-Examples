 ## 🧠 What is DOM Selection?

DOM Selection ka matlab hai: **HTML elements ko JavaScript se dhundhna aur access karna.**  
Phir hum un elements ko manipulate ya unpe events laga sakte hain.

---

## 🔍 Selection Methods in JavaScript

| Method                    | Use Case | Example |
|---------------------------|----------|---------|
| `getElementById()`        | ID se select | `document.getElementById("title")` |
| `getElementsByClassName()`| Class se select (HTMLCollection) | `document.getElementsByClassName("box")` |
| `getElementsByTagName()`  | Tag se select | `document.getElementsByTagName("p")` |
| `querySelector()`         | 1st match (ID/Class/Tag) | `document.querySelector(".box")` |
| `querySelectorAll()`      | All match (NodeList) | `document.querySelectorAll("div.box")` |

> ⚠️ Note: 
> - `getElementById()` ek single element return karta hai.
> - `getElementsByClassName()` aur `querySelectorAll()` multiple elements return karte hain.

---

## 💡 Differences: NodeList vs HTMLCollection

| Property         | NodeList           | HTMLCollection |
|------------------|--------------------|----------------|
| Returned by      | `querySelectorAll()`| `getElementsByClassName()` |
| Live updates?    | ❌ No               | ✅ Yes          |
| Iteration        | `forEach()` works   | Convert to array first |

---