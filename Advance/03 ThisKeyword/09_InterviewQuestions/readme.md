 # 🔹 `this` Keyword — Interview Level Questions

## 📌 Objective:
Iss section me aapko `this` ke tricky and confusing use-cases dikhaye jaayenge jo interviews me confuse karne ke liye pooche jaate hain.

---

## 💡 Pattern to Solve:
1. Identify execution context
2. Function type: arrow vs regular?
3. `call`, `bind`, `apply`?
4. `strict mode` on ya off?
5. Is method directly called from object?

---

## 🧪 Top Tricky Questions:

### 🔸 Q1: What will be the output?

```js
const obj = {
  name: "Anuj",
  show: function () {
    console.log(this.name);
  },
};

const ref = obj.show;
ref(); // ❓
```

### 🔸 Q2: Arrow vs regular in object
```js
const user = {
  name: "Anuj",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  },
};

user.regular(); // ✅ "Anuj"
user.arrow();   // ❌ undefined
``` 

### 🔸 Q3: bind() and immediate call
```js
function show() {
  console.log(this.name);
}
const person = { name: "Bansal" };
show.bind(person); // ❌ nothing shown
✅ Ans: bind returns a function, doesn’t execute

``` 

### 🔸 Q4: call inside object method
```js
const obj = {
  name: "Anuj",
  show: function () {
    function inner() {
      console.log(this.name);
    }
    inner.call(this);
  },
};
obj.show(); // ✅ Anuj
``` 

### 🔸 Q5: setTimeout inside object
```js
const user = {
  name: "Anuj",
  show: function () {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  },
};
user.show(); // ❌ undefined
```
✅ Fix: Use .bind(this) or arrow function.
