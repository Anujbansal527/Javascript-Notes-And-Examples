 # 🧠 Closures & Memory Management (Garbage Collection)

## 🔹 Recap: What is Garbage Collection (GC)?

Garbage Collection ek automatic process hota hai JS engine me, jo **unused memory** ko free karta hai.

> Agar kisi variable/obj ka reference kahin nahi hai → GC use hata deta hai memory se.

---

## ❗ Problem with Closures:

Agar kisi closure ne outer variable ka reference **bina use ke** hold kar liya, toh wo memory me bana rahega – GC use clean nahi karega.

---

## 🔸 Example (Memory Leak):

```js
function attachHandler() {
  let bigData = new Array(1000000).fill('🔥');  // huge memory
  document.getElementById("btn").addEventListener("click", function () {
    console.log("Button clicked!");
  });
}
```
- bigData ka koi use nahi hai inside closure

- But closure uska reference hold kar raha hai

- Result: bigData memory me bana rahega even after attachHandler is done

### ✅ Solution:
```js
function attachHandler() {
  let bigData = new Array(1000000).fill('🔥');
  let handler = function () {
    console.log("Button clicked!");
  };
  document.getElementById("btn").addEventListener("click", handler);

  // ❗ After usage, remove reference
  bigData = null; // ✨ Eligible for GC
}
```

### 🔹 Closure Causes Memory Leaks When:
- DOM elements hold closures

- setInterval holds closures

- Unnecessary outer variables held

- Not clearing references (event listeners, timers)

### 🔹 Flow Chart:
```js
Closure holds reference to outer scope
↓
Unused variable remains in memory
↓
Garbage collector cannot free it
↓
Memory usage grows → performance drop
```

### ✅ Tips to Avoid Closure-Related Memory Leaks:
- Remove event listeners when not needed

- Use let x = null to free unused vars

- Avoid storing heavy data inside closures unless necessary

- Use WeakMap/WeakRef for safe references (advanced)

### 🔍 Interview Tip:
Q: How can closures cause memory leaks in JavaScript?
➡️ “If a closure retains a reference to variables no longer needed, they won’t be garbage collected. Especially in DOM events or setInterval.”





