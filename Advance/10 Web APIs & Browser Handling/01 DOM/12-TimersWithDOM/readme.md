 # ⏱️ Timers with DOM in JavaScript

## 🔹 1. setTimeout()
> Ek baar ke delay ke baad function ko execute karta hai.

```js
setTimeout(() => {
  console.log("Hello after 2 sec");
}, 2000);
```
📌 Use Case: Notification, loader hide, animation delay, etc.

### 🔹 2. setInterval()
Bar-bar repeat karta hai fixed interval pe.
```js
setInterval(() => {
  console.log("Every 1 sec");
}, 1000);
```
📌 Use Case: Clock, countdown timer, polling APIs, etc.

### 🔹 3. clearTimeout() & clearInterval()
Set kiya hua timeout ya interval ko cancel karna
```js
const id = setTimeout(() => {}, 2000);
clearTimeout(id);
```
### 🔹 Real Use-Cases with DOM
- Countdown timer

- Auto-hiding notification

- Start/Stop animation loop

### ⚠️ Important Notes
- setInterval keeps running until you stop it

- Use clearInterval for stopping memory leaks

- Timers are async → run after current stack is done
