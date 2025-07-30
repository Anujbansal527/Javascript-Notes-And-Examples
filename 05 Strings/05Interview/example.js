// 📘 Strings: Interview Q&A Examples (JavaScript Only - Strings Focused)

// ✅ 1. Reverse a string
let str = "hello";
let reversed = str.split('').reverse().join(''); // ➤ split string to array, reverse it, join back
console.log("Reversed:", reversed); // olleh

// ✅ 2. Check Palindrome
let str2 = "madam";
let isPalindrome = str2 === str2.split('').reverse().join(''); // ➤ compare with reversed version
console.log("Is Palindrome:", isPalindrome); // true

// ✅ 3. Count vowels
let countVowels = (str) => str.match(/[aeiou]/gi)?.length || 0; // ➤ regex match all vowels (case-insensitive)
console.log("Vowels:", countVowels("hello world")); // 3

// ✅ 4. Anagram check
let isAnagram = (a, b) => a.split('').sort().join('') === b.split('').sort().join(''); // ➤ sort & compare
console.log("Is Anagram:", isAnagram("listen", "silent")); // true

// ✅ 5. Remove Duplicates
let removeDuplicates = (str) => [...new Set(str)].join(''); // ➤ use Set for unique chars
console.log("Without Duplicates:", removeDuplicates("aabbccdde")); // "abcde"

// ✅ 6. Compress String (e.g. aabbbcc → a2b3c2)
function compressString(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) count++;
    else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
console.log("Compressed:", compressString("aaabbbcc")); // a3b3c2

// ✅ 7. Toggle Case
function toggleCase(str) {
  return [...str].map(ch => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()).join('');
}
console.log("Toggle Case:", toggleCase("Anuj123")); // aNUJ123

// ✅ 8. First Non-Repeating Character
function firstNonRepeating(str) {
  let freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1;
  for (let ch of str) if (freq[ch] === 1) return ch;
  return null;
}
console.log("First Unique:", firstNonRepeating("aabbcde")); // c

// ✅ 9. Longest Word in Sentence
function longestWord(sentence) {
  return sentence.split(" ").reduce((a, b) => a.length > b.length ? a : b);
}
console.log("Longest Word:", longestWord("I love JavaScript deeply")); // JavaScript

// ✅ 10. Word Frequency
function wordFreq(str) {
  let freq = {};
  let words = str.toLowerCase().split(" ");
  for (let word of words) freq[word] = (freq[word] || 0) + 1;
  return freq;
}
console.log("Word Frequency:", wordFreq("This is this and that is that"));

// ✅ 11. Capitalize each word
function capitalizeWords(str) {
  return str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}
console.log("Capitalized:", capitalizeWords("hello world js")); // Hello World Js

// ✅ 12. Replace vowels with "*"
let replaced = "hello world".replace(/[aeiou]/gi, '*');
console.log("Replaced Vowels:", replaced); // h*ll* w*rld

// ✅ 13. Convert to Title Case
function toTitleCase(str) {
  return str.toLowerCase().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
console.log("Title Case:", toTitleCase("welcome to javascript")); // Welcome To Javascript

// ✅ 14. Palindrome check (ignore case & space)
function cleanPalindrome(str) {
  let clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return clean === clean.split('').reverse().join('');
}
console.log("Normalized Palindrome:", cleanPalindrome("A man a plan a canal Panama")); // true

// ✅ 15. Reverse words in sentence
function reverseWords(sentence) {
  return sentence.split(' ').reverse().join(' ');
}
console.log("Reverse Words:", reverseWords("JavaScript is awesome")); // awesome is JavaScript

// ✅ 16. Check Subsequence (2-pointer)
function isSubsequence(a, b) {
  let i = 0, j = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) i++;
    j++;
  }
  return i === a.length;
}
console.log("Is Subsequence:", isSubsequence("abc", "aebdc")); // true

// ✅ 17. Max occurring character
function maxChar(str) {
  let map = {}, max = 0, char = '';
  for (let c of str) {
    map[c] = (map[c] || 0) + 1;
    if (map[c] > max) {
      max = map[c];
      char = c;
    }
  }
  return char;
}
console.log("Max Char:", maxChar("aabbbcccddee")); // b
