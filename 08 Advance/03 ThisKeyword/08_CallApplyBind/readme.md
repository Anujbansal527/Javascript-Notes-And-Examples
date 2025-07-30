 
 # 🔹 `call`, `apply`, and `bind` with `this`

## 📌 Definition:
JavaScript me `call`, `apply`, aur `bind` teen powerful methods hain jo aapko function ka `this` manually set karne ki ability dete hain.

Yeh teen methods kisi function pe **context (this)** ko control karne ke liye use kiye jaate hain.

---

## ✅ Syntax:

```js
func.call(thisArg, arg1, arg2, ...);
func.apply(thisArg, [arg1, arg2, ...]);
const newFunc = func.bind(thisArg);
```

### 🧠 Difference Table:
 | Method  | Use-case                        | Executes instantly? | Pass arguments as      |
| ------- | ------------------------------- | ------------------- | ---------------------- |
| `call`  | Run function with custom `this` | ✅ Yes               | List (`arg1, arg2`)    |
| `apply` | Same as call, but array args    | ✅ Yes               | Array (`[arg1, arg2]`) |
| `bind`  | Set `this` but call later       | ❌ No (returns func) | List (`arg1, arg2`)    |

### ✅ Real World Use-case:
- Function borrowing between objects

- Event handling in classes (React etc.)

- Delaying function execution with fixed this

### ⚠️ Special Note:
- bind returns new function without executing it. Useful in event handlers.

### 💬 Interview Tip:
"call and apply immediately execute the function with new this, but bind returns a new function where this is permanently bound."