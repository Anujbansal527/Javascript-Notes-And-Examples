### ✅ Definition:
`async` aur `await` Promises ko handle karne ka ek **modern, readable** aur **clean** way hai.

> Promise ke `.then()` / `.catch()` chain ki jagah, hum use karte hain `await` inside an `async` function.

---

### 📌 Syntax:

```js
async function myFunction() {
  let result = await somePromise();
  console.log(result);
}
```

### 🔍 Rules:
- await sirf async function ke andar hi kaam karta hai.

- await execution ko pause karta hai jab tak Promise resolve ya reject na ho.

- Try-Catch block se errors handle karte hain.

### 🔄 Comparison:
```js
// Promises
getData()
  .then(data => process(data))
  .catch(err => console.log(err));

// Async/Await
async function run() {
  try {
    const data = await getData();
    process(data);
  } catch (err) {
    console.log(err);
  }
}
```

### ✅ Benefits:
- Code is more readable (jaise synchronous)

- Better error handling with try...catch

- Suitable for complex workflows

