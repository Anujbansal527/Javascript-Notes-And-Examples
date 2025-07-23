/************************************/
// ✅ Q1: Reverse Linked List (Recursive)
/************************************/
function reverseList(head) {
  // 🔹 Base Case: agar list empty hai ya sirf 1 node hai
  if (!head || !head.next) return head;

  // 🔹 Pehle next node ke liye reverse call kar rahe hain
  const newHead = reverseList(head.next);

  // 🔹 Reverse link: next node ke next ko current node pe point karo
  head.next.next = head;

  // 🔹 Current node ka link tod do (nahi to cycle ban jaayegi)
  head.next = null;

  // 🔹 New head return karo
  return newHead;
}

/************************************/
// ✅ Q2: Tower of Hanoi
/************************************/
function towerOfHanoi(n, from, to, aux) {
  // 🔹 Base Case: agar 0 disk bachi hai to kuch nahi karna
  if (n === 0) return;

  // 🔹 Step 1: n-1 disks ko source se helper pe le jao
  towerOfHanoi(n - 1, from, aux, to);

  // 🔹 Step 2: bacha hua disk source se destination pe le jao
  console.log(`Move disk ${n} from ${from} to ${to}`);

  // 🔹 Step 3: n-1 disks ko helper se destination pe le jao
  towerOfHanoi(n - 1, aux, to, from);
}
towerOfHanoi(3, 'A', 'C', 'B');

/************************************/
// ✅ Q3: Generate Subsets
/************************************/
function generateSubsets(arr, index = 0, current = []) {
  // 🔹 Base Case: jab index array length ke barabar ho jaye
  if (index === arr.length) {
    console.log(current);
    return;
  }

  // 🔹 Option 1: current element ko exclude karo
  generateSubsets(arr, index + 1, current);

  // 🔹 Option 2: current element ko include karo
  generateSubsets(arr, index + 1, [...current, arr[index]]);
}
generateSubsets([1, 2]);

/************************************/
// ✅ Q4: Palindrome Check
/************************************/
function isPalindrome(str) {
  // 🔹 Base Case: agar string empty ya ek letter ki hai to palindrome
  if (str.length <= 1) return true;

  // 🔹 Agar first aur last characters match nahi karte to false
  if (str[0] !== str[str.length - 1]) return false;

  // 🔹 Andar ke substring ke liye check karo
  return isPalindrome(str.slice(1, -1));
}
console.log(isPalindrome("madam")); // true

/************************************/
// ✅ Q5: Sum of Digits
/************************************/
function sumDigits(n) {
  // 🔹 Base Case: agar number 0 hai to return 0
  if (n === 0) return 0;

  // 🔹 Ek digit lo (last) aur baaki digits ka sum recursion se lo
  return (n % 10) + sumDigits(Math.floor(n / 10));
}
console.log(sumDigits(123)); // 6

/************************************/
// ✅ Q6: Is Array Sorted
/************************************/
function isSorted(arr, i = 0) {
  // 🔹 Base Case: agar last element tak pahuch gaye
  if (i === arr.length - 1) return true;

  // 🔹 Agar current > next → sorted nahi hai
  if (arr[i] >= arr[i + 1]) return false;

  // 🔹 Recursively check next pair
  return isSorted(arr, i + 1);
}
console.log(isSorted([1, 2, 3, 4])); // true

/************************************/
// ✅ Q7: Count Paths in Grid
/************************************/
function countPaths(m, n) {
  // 🔹 Base Case: agar ek hi row ya column bacha ho
  if (m === 1 || n === 1) return 1;

  // 🔹 Do option: ek step neeche jao ya ek step right jao
  return countPaths(m - 1, n) + countPaths(m, n - 1);
}
console.log("Paths in 3x3 grid:", countPaths(3, 3)); // 6


/************************************/
// 🔥 BONUS: Memoized Fibonacci
/************************************/
function fib(n, memo = {}) {
  // 🔹 Base Case: 0 ya 1 ke liye direct return
  if (n <= 1) return n;

  // 🔹 Pehle check karo kya result already calculated hai
  if (memo[n]) return memo[n];

  // 🔹 Nahi hai to calculate karo aur store karo
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

  return memo[n];
}
console.log("Fibonacci(10):", fib(10)); // 55
