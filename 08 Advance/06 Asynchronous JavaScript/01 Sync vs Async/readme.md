
### ✅ Synchronous JS
- Code line by line execute hota hai.
- Jab tak ek line complete nahi hoti, agli start nahi hoti.

### ✅ Asynchronous JS
- Long-time tasks ko background mein bhej diya jata hai.
- JS execution rukti nahi hai.
- Examples: setTimeout, fetch(), DOM Events

### 💡 Example Flow:
```js
console.log("1");
setTimeout(() => console.log("2"), 1000);
console.log("3");
Output:
```

```js
1  
3  
2  (after 1 second)
```