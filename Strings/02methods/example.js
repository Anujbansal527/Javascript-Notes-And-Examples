// 📘 JavaScript String Methods - Examples with Hinglish Comments

// 🔠 Case Conversion
let str = "Hello";
console.log(str.toUpperCase());  // "HELLO" => Sab uppercase me
console.log(str.toLowerCase());  // "hello" => Sab lowercase me

// 📏 Trim Spaces
let name = "  Anuj  ";
console.log(name.trim());        // "Anuj" => dono taraf ka space hata diya
console.log(name.trimStart());   // "Anuj  "
console.log(name.trimEnd());     // "  Anuj"

// 🔍 Search & Match
let msg = "JavaScript is cool";
console.log(msg.includes("cool"));     // true => word exist karta hai ya nahi
console.log(msg.indexOf("a"));         // 1 => pehla index
console.log(msg.lastIndexOf("a"));     // 3 => last index
console.log(msg.startsWith("Java"));   // true
console.log(msg.endsWith("cool"));     // true
console.log(msg.match(/is/));          // ['is'] => match result
console.log(msg.search(/cool/));       // 14 => position of match

// ✂️ Slice, Substring, Split
let text = "JavaScript";
console.log(text.slice(0, 4));         // "Java" => 0 to 3
console.log(text.substring(4, 10));    // "Script" => same as slice but no -ve index
console.log(text.substr(4, 6));        // "Script" => deprecated, not recommended
let fullName = "Anuj-Bansal";
console.log(fullName.split("-"));      // ['Anuj', 'Bansal']

// 🔁 Replace & Repeat
let txt = "apple apple banana";
console.log(txt.replace("apple", "orange"));      // "orange apple banana"
console.log(txt.replaceAll("apple", "orange"));   // "orange orange banana"
console.log("ha".repeat(3));                      // "hahaha"

// ➕ Concatenation
let first = "Hello";
let second = "World";
console.log(first + " " + second);        // "Hello World"
console.log(first.concat(" ", second));   // "Hello World"

// 🧱 Character Access
let word = "Anuj";
console.log(word.charAt(1));      // "n" => character at index 1
console.log(word.charCodeAt(0));  // 65 => ASCII of 'A'

// 🧪 Miscellaneous
console.log("javascript".includes("java"));  // true
console.log("Hello".length);                 // 5 => total characters

// Practice: Using methods in real life
let email = "   anuj@gmail.com   ";
let cleaned = email.trim().toLowerCase();
console.log("Cleaned Email:", cleaned); // "anuj@gmail.com"

// Splitting full name
let full = "Anuj Kumar Bansal";
let parts = full.split(" ");
console.log("First Name:", parts[0]); // Anuj
console.log("Last Name:", parts[2]);  // Bansal

// Check valid OTP length
let otp = "123456";
if (otp.length === 6) {
  console.log("OTP is valid");
} else {
  console.log("OTP invalid");
}
