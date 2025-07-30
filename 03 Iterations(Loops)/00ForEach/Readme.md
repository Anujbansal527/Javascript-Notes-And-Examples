# 🔁 JavaScript `forEach()` Loop

`forEach()` JavaScript ka **array method** hai jo array ke har element pe ek function run karta hai.

---

## 🔹 Syntax

```js
array.forEach(function(element, index, array) {
  // code
});

Ya arrow function se:
array.forEach((element, index, array) => {
  // code
});


### 🔹 Parameters:
Parameter	    Description
element	        Current item of array
index	        Current index (optional)
array	    Whole array (optional)

### 🔹 Flowchart:
Start
  ↓
Pick first element from array
  ↓
Run callback on element
  ↓
Go to next element
  ↓
Repeat until end of array

### 📌 Use Cases:
Looping over arrays
Access element with index
Array transformation (with side effects)

### ⚠️ Limitations of forEach()
Limitation	                          Explanation
❌ Can't use break or continue	    No control flow, unlike for
❌ Not async/await friendly	        Doesn’t work well with await
❌ Doesn't return new array	        Use map() for transformation

### 🧠 Interview Qs
### Q: forEach() vs map()?
### Q: Can we stop a forEach() loop in between?
### Q: Difference between forEach() and for...of?
### Q: Is forEach() async?

---

```js