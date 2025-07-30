✅ What is RegEx?
Regular Expressions (RegEx) ek pattern hota hai jisko hum string me search, match, replace, ya validate karne ke liye use karte hain.

JavaScript me RegEx 2 ways se banaya ja sakta hai:
```js
// Using regex literal
const pattern1 = /abc/;

// Using RegExp constructor
const pattern2 = new RegExp("abc");

```

### 🧠 Basic Syntax

| Symbol  | Meaning                  | Example     | Description                           |      |                  |
| ------- | ------------------------ | ----------- | ------------------------------------- | ---- | ---------------- |
| `.`     | Any single character     | `/a.c/`     | aac, abc, etc.                        |      |                  |
| `^`     | Starts with              | `/^a/`      | Matches strings starting with 'a'     |      |                  |
| `$`     | Ends with                | `/z$/`      | Matches strings ending with 'z'       |      |                  |
| `*`     | 0 or more                | `/lo*/`     | Matches 'l', 'lo', 'loo', 'looo' etc. |      |                  |
| `+`     | 1 or more                | `/go+gle/`  | Matches 'gogle', 'google', etc.       |      |                  |
| `?`     | Optional                 | `/colou?r/` | color or colour                       |      |                  |
| `{n}`   | Exactly n times          | `/a{3}/`    | Matches 'aaa'                         |      |                  |
| `{n,}`  | At least n times         | `/a{2,}/`   | aa, aaa, aaaa                         |      |                  |
| `{n,m}` | Between n and m times    | `/a{2,4}/`  | aa, aaa, aaaa                         |      |                  |
| `[]`    | Character set            | `/[aeiou]/` | Vowels                                |      |                  |
| `[^]`   | Negated set              | `/[^0-9]/`  | Non-digits                            |      |                  |
| `\\`    | Escape special character | `/\\./`     | Match literal '.'                     |      |                  |
| \`      | \`                       | OR          | \`/a                                  | b/\` | Match 'a' or 'b' |
| `()`    | Grouping                 | `/(ab)+/`   | One or more 'ab'                      |      |                  |


### String Methods that Use RegEx
| Method      | Description                       |
| ----------- | --------------------------------- |
| `match()`   | Returns array of matched results  |
| `search()`  | Returns index of first match      |
| `replace()` | Replace matched substrings        |
| `test()`    | Returns true/false if match found |
| `split()`   | Splits string based on pattern    |


### ✨ Common RegEx Patterns

| Pattern    | Description                   | Example             |
| ---------- | ----------------------------- | ------------------- |
| `/\\d/`    | Digit (0-9)                   | '1', '5'            |
| `/\\D/`    | Non-digit                     | 'a', '#'            |
| `/\\w/`    | Word char (a-z, A-Z, 0-9, \_) | 'a', 'Z', '1', '\_' |
| `/\\W/`    | Non-word char                 | '%', '!'            |
| `/\\s/`    | Whitespace (space, tab, \n)   | ' '                 |
| `/\\S/`    | Non-whitespace                | 'a', '1'            |
| `/[a-z]/i` | Case-insensitive alphabet     | Matches A to Z      |
