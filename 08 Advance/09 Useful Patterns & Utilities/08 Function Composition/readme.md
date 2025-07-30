 # 🔗 Function Composition in JavaScript

---

## 🔰 What is Function Composition?

> Function Composition ka matlab hai: **multiple chhoti functions ko combine** karna ek single function banane ke liye, jo sequence me run hoti hain.

🎯 Mathematically:
```js
(g(x)) = h(x)
```

---

## 🧠 Why Use Function Composition?

✅ Code reusability  
✅ Clean & readable flow  
✅ Follows “Single Responsibility” principle  
✅ Easy to test and debug

---

## 🔍 Real-World Analogy

Imagine ek photo filter app:
- crop → grayscale → compress → watermark  
Yeh sab steps ko hum ek hi function me compose kar sakte hain:
```js
const finalImage = compose(watermark, compress, grayscale, crop)(input);
```

### 🛠️ Compose Function Logic
```js
const compose = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => fn(acc), x);

//or

const pipe = (...fns) => (x) =>
  fns.reduce((acc, fn) => fn(acc), x);

```

### 🧠 Compose vs Pipe
| Feature | `compose()`           | `pipe()`           |
| ------- | --------------------- | ------------------ |
| Order   | Right → Left          | Left → Right       |
| Flow    | `compose(f3, f2, f1)` | `pipe(f1, f2, f3)` |
| Output  | Same                  | Same               |



