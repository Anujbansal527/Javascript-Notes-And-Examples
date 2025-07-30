# 🔁 JavaScript `for...in` Loop

`for...in` loop ka use hota hai kisi object ke **keys (properties)** pe iterate karne ke liye.  
Ye loop **enumerable properties** ko cover karta hai.

---

## 🔹 Syntax

```js
for (let key in object) {
  // object[key] access hota hai
}

### 🔹 Flowchart
Start
  ↓
Pick next key from object
  ↓
Run block using object[key]
  ↓
Repeat until all keys covered

### 📌 Iterable vs Enumerable?
for...of → works on iterables (values: Array, String, Map)
for...in → works on enumerable keys (Object, Array index)

### 🔹 Real-Life Example
Ghar ke har member ka naam aur role batana
"name: Anuj, role: admin"

### 📌 Use Cases
Traverse through object keys
Debug object properties
Loop through array indexes (not recommended)

### ⚠️ Common Mistakes
Mistake	                        Explanation
Using on array for value	    Gives index, not value
Modifying object during loop	Can cause bugs
Looping over inherited props	Use hasOwnProperty() to avoid that

### 🧠 Interview Qs
### Q: for...in vs for...of?
### Q: Can we use for...in on arrays?
### Q: How to avoid inherited properties in for...in?
### Q: Does order matter in for...in?

### ✅ Pro Tip
Always use for...in only for objects.
For arrays, use for or for...of for better readability and control.
---

```js