# 🔹 Most Asked Recursion Interview Questions (Explained + Hinglish Flow)

---

### ✅ Q1. Reverse a Linked List (Recursive)

🔸 **Question**: Given the head of a singly linked list, reverse the list using recursion.

🧠 **Real-World Context**: Socho tumhare paas ek train ke coaches hain jinko reverse karna hai ek-ek karke, tail se start karke.

📌 **Hinglish Flow**:
- Base Case: Agar node `null` ya last node ho → wahi new head ban jaayega
- Recursive Step:
  - Pehle `next` node ko reverse karo
  - Uske baad `head.next.next = head` karo (ulta link)
  - Aur current node ka `next = null` karo
- Return the `newHead` from base case

---

### ✅ Q2. Tower of Hanoi

🔸 **Question**: Move `n` disks from source rod to destination rod using a helper rod. Only one disk at a time and bigger disk can't go on a smaller one.

🧠 **Real-World Context**: 3 rods aur plates ka puzzle, tumhe ek se doosre rod me le jaana hai without breaking rules.

📌 **Hinglish Flow**:
1. Move `n-1` disks from source → helper
2. Move 1 disk (biggest) from source → target
3. Move `n-1` disks from helper → target

⚠️ Common question in **Amazon, Infosys, and Wipro** interviews.

---

### ✅ Q3. Generate All Subsets (Power Set)

🔸 **Question**: Given an array, print all possible subsets using recursion.

🧠 **Real-World Context**: Socho ek dress ke combinations chahiye. Har item ko pehnna hai ya nahi, dono possibilities check karni hai.

📌 **Hinglish Flow**:
- Har element ke liye:
  - Include karo → `[...current, element]`
  - Exclude karo → skip that element
- Base Case: Jab index array length ke barabar ho jaye → ek subset ready hai

---

### ✅ Q4. Check if a String is Palindrome (Recursive)

🔸 **Question**: Write a recursive function to check if a string is a palindrome.

🧠 **Real-World Context**: Palindromes are symmetric. Jaise "madam", "racecar", etc.

📌 **Hinglish Flow**:
- Base Case: Agar string empty ya 1 letter ho → true
- Compare:
  - First aur last character same hai? → inner string check karo
  - Nahi to → false

---

### ✅ Q5. Sum of Digits of a Number

🔸 **Question**: Recursively find the sum of digits of a number, e.g. `123` → `1 + 2 + 3 = 6`

🧠 **Real-World Context**: Bank account me digit-wise scoring karni hai.

📌 **Hinglish Flow**:
- Base Case: `n == 0` → return 0
- Step:
  - Ek digit nikalo using `n % 10`
  - Recurse on remaining number `Math.floor(n/10)`
  - Add both

---

### ✅ Q6. Check if Array is Sorted (Strictly Increasing)

🔸 **Question**: Check recursively if an array is sorted in increasing order.

🧠 **Real-World Context**: Validate if prices, scores, or temperatures are steadily rising.

📌 **Hinglish Flow**:
- Base Case: Last element tak pahuch gaye → return true
- Step:
  - Compare `arr[i] < arr[i+1]`
  - If true → go to next pair
  - Else → return false

---

### ✅ Q7. Count Unique Paths in a Grid (m x n)

🔸 **Question**: Find the number of unique paths from top-left to bottom-right of a `m x n` grid using only right or down moves.

🧠 **Real-World Context**: Tum ek maze me ho jisme sirf 2 direction me move kar sakte ho — right ya down.

📌 **Hinglish Flow**:
- Base Case: Agar row = 1 ya column = 1 → sirf 1 path
- Recurrence:
  - `countPaths(m-1, n)` → move down
  - `countPaths(m, n-1)` → move right
  - Total = dono ka sum

---

### 🔥 BONUS: Optimized Fibonacci using Memoization

🔸 **Question**: Use recursion + memoization to return nth Fibonacci number faster.

🧠 **Real-World Context**: Recursive fibonacci slow hoti hai → use memory to store previous results.

📌 **Hinglish Flow**:
- Base Case: `n === 0 or 1` → return n
- Check memo object:
  - If result already calculated → return it
  - Else → calculate and store in memo

---

🧠 **Tips for Interviews:**
- Har function ka base case and recursive case samajhna zaruri hai
- Dry run karke stack trace banayein
- Time complexity aur space complexity bhi mention karein

✅ Practice these for confidence in any interview round!
