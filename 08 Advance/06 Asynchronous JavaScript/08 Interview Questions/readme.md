# 🔹 Asynchronous JavaScript Interview Questions 

---

### 1. What is the difference between synchronous and asynchronous JavaScript?

**Answer:**  
- **Synchronous:** Code ek line me ek ke baad ek run hota hai, matlab jab tak ek task complete na ho, doosra start nahi hota.  
- **Asynchronous:** Code non-blocking hota hai, kuch tasks background me chalte hain (jaise network requests, timers), aur jab wo ready ho jate hain tab callback ya promise execute hota hai, bina main thread block kiye.

---

### 2. Explain the concept of Callback and Callback Hell. Why do callbacks cause problems?

**Answer:**  
- **Callback:** Ek function ko dusre function ke andar argument ke roop me pass karna jise jab async task complete ho jaye tab call kiya jata hai.  
- **Callback Hell:** Jab callbacks nested (andar andar) ho jate hain, toh code unreadable, hard to maintain aur debug karna mushkil ho jata hai.  
- **Problem:** Deep nesting, error handling tough, aur code flow samajhna complex ho jata hai.

---

### 3. What is a Promise? Explain its states and why we use it over callbacks?

**Answer:**  
- **Promise:** Ek object jo future me asynchronous operation ke result ko represent karta hai.  
- **States:**  
  - *Pending* (waiting),  
  - *Fulfilled* (success),  
  - *Rejected* (failure).  
- **Why use over callbacks:** Promises chaining aur better error handling dete hain, code clean hota hai aur callback hell avoid hota hai.

---

### 4. How does async/await improve Promise handling?

**Answer:**  
- `async/await` se promises ko synchronous jaisa likh sakte hain, jisse readability improve hoti hai.  
- `await` promise resolve hone tak wait karta hai bina callback chains ke.  
- Error handling `try/catch` se hoti hai, jo easier hota hai.

---

### 5. What is the Event Loop? How does it work in JavaScript?

**Answer:**  
- Event Loop JavaScript ka mechanism hai jo asynchronous code ko handle karta hai.  
- Yeh continuously check karta hai ki call stack empty hua ya nahi, agar empty hua toh task queues (microtask/macrotask) me se functions ko call stack me dalta hai.  
- Isse async tasks ko execute karna possible hota hai bina main thread block kiye.

---

### 6. Explain Microtask and Macrotask queues. Which one executes first and why?

**Answer:**  
- **Microtask queue:** Promises ke `.then()`, `MutationObserver`, `queueMicrotask` ke callbacks jahan store hote hain.  
- **Macrotask queue:** `setTimeout`, `setInterval`, I/O callbacks yahan jate hain.  
- **Execution order:** Microtasks always Macrotasks se pehle run karte hain because event loop microtask queue ko priority deta hai taaki asynchronous operations jaldi complete ho jayein.

---

### 7. Consider this code snippet, what will be the output and why?

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

```

### Answer:
Output:
```js
Start  
End  
Promise  
Timeout
```

### Explanation:

- console.log('Start') aur console.log('End') synchronous hain toh wo turant execute hote hain.

- Promise.then() microtask queue me jata hai aur setTimeout() macrotask me.

- Event loop pehle microtask queue ko empty karta hai isliye 'Promise' pehle print hota hai.

- Last me setTimeout ka callback run hota hai.

### 8. Can we use await outside of an async function? Explain.
### Answer:

- Nahi, await sirf async function ke andar hi valid hota hai.

- Agar bahar use karne ki koshish karo to syntax error aata hai.

- Recent versions (top-level await in modules) me thoda alag behavior hai, par normal JS me nahi chalti.

### 9. How is error handling done in async/await?
### Answer:

- async/await me errors ko handle karne ke liye try/catch block use hota hai.

- Promise reject hone par await us error ko throw karta hai, jise catch me pakda jata hai.

### 10. What happens if Microtask queue keeps adding more Microtasks infinitely?
### Answer:

- Microtask queue kabhi empty nahi hoti, toh Macrotasks kabhi execute nahi hote.

- Isse event loop block ho jata hai aur browser freeze ya crash kar sakta hai.

- Infinite microtask loop se avoid karna chahiye.

# Others 

### Explain “Pyramid of Doom” and how Promises solve it.
- Pyramid of Doom matlab callback ke andar callback, nested code jo indent ke wajah se pyramid shape me dikhai deta hai, jo messy aur hard to maintain hota hai.

- Promises chaining se code flat, readable, aur manageable hota hai, jisse pyramid avoid hota hai.

### Why does setTimeout(fn, 0) not execute immediately?
- setTimeout(fn, 0) bhi ek macrotask banata hai jo tabhi execute hota hai jab call stack empty ho jaye aur microtask queue bhi empty ho.

- JavaScript single-threaded hai, isliye timers minimum delay ke baad run hote hain, immediate nahi.


### Difference between .then() chaining and async/await?
- .then() chaining me promises ko callback ke form me handle karte hain, jo kabhi kabhi long chains me complex lag sakta hai.

- async/await syntax cleaner aur synchronous jaisa lagta hai, jisse code readability aur maintenance easy hoti hai.