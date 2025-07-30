# ⚡ Static vs Instance Methods & Properties in JS

JavaScript mein class ke methods ya properties do tareeke ke ho sakte hain:

---

## 🔸 1. Instance Methods/Properties:

- Har object ke liye naya instance banta hai.
- `this` keyword se access hota hai.
- Object ke reference se hi call kiya ja sakta hai.

```js
class Car {
  constructor(name) {
    this.name = name; // Instance property
  }

  drive() {
    console.log(`${this.name} is driving 🚗`);
  }
}

const c1 = new Car("BMW");
c1.drive(); // ✅ Valid
```

### 🔹 2. Static Methods/Properties:
- Class ke level par hota hai, object ke nahi.

- static keyword se define hota hai.

- Direct class se call hota hai, object se nahi.

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 7)); // ✅ 12
```

### 🚫 Invalid Usage:
```js
const m = new MathUtils();
m.add(3, 4); // ❌ Error: m.add is not a function
```

### 📍 When to Use?
| Use Case                 | Type     |
| ------------------------ | -------- |
| Object-specific behavior | Instance |
| Utility/helper functions | Static   |

### 🧠 Tip:
- static methods ka this class ko refer karta hai, object ko nahi.

- Use them for shared logic, utilities, or singleton patterns.