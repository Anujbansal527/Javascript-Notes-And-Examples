### ❓ What is Callback Hell?
Jab ek function ke andar ek aur callback function, uske andar ek aur...  
**Nested callback ka jungle** ban jata hai — usi ko kehte hain callback hell.

> Ye code **readability**, **maintenance**, aur **debugging** mein dard deta hai 😩

---

### 😵 Example Structure:

```js
firstFunction(function () {
  secondFunction(function () {
    thirdFunction(function () {
      // aur chalta hi jaaye...
    });
  });
});
```

### 🔥 Real-Life Example:
```js
setTimeout(() => {
  console.log("1st task done");
  setTimeout(() => {
    console.log("2nd task done");
    setTimeout(() => {
      console.log("3rd task done");
    }, 1000);
  }, 1000);
}, 1000);
```

### 💣 Problems with Callback Hell:
- Pyramid of Doom (code structure becomes a pyramid)

- Hard to debug and test

- Complex error handling

- No separation of concerns

### ✅ Solutions:
- Promises (next topic!)

- Async / Await

- Modularization


