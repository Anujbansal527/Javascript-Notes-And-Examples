// 🔹 Call Stack Example

function first() {
  console.log("This is FIRST function");
  second();
}

function second() {
  console.log("This is SECOND function");
  third();
}

function third() {
  console.log("This is THIRD function");
}

// ✅ Function call
first();

// 🔁 Call Stack Flow:
/*
1. GEC → pushed
2. first() EC → pushed
3. second() EC → pushed
4. third() EC → pushed
5. third() done → popped
6. second() done → popped
7. first() done → popped
8. GEC → idle (if file complete)
*/

// ❌ Call Stack Overflow
// function recursive() {
//   recursive(); // 🔁 Infinite call
// }
// recursive(); // ❌ RangeError: Maximum call stack size exceeded