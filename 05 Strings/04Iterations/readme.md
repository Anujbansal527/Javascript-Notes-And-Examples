# 🔄 String Iteration in JavaScript

Iteration means **looping through each character** of a string and performing operations like checking, modifying, analyzing, etc.

---

## 🧵 Why Iterate Over Strings?

- To count characters or vowels
- To check for palindromes
- To replace or filter specific characters
- For character transformation (e.g. encryption, compression)

---

## 🔁 Methods to Iterate Over Strings

### 1. **Using `for` Loop**
```js
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
```
### 2. Using for...of
```js
for (let char of str) {
  console.log(char);
}
```
### 3. Using forEach() (with split)
```js
str.split("").forEach((char) => {
  console.log(char);
});
```
### 4. Using map() (with split)
```js
let upper = str.split("").map((char) => char.toUpperCase()).join("");
```

