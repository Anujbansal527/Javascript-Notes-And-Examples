 // 📘 Strings: Interview Q&A Examples (JavaScript)

// ✅ 1. Reverse a string
const str1 = "hello";
const reversed = str1.split("").reverse().join(""); // Step 1: string ko char array me convert kiya, Step 2: reverse(), Step 3: join back
console.log("Reversed:", reversed); // olleh

// ✅ 2. Palindrome check
function isPalindrome(s) {
  const rev = s.split("").reverse().join(""); // String ko reverse kiya
  return rev === s; // Original aur reversed same hai to true
}
console.log("Is Palindrome:", isPalindrome("madam")); // true

// ✅ 3. Count vowels
function countVowels(str) {
  let count = 0;
  for (let ch of str.toLowerCase()) {
    if ("aeiou".includes(ch)) count++; // Vowel check kiya
  }
  return count;
}
console.log("Vowels:", countVowels("Anuj Bansal")); // 4

// ✅ 4. Anagram check
function isAnagram(a, b) {
  return a.split('').sort().join('') === b.split('').sort().join(''); // dono string ko sort karke compare kiya
}
console.log("Is Anagram:", isAnagram("listen", "silent")); // true

// ✅ 5. Remove duplicates using Set
const nums = [1, 2, 2, 3];
const unique = [...new Set(nums)]; // Set duplicates hata deta hai, spread operator se array bana liya
console.log("Unique:", unique); // [1, 2, 3]

// ✅ 6. Compress string like aabbbccc → a2b3c3
function compress(s) {
  let res = "", count = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) count++; // same char mila to count++
    else {
      res += s[i - 1] + count; // char + uska count add karo
      count = 1; // reset count
    }
  }
  return res;
}
console.log("Compressed:", compress("aabbbccc")); // a2b3c3

// ✅ 7. Toggle case
function toggleCase(s) {
  return s
    .split("")
    .map(ch => ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()) // uppercase hai to lowercase karo, aur vice versa
    .join("");
}
console.log("Toggle Case:", toggleCase("HeLLo")); // hEllO

// ✅ 8. First non-repeating character
function firstNonRepeat(str) {
  let freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1; // frequency count
  for (let ch of str) if (freq[ch] === 1) return ch; // jo pehla 1 bar aaya ho
  return null;
}
console.log("First Non-Repeating:", firstNonRepeat("abaccdeff")); // b

// ✅ 9. Longest word in a sentence
function longestWord(sentence) {
  return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, ""); // sabse lamba word nikaala
}
console.log("Longest Word:", longestWord("I love JavaScript very much")); // JavaScript

// ✅ 10. Count word frequency
function wordFreq(str) {
  const words = str.toLowerCase().split(" ");
  let freq = {};
  for (let word of words) freq[word] = (freq[word] || 0) + 1; // har word ki frequency count ki
  return freq;
}
console.log("Word Freq:", wordFreq("I am who I am"));

// ✅ 11. Capitalize each word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()) // first char ko capital kiya
    .join(" ");
}
console.log("Capitalize Words:", capitalizeWords("welcome to js world"));

// ✅ 12. Replace vowels with '*'
function replaceVowels(str) {
  return str.replace(/[aeiou]/gi, '*'); // regex se vowel ko * se replace kiya
}
console.log("Replace Vowels:", replaceVowels("JavaScript")); // J*v*Scr*pt

// ✅ 13. Convert to Title Case
function titleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1)) // har word ka pehla char uppercase
    .join(" ");
}
console.log("Title Case:", titleCase("this is a title")); // This Is A Title

// ✅ 14. Valid palindrome ignoring case and spaces
function isCleanPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, ""); // lowercase + special chars remove
  return clean === clean.split("").reverse().join(""); // reverse karke match
}
console.log("Clean Palindrome:", isCleanPalindrome("A man a plan a canal Panama")); // true

// ✅ 15. Reverse words in sentence
function reverseWords(str) {
  return str.split(" ").reverse().join(" "); // words ko split, reverse, join
}
console.log("Reversed Sentence:", reverseWords("I am Anuj")); // Anuj am I

// ✅ 16. Check for subsequence
function isSubsequence(str1, str2) {
  let i = 0, j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) i++; // match mila to i++
    j++;
  }
  return i === str1.length; // agar i pura str1 cover kar gaya to true
}
console.log("Is Subsequence:", isSubsequence("abc", "ahbgdc")); // true

// ✅ 17. Max occurring character
function maxOccurringChar(str) {
  let freq = {};
  for (let ch of str) freq[ch] = (freq[ch] || 0) + 1; // count chars
  let maxChar = '', maxCount = 0;
  for (let ch in freq) {
    if (freq[ch] > maxCount) {
      maxChar = ch;
      maxCount = freq[ch];
    }
  }
  return maxChar; // sabse zyada aane wala char
}
console.log("Max Occurring Char:", maxOccurringChar("aabbbccccdd")); // c
