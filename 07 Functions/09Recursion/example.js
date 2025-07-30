// 🔹 1. Factorial
function factorial(n) {
  // Base case: agar n 0 ho to uska factorial 1 hota hai
  if (n === 0) return 1;

  // Recursive case: n * factorial(n-1) call karte hue
  return n * factorial(n - 1);
}
console.log("Factorial(5):", factorial(5)); // 5*4*3*2*1 = 120

// 🔹 2. Fibonacci (inefficient)
function fibonacci(n) {
  // Base cases: agar n 0 ya 1 ho to wahi return karo
  if (n <= 1) return n;

  // Recursive case: pehle do previous values ka sum
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci(6):", fibonacci(6)); // 0,1,1,2,3,5,8

// 🔹 3. Sum of Array
function sumArray(arr, i = 0) {
  // Base case: agar index array ki length ke barabar ho jaye to 0 return karo
  if (i === arr.length) return 0;

  // Recursive case: current element + next element ka sum
  return arr[i] + sumArray(arr, i + 1);
}
console.log("Sum of [1,2,3,4]:", sumArray([1, 2, 3, 4])); // 1+2+3+4 = 10

// 🔹 4. Reverse a string
function reverseString(str) {
  // Base case: agar string ka length 1 ya usse kam ho to wahi return karo
  if (str.length <= 1) return str;

  // Recursive case: baki string reverse karo aur first character last me jodo
  return reverseString(str.slice(1)) + str[0];
}
console.log("Reverse of 'anuj':", reverseString("anuj")); // "juna"

// 🔹 5. Flatten nested array
function flatten(arr) {
  let result = [];
  for (let el of arr) {
    // Agar element ek array hai to usko recursively flatten karo
    if (Array.isArray(el)) {
      result = result.concat(flatten(el));
    } else {
      // Agar normal value hai to result me daal do
      result.push(el);
    }
  }
  return result;
}
console.log("Flatten:", flatten([1, [2, [3, 4]], 5])); // [1,2,3,4,5]

// 🔹 6. Power function (x^n)
function power(x, n) {
  // Base case: agar power 0 ho to result 1 hota hai
  if (n === 0) return 1;

  // Recursive case: x * x^(n-1)
  return x * power(x, n - 1);
}
console.log("2^4:", power(2, 4)); // 2*2*2*2 = 16
