 # ✅ JavaScript Optional Chaining (`?.`)

Optional Chaining ka use tab hota hai jab aapko deeply nested properties ya methods access karni ho **without getting an error** if something is `undefined` or `null`.

---

## 🔹 Syntax:

```js
object?.property
object?.[expression]
object?.method?.()

### 🔹 Flow Diagram:

Check: object?.prop
  |
  ├── If object is not null/undefined → Access property
  └── Else → Return undefined without throwing error


### 🔹 Example:
const user = {
  name: "Anuj",
  address: {
    city: "Indore"
  }
};

console.log(user?.address?.city);       // ✅ Indore
console.log(user?.profile?.bio);        // ✅ undefined (no error)

### 📌 Use Cases
Nested API response check
Avoiding crash when optional property is missing
Safely calling functions or accessing arrays

### 🧠 Interview Insight
### Q: Kya optional chaining use karne se performance better hoti hai?
**A**: Slightly — but mainly it's about avoiding runtime crashes and improving code safety.

### Q: Difference between ?. and &&?
**A**:
?. avoids error if something is null/undefined
&& checks existence manually

user && user.profile && user.profile.name  // Old way
user?.profile?.name                       // New way (cleaner)

---

```js