 // ✅ Looping using for
let str = "JavaScript";
for (let i = 0; i < str.length; i++) {
  console.log(`Char at ${i}:`, str[i]);
}

// ✅ Looping using for...of
for (let char of str) {
  console.log("Char:", char);
}

// ✅ Using forEach (convert string to array first)
str.split("").forEach((char, idx) => {
  console.log(`Char ${idx}:`, char);
});

// ✅ Count vowels in string
let count = 0;
for (let char of str.toLowerCase()) {
  if ("aeiou".includes(char)) count++;
}
console.log("Total vowels:", count); // Output: 3

// ✅ Reverse a string
let reversed = str.split("").reverse().join("");
console.log("Reversed:", reversed); // tpircSavaJ

// ✅ Toggle case (a → A, A → a)
let toggle = "";
for (let ch of str) {
  toggle += ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase();
}
console.log("Toggled case:", toggle); // jAVAsCRIPT

// ✅ Compress string (e.g., aabbbccc → a2b3c3)
function compress(s) {
  let result = "", count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) count++;
    else {
      result += s[i - 1] + count;
      count = 1;
    }
  }
  return result;
}
console.log("Compressed:", compress("aabbbccc")); // a2b3c3
