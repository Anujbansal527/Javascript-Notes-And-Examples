# 🔹 Function Execution Context (FEC)

## 📌 Definition:
Jab bhi JavaScript me **function call** hota hai, ek **naya Execution Context** banta hai sirf us function ke liye. Ye bhi do phases me chalta hai:

---

## 🧠 Function Execution = 2 Phases:

### ✅ 1. **Memory Allocation Phase**
- Function ke andar ke variables ko `undefined` assign hota hai
- Inner function declarations ko memory me store kiya jata hai

### ✅ 2. **Code Execution Phase**
- Line-by-line function code run hota hai
- Values assign hoti hain
- Function ke khatam hote hi uska Execution Context Stack se pop ho jata hai

---

## 📊 Execution Flow:
```js
Global Execution Context (GEC)
↓
Function call → New Function Execution Context (FEC)
↓
Memory Phase → Execution Phase
↓
Return → Pop from Call Stack
```

---

## 📚 Example:

```js
function sayHi(name) {
  var greeting = "Hi";
  console.log(greeting + " " + name);
}
sayHi("Anuj");
```

### 🔍 Behind the scenes:
```js
Memory Phase:
name = undefined
greeting = undefined

Execution Phase:
name = "Anuj"
greeting = "Hi"
console.log("Hi Anuj")
```

### 💡 Important Points:
- Har function call ke liye naya context banta hai

- JS engine call stack ka use karta hai context manage karne ke liye

- Execution khatam hone par context stack se remove ho jata hai

### 📋 Interview Questions:
- Function execution context me memory kis tarah allocate hoti hai?

- FEC banne ke kitne phases hote hain?

- Agar ek function ke andar dusra function call ho to kya hota hai?

### 📌 Real-life Analogy:
- Socho JS code ek kitchen hai, Global Context ek main kitchen hai.
- Jab koi function call hota hai, ek temporary kitchen ban jata hai us function ke liye.
- Kaam khatam? → Kitchen band! (Execution Context Stack se hata diya gaya)




