 // 🔹 Example 1: Simple function using Function constructor
// Step: new Function('parameters', 'function body')
const add = new Function('a', 'b', 'return a + b');
console.log(add(10, 5)); // Output: 15

// 🔸 Hinglish: Humne 'a' aur 'b' naam ke parameters diye aur function body me unka sum return kiya

// 🔹 Example 2: Greeting function
const greet = new Function('name', 'return "Hello, " + name');
console.log(greet("Anuj")); // Output: Hello, Anuj

// 🔸 Hinglish: Yahaan function runtime pe bana, jo input me diya gaya naam greet karta hai

// 🔹 Example 3: Using Function constructor inside dynamic logic (⚠️ Not recommended)
let input = "return x * x";
let square = new Function('x', input);
console.log(square(6)); // Output: 36

// 🔸 Hinglish: Runtime pe function body ko string ke through generate kiya gaya
// ⚠️ Aise usage me user ke input ka dhyaan rakhna chahiye (XSS risk hota hai)

// 🔹 Example 4: Trying to access lexical scope (FAILS)
let outer = 100;
const badFunc = new Function('return outer'); // ❌ Error: outer is not defined
try {
  console.log(badFunc());
} catch (err) {
  console.log("Lexical Scope Access Failed:", err.message);
}

// 🔸 Hinglish: Function constructor outer variable `outer` ko access nahi kar sakta — ye closure ko support nahi karta

// 🔹 Example 5: Creating multiple functions dynamically (bad practice)
const ops = ['+', '-', '*'];
const dynamicFuncs = ops.map(op => new Function('a', 'b', `return a ${op} b`));
console.log(dynamicFuncs[0](10, 5)); // Output: 15
console.log(dynamicFuncs[1](10, 5)); // Output: 5
console.log(dynamicFuncs[2](10, 5)); // Output: 50

// 🔸 Hinglish: Ye approach dynamic hai, lekin secure nahi hai. Sirf samajhne ke liye use karo

// 🔚 Summary (Interview ke liye points):
// ✅ Use: Dynamic code generation
// ❌ Don’t use: When lexical scope, security, performance important ho
// 🔁 Function constructor vs Regular: scope, speed, safety me farak hai
