// ✅ Q1: Find factorial using recursion
function factorial(n) {
  // 🔹 Base Case
  if (n === 0) return 1;

  // 🔹 Recursively multiply
  return n * factorial(n - 1);
}
console.log("Factorial(5):", factorial(5)); // 120

// ✅ Q2: Find Fibonacci using recursion + memoization
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log("Fibonacci(8):", fib(8)); // 21

// ✅ Q3: Count vowels in a string (recursively)
function countVowels(str, i = 0) {
  const vowels = "aeiouAEIOU";
  if (i === str.length) return 0;
  return (vowels.includes(str[i]) ? 1 : 0) + countVowels(str, i + 1);
}
console.log("Vowel Count:", countVowels("Recursion is awesome"));

// ✅ Q4: Check if array has duplicate (recursive version)
function hasDuplicate(arr, i = 0, set = new Set()) {
  if (i === arr.length) return false;
  if (set.has(arr[i])) return true;
  set.add(arr[i]);
  return hasDuplicate(arr, i + 1, set);
}
console.log("Has Duplicate:", hasDuplicate([1, 2, 3, 2]));

// ✅ Q5: Power of a number (x^n)
function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}
console.log("Power(2,4):", power(2, 4)); // 16

// ✅ Q6: Nested Object Sum (Recursively sum all numeric values)
function nestedSum(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += nestedSum(obj[key]);
    }
  }
  return sum;
}
console.log(
  "Nested Sum:",
  nestedSum({ a: 1, b: { c: 2, d: { e: 3 } }, f: 4 }) // 10
);

// ✅ Q7: String Reversal (Recursively)
function reverseStr(str) {
  if (str.length <= 1) return str;
  return reverseStr(str.slice(1)) + str[0];
}
console.log("Reverse 'anuj':", reverseStr("anuj")); // 'juna'

// ✅ Q8: Flatten Array Recursively
function flattenArray(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el));
    } else {
      result.push(el);
    }
  }
  return result;
}
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
