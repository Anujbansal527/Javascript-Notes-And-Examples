# JavaScript Fundamentals: Data Types Explained

Welcome to my repo that explains **JavaScript Data Types** using simple, practical examples with Hinglish comments and explanations.

## 🔗 Topics Covered

1. **🧠 JavaScript Data Types** – Primitive & Non-Primitive
2. **🔄 Type Conversion (Implicit & Explicit)**
3. **🎯 Common Interview Questions (with Hinglish Answers)**
4. **📊 Summary Table and typeof Behavior**

Each file contains:
- ✅ Simple code examples
- 💬 Clear Hinglish comments
- 📘 Real-time console outputs

You can run these using [Node.js](https://nodejs.org/) or directly in the browser's Developer Console.

---

## 🧪 JavaScript Data Types

### ✅ Primitive Types:
- `Number` – e.g., `42`, `3.14`
- `String` – e.g., `'Anuj'`, `"Hello"`
- `Boolean` – e.g., `true`, `false`
- `null` – Intentional empty value
- `undefined` – Variable declared but not assigned
- `Symbol` – Unique identifiers (mostly for object keys)
- `BigInt` – Large integers (e.g. `9007199254740991n`)

### ✅ Non-Primitive (Reference) Types:
- `Object` – e.g., `{ name: "Anuj" }`
- `Array` – e.g., `[1, 2, 3]`
- `Function` – e.g., `function greet() {}`

---

## 🔄 Type Conversion (Coercion)

### 🔸 Implicit Type Conversion (Automatic by JS)

#### ✅ `+` Operator:
- Agar **koi bhi operand string ho**, to JS string concatenation karta hai.
```js
"5" + 1         // "51" → String + Number = String
1 + "5"         // "15" → Number + String = String
"Hello" + 123   // "Hello123"
true + "1"      // "true1"
```

#### ✅ `-`, `*`, `/`, `%` Operators:
- JS tries to convert operands to **numbers**:
```js
"5" - 1         // 4 → String converted to Number
"10" * "2"      // 20
"6" / 2         // 3
"8" % 3         // 2
```

### 🔸 Boolean Conversion:
```js
Boolean("")       // false
Boolean("hello")  // true
Boolean(0)         // false
Boolean(1)         // true
```

### 🔸 Explicit Type Conversion:
```js
Number("123")      // 123
String(100)        // "100"
Boolean(0)         // false
parseInt("42px")   // 42
parseFloat("4.2")  // 4.2
```

---

## 📌 typeof Behavior (with Notes)

| Value              | typeof Result  |
|--------------------|----------------|
| `"Anuj"`           | `string`       |
| `123`              | `number`       |
| `true`             | `boolean`      |
| `undefined`        | `undefined`    |
| `null`             | ⚠️ `object` (JS bug) |
| `Symbol("id")`     | `symbol`       |
| `[]`               | `object`       |
| `{}`               | `object`       |
| `function(){}`     | `function`     |

✅ Use `Array.isArray()` to check if it's an array.

---

## 🔁 null vs undefined vs Symbol

- **undefined** – Jab variable declare kiya ho par koi value assign nahi ki ho (default behavior)
- **null** – Jab developer intentionally variable ko khali set kare
- **Symbol** – Unique value (mostly object keys me use hota hai, har symbol unique hota hai)

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false
```

---

## 🎯 Interview Questions (Data Types)

### 🔸 Q1. JavaScript me kitne types ke data hote hain?
**Ans:** Do types:
- Primitive: String, Number, Boolean, null, undefined, Symbol, BigInt
- Non-Primitive: Object, Array, Function

### 🔸 Q2. typeof null kya deta hai?
**Ans:** `object` deta hai (ye JS ka bug hai). Isko fix nahi kiya gaya for backward compatibility.

### 🔸 Q3. typeof [] kya deta hai?
**Ans:** `object`. Isliye use karo: `Array.isArray([])`

### 🔸 Q4. typeof function(){} kya deta hai?
**Ans:** `function`

### 🔸 Q5. null aur undefined me kya difference hai?
**Ans:**
- `undefined` ➜ Variable declared but value assign nahi ki gayi
- `null` ➜ Developer ne khud value empty set ki

### 🔸 Q6. Symbol kya hai?
**Ans:** Unique and immutable identifier. Mostly use hota hai unique object property key banane me.

### 🔸 Q7. JS me + or - operator se type conversion kaise hota hai?
**Ans:**
- Agar string + number ho ➜ convert ho ke string ban jata hai (concatenation)
- Agar string - number ho ➜ JS string ko number me convert karta hai (math operation)

---

