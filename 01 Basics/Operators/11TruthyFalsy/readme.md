# ✅ JavaScript Truthy & Falsy Values

JavaScript me conditional check (`if`, `while`, etc.) karte time kuch values ko **true** aur kuch ko **false** mana jata hai.

---

## ✅ Falsy Values

Yeh sab **false** treat ki jati hain:

- `false`
- `0`, `-0`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

if (0) console.log("Nope");
if ("") console.log("Nope");

✅ Truthy Values
Baaki sab values ko true mana jata hai:
"hello"
1, -1
[], {}
function(){}

" " (space wala string bhi truthy hai!)

if (" ") console.log("Yes, space is truthy");

if ([]) console.log("Array is truthy");

💡 Interview Questions

### Q1: "" vs " " me farak?
"" is falsy (empty)
" " is truthy (space is content)

### Q2: null == undefined kya true hai?
null == undefined → true (loose equality)
null === undefined → false (strict equality)

