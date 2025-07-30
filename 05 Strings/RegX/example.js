// 🔹 1. Check if string is valid email:
const email = "anuj@gmail.com";
// ✅ RegEx: alphanumeric + @ + domain + .com (.in etc)
const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,4}$/;
console.log(emailPattern.test(email)); // true

// 🔹 2. Validate Indian mobile number (10 digits only starting from 6-9)
const phone = "9876543210";
const phonePattern = /^[6-9]\d{9}$/;
console.log(phonePattern.test(phone)); // true

// 🔹 3. Remove all digits from string
let str1 = "He11o W0r1d";
// ✅ \d matches digits, g = global (all digits)
let result = str1.replace(/\d/g, '');
console.log(result); // Output: Hello Wrd

// 🔹 4. Match all words
let str2 = `I love JavaScript`;
// ✅ \w+ matches word characters, g = global
let words = str2.match(/\w+/g);
console.log(words); // Output: [ 'I', 'love', 'JavaScript' ]

// 🔹 5. Replace multiple spaces with single space
let messy = `This     is  a    test`;
// ✅ \s+ matches 1 or more white spaces
let clean = messy.replace(/\s+/g, ' ');
console.log(clean); // Output: This is a test
