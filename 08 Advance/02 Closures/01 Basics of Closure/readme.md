# 🔹 Basics of Closure

## ✅ Definition

Closure tab banta hai jab ek function apne **outer lexical environment** ke variables ko access karta hai, chahe outer function pehle hi execute ho chuka ho.

---

## ✅ Example Breakdown

```js
function greetUser() {
  let user = "Anuj";
  return function () {
    console.log("Hello, " + user);
  }
}
let greet = greetUser();
greet();  // Hello, Anuj
```
- user variable greetUser ke scope me hai.

- Inner function us user ka reference save kar leta hai – isey hi closure kehte hain.

### ✅ Key Points:
- Har function ke pass apne scope ke saath outer scope ka bhi access hota hai.

- Yeh scope chain ke through hota hai.

- Jab tak inner function zinda hai, outer variables bhi zinda rahenge.


