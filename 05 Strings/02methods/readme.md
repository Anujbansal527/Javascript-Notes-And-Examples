# 📘 JavaScript String Methods (with Hinglish Explanation)

---

JavaScript me strings ko manipulate karne ke liye kai **built-in methods** hote hain. Ye methods aapko data cleaning, formatting, searching, slicing jaise tasks me madad karte hain.

---

## 🔠 1. Case Conversion

### ### ✅ `toUpperCase()` & `toLowerCase()`
```js
let str = "Hello";
console.log(str.toUpperCase());  // "HELLO"
console.log(str.toLowerCase());  // "hello"
// ⬆️ String ko uppercase/lowercase me convert karta hai
```

📏 2. Trim Extra Spaces
### ✅ trim(), trimStart(), trimEnd()
```js
let name = "  Anuj  ";
console.log(name.trim());        // "Anuj"
console.log(name.trimStart());   // "Anuj  "
console.log(name.trimEnd());     // "  Anuj"
// ⬆️ Extra spaces hata deta hai (start/end se)
```
### 🔍 3. Searching / Matching
### ✅ includes(), indexOf(), lastIndexOf()
```js
let msg = "JavaScript is cool";
console.log(msg.includes("cool"));        // true
console.log(msg.indexOf("a"));            // 1
console.log(msg.lastIndexOf("a"));        // 3
// ⬆️ includes() check karta hai kya word exist karta hai ya nahi
```
### ✅ startsWith() & endsWith()
```js
console.log(msg.startsWith("Java"));      // true
console.log(msg.endsWith("cool"));        // true
// ⬆️ String kis word se start/end hota hai, uska check
```
### ✅ match() & search()
```js
console.log(msg.match(/is/));             // ['is']
console.log(msg.search(/cool/));          // index of match => 14
// ⬆️ Regular expression se match karta hai
```
### ✂️ 4. Slice / Split / Substring
### ✅ slice(start, end)
```js
let text = "JavaScript";
console.log(text.slice(0, 4)); // "Java"
// ⬆️ Start se end tak slice karta hai (end exclusive)
```
### ✅ substring(start, end)
```js
console.log(text.substring(4, 10)); // "Script"
// ⬆️ Same jaise slice, negative index support nahi karta
```
### ✅ substr(start, length) ❌ (deprecated)
```js
console.log(text.substr(4, 6)); // "Script"
// ⬆️ Deprecated method hai, avoid karna chahiye
```
### ✅ split(separator)
```js
let fullName = "Anuj-Bansal";
console.log(fullName.split("-")); // ['Anuj', 'Bansal']
// ⬆️ String ko array me todta hai separator ke basis pe
```
### 🔁 5. Replace & Repeat
### ✅ replace(), replaceAll()
```js
let txt = "apple apple banana";
console.log(txt.replace("apple", "orange"));       // orange apple banana
console.log(txt.replaceAll("apple", "orange"));    // orange orange banana
// ⬆️ replace() first match ko change karta hai, replaceAll() sabko
```
### ✅ repeat(n)
```js
console.log("ha".repeat(3)); // "hahaha"
// ⬆️ String ko multiple baar repeat karta hai
```
### ➕ 6. Concatenation
### ✅ + and concat()
```js
let first = "Hello";
let second = "World";
console.log(first + " " + second);        // "Hello World"
console.log(first.concat(" ", second));   // "Hello World"
// ⬆️ Strings ko jodne ke do tarike
```
### 🧱 7. Character Access
### ✅ charAt() & charCodeAt()
```js
let word = "Anuj";
console.log(word.charAt(1));      // "n"
console.log(word.charCodeAt(0));  // 65 (Unicode of A)
// ⬆️ Ek character ya uska code (ASCII) return karta hai
```
### 🧪 Miscellaneous
### ✅ includes("")
```js
console.log("javascript".includes("java"));  // true
```
### ✅ length (Property)
```js
console.log("Hello".length); // 5
// ⬆️ String ki length batata hai
```
