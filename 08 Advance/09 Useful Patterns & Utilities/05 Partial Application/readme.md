# 🧮 Partial Application in JavaScript

---

## 🔰 What is Partial Application?

> Partial Application ek technique hai jisme hum ek function ke **kuch arguments ko pehle se fix** kar dete hain, aur baaki arguments later provide karte hain.

📌 Yeh Currying se milta-julta hai, par yeh **pehle se hi kuch arguments pre-fill** karta hai.

---

## 🔍 Real-World Examples

- 💰 Tax calculator with fixed rate
- 📞 Pre-fill contact info (country code etc.)
- 🎨 Theme or config settings pre-defined

---

## 📊 Currying vs Partial Application

| Feature       | Currying                     | Partial Application              |
|---------------|------------------------------|----------------------------------|
| Flow          | One argument at a time       | Few arguments pre-filled         |
| Return Type   | Chain of functions           | One function with remaining args |
| Example       | `fn(a)(b)`                   | `fnPartial(b)` if a is fixed     |

---

## 🧠 Flow Diagram
```js
original: fn(a, b, c)
partial: fnWithA = partial(fn, a)
usage: fnWithA(b, c)
```

---

## 🛠️ Manual Partial Function

```js
function partial(fn, ...fixedArgs) {
  return function (...laterArgs) {
    return fn(...fixedArgs, ...laterArgs);
  };
}
```

### ✅ Interview Tip
Q: "What’s the difference between Currying and Partial Application?"
A: Currying converts fn(a, b) to fn(a)(b), Partial fixes some arguments and returns fn(b)


