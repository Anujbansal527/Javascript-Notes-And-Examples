// 🧰 Utils Toolbox – Modern JS Utility Functions

const Utils = {
  // 🔡 Capitalize first letter
  capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),

  // ✅ Email validator (basic)
  isEmail: (str) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str),

  // 📦 Flatten array (deep)
  flattenArray: (arr) => arr.flat(Infinity),

  // 🧪 Deep clone object
  deepClone: (obj) => JSON.parse(JSON.stringify(obj)),

  // ❔ Check if empty (array, string, object, or falsy)
  isEmpty: (val) => {
    if (Array.isArray(val) || typeof val === "string") return val.length === 0;
    if (typeof val === "object" && val !== null) return Object.keys(val).length === 0;
    return !val;
  },

  // 🕒 Debounce function
  debounce: (fn, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // ⏱️ Throttle function
  throttle: (fn, delay) => {
    let last = 0;
    return function (...args) {
      const now = Date.now();
      if (now - last >= delay) {
        last = now;
        fn.apply(this, args);
      }
    };
  },

  // 🎨 Random Hex Color Generator
  randomHexColor: () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,

  // 🆔 Generate random ID
  generateID: (length = 6) => Math.random().toString(36).substr(2, length),

  // 🍱 Chunk array into smaller groups
  chunkArray: (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
};

// 🧪 Example Usage
console.log("Capitalize:", Utils.capitalize("anuj")); // Anuj
console.log("Email Valid:", Utils.isEmail("anuj@test.com")); // true
console.log("Flatten:", Utils.flattenArray([1, [2, [3]]])); // [1, 2, 3]
console.log("Clone:", Utils.deepClone({ a: 1 })); // {a: 1}
console.log("Chunked:", Utils.chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2],[3,4],[5]]
console.log("Random Color:", Utils.randomHexColor()); // e.g., #e4f12a
console.log("Generated ID:", Utils.generateID()); // e.g., x3lg8j

/*

✅ Step 1: Utils ek simple JS object hai — jisme multiple helper functions defined hain

| Function         | Kya karta hai?                             |
|------------------|---------------------------------------------|
| capitalize()     | Pehle letter ko uppercase karta hai         |
| isEmail()        | Basic email format check karta hai          |
| flattenArray()   | Nested array ko ek single flat array banata hai |
| deepClone()      | Deep copy banata hai (no reference link)    |
| isEmpty()        | Empty array, string, object, falsy detect karta hai |
| debounce()       | Delay ke baad fn ko run karta hai (typing)  |
| throttle()       | Time gap maintain karta hai fn ke beech     |
| randomHexColor() | Random hex color generate karta hai         |
| generateID()     | Short random string/ID return karta hai     |
| chunkArray()     | Array ko chhote parts (chunks) me todta hai |

✅ Step 2: Har function reusable hai — no dependencies
✅ Step 3: Code clean hai, no global pollution, easy to maintain

📦 Real-World Use Cases:

- Forms → debounce(), isEmail()
- UI → throttle(), chunkArray()
- Themes → randomHexColor()
- APIs → generateID(), deepClone()
- Lists → flattenArray(), isEmpty()

🛠️ Bonus Tip:
Agar tu isse module banana chahe:
```js
export default Utils; // ES6
module.exports = Utils; // CommonJS
```




*/