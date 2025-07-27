# 🔹 Lexical Environment & Scope Chain

## ✅ Lexical Environment:
Lexical ka matlab hota hai **"jaha likha gaya hai"**.  
JavaScript me har function ya block ka ek **Lexical Environment** hota hai jo define karta hai:
- Uske **local memory**
- Aur uska **outer (parent) environment**

```js
function outer() {
  let a = 10;
  function inner() {
    console.log(a); // inner ko a ka access hai kyunki wo uske lexical scope me hai
  }
  inner();
}
```
### 🔁 Jab function banaya jata hai (not call):
- Tab uska Lexical Environment fixed ho jata hai

- Wo function bina call hue bhi outer variables ka access "remember" karta hai

### ✅ Scope Chain:
- Jab JavaScript kisi variable ko use karta hai, wo:

- Pehle local scope me dekhta hai

- Nahi mila to outer environment me jata hai

- Jab tak Global scope tak nahi pahuchta, tab tak check karta rehta hai

### 🧠 Visual Representation:
```js
Global Scope
   ↓
outer()
   ↓
inner()
   ↓
Looks for variable → Local → Parent → Global

```

### 🔁 Nested Function Example:
```js
function outer() {
  var x = 100;
  function inner() {
    console.log(x); // Lexical Environment ke through access
  }
  inner();
}
outer(); // Output: 100

```

### ❗Note:
- Lexical Environment is created during Memory Phase

- Each Execution Context has a Lexical Environment

- Scope chain is formed using Lexical Environment chaining

### 📋 Interview Questions:
- Lexical Environment kya hota hai?

- Scope chain kis concept par based hai?

- JS me variable access kaise resolve hota hai?

- Kya inner function outer variable ko access kar sakta hai?

### 🧠 Real-Life Analogy:
Socho tum ek ghar me ho jaha tumhare paas apna bag (local memory) hai.
Agar kuch nahi milta tumhare bag me, to mummy ka bag check karte ho (outer scope), fir dadaji ka (global).





