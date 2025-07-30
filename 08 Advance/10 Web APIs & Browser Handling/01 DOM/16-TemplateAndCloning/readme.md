 # 🧩 Template & Cloning in JavaScript

## 🔹 1. `<template>` Tag kya hota hai?
- HTML ka invisible block hota hai
- Page mein render nahi hota jab tak JavaScript se activate na karo
- Mostly **dynamic elements generate karne** ke liye use hota hai

```html
<template id="card-template">
  <div class="card">
    <h3>Title</h3>
    <p>Description</p>
  </div>
</template>
```
### 🔹 2. cloneNode() Method
- Kisi bhi node ko copy karta hai

- Deep clone ka option hota hai
```js
const clone = node.cloneNode(true); // true = deep clone with children
```

### 🧠 Real Use-Cases
- Cards, Lists, Tables → Multiple dynamic items insert karne ke liye

- Component style reusable blocks

