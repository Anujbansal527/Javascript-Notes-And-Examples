// 📘 Strings: Basic Examples in JavaScript

// ✅ 1. String Declaration
let str1 = "Hello";        // Double quote
let str2 = 'World';        // Single quote
let str3 = `Hi ${str1}`;   // Backtick (Template literal)

console.log(str1); // Hello
console.log(str2); // World
console.log(str3); // Hi Hello

// ✅ 2. String Indexing (0-based)
let name = "Anuj";
console.log(name[0]); // A
console.log(name[3]); // j
console.log(name[10]); // undefined (index out of range)

// ✅ 3. Length Property
console.log("Length of name:", name.length); // 4

// ✅ 4. Strings are Immutable
name[0] = "B"; // ❌ This won't change the original string
console.log("Still same name:", name); // Anuj

name = "Banuj"; // ✅ Instead, assign a new string
console.log("Updated name:", name); // Banuj

// ✅ 5. Escape Sequences
let quote = 'I\'m learning JavaScript';
let dialog = "He said \"Hello!\" to her.";
let path = "C:\\Users\\Anuj";

console.log(quote);  // I'm learning JavaScript
console.log(dialog); // He said "Hello!" to her.
console.log(path);   // C:\Users\Anuj

// ✅ 6. Template Literals & Multiline
let age = 22;
let message = `My name is ${name}
and I am ${age} years old.`;

console.log(message);
/*
Output:
My name is Banuj
and I am 22 years old.
*/

// ✅ 7. typeof string
console.log(typeof "hello"); // "string"
console.log(typeof name);    // "string"

// ✅ 8. Unicode Characters and Emojis
let emoji = "😊";
console.log("Emoji:", emoji); // 😊
console.log("Emoji length:", emoji.length); // 2 (⚠ depends on Unicode)

// ✅ 9. Whitespace string
let blank = " ";
console.log("Length of blank:", blank.length); // 1
console.log("Is blank:", blank === " ");       // true

// ✅ 10. Concatenation
let greet = "Hello" + " " + "Anuj";
console.log("Greeting:", greet); // Hello Anuj

// ✅ 11. Using new String() (Not Recommended)
let objStr = new String("Test");
console.log(objStr);         // [String: 'Test']
console.log(typeof objStr);  // object ⚠️

// ✅ 12. Comparing strings
let a = "apple";
let b = "banana";
console.log(a < b); // true (lexicographically)

// ✅ 13. String with numbers
console.log("10" + 5); // "105" (string + number => string)
console.log("10" - 5); // 5    (coercion: string converted to number)

// ✅ 14. Multiline string without backtick (❌ Wrong way)
let broken = "Line1
Line2"; // ❌ SyntaxError

// ✅ Correct way: Use backticks for multiline
let multi = `Line1
Line2`;
console.log(multi);

// ✅ 15. String interpolation with expressions
let x = 10, y = 20;
console.log(`Sum is ${x + y}`); // Sum is 30
