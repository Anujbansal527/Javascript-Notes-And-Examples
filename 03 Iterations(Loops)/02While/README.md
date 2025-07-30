# 🔁 JavaScript `while` Loop

The `while` loop runs **as long as the condition is true**.  
Use it when the number of iterations is **not known in advance**.

---

## 🔹 Syntax

```js
while (condition) {
  // Code block to execute
}

### 🔹 Flowchart
Start
  ↓
Check condition
  ↓        ↓
true       false → Exit
  ↓
Run block
  ↓
Repeat

### 🔹 Real-Life Example
Jab tak paani ubal nahi jata, stove band nahi karte.
"While water is not boiling, keep heating."

### 📌 Use Cases
Waiting for user input / event
Keep retrying until success
Run loop until external signal

### ⚠️ Common Mistakes
Mistake	                      Problem
Condition never false	        Infinite loop
Forgetting increment inside   loop	i doesn't change → infinite loop
Confusing = with ==	          Assignment instead of comparison

### 🧠 Interview Qs (while loop)
### Q: Difference between while and do...while?
### Q: Can you use break inside while?
### Q: How do you avoid infinite loop in while?
### Q: When to use while over for loop?

---

```js