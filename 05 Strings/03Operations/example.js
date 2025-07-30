 // 🔧 JavaScript String Operations with Hinglish Comments

let first = "Anuj";
let last = "Bansal";

// ✅ Concatenation (jodna)
let full = first + " " + last;
console.log("Full Name (+):", full); // "Anuj Bansal"

console.log("Full Name (concat):", first.concat(" ", last)); // "Anuj Bansal"

// ✅ Character access
console.log("First letter:", first[0]);        // 'A'
console.log("Char at pos 2:", first.charAt(2)); // 'u'

// ✅ Case conversion
console.log("Upper:", full.toUpperCase()); // ANUJ BANSAL
console.log("Lower:", full.toLowerCase()); // anuj bansal

// ✅ Trimming
let messy = "   Hello World   ";
console.log("Trim:", messy.trim());       // "Hello World"
console.log("Trim Start:", messy.trimStart()); // "Hello World   "
console.log("Trim End:", messy.trimEnd());     // "   Hello World"

// ✅ Replace and ReplaceAll
let text = "apple banana apple";
console.log("Replace:", text.replace("apple", "orange")); // "orange banana apple"
console.log("ReplaceAll:", text.replaceAll("apple", "kiwi")); // "kiwi banana kiwi"

// ✅ Slicing
let lang = "JavaScript";
console.log("Slice(0,4):", lang.slice(0, 4));    // Java
console.log("Substring(4):", lang.substring(4)); // Script

// ✅ Split string into array
let sentence = "Anuj,Bansal,Developer";
let arr = sentence.split(",");
console.log("Split Array:", arr); // ['Anuj', 'Bansal', 'Developer']

// ✅ Repeat
console.log("Ha".repeat(3)); // "HaHaHa"

// ✅ Includes, indexOf, search
let str = "JavaScript is awesome!";
console.log("Includes 'awesome':", str.includes("awesome")); // true
console.log("Index of 'Script':", str.indexOf("Script"));    // 4
console.log("Search 'is':", str.search("is"));               // 11

// ✅ Escape characters
let escaped = "He said, \"Hello\".\nNew Line.";
console.log(escaped);
/*
He said, "Hello".
New Line.
*/

// ✅ Converting values to string
let num = 123;
console.log("Using toString:", num.toString()); // "123"
console.log("Using String():", String(true));   // "true"
