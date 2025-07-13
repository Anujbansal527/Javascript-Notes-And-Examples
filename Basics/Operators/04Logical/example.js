// ===============================
// 🔗 Logical Operators Examples
// ===============================

// ✅ AND (&&) => dono condition true honi chahiye
console.log(true && true);    // ✅ true
console.log(true && false);   // ❌ false
console.log(false && true);   // ❌ false

// ✅ OR (||) => koi bhi ek condition true ho to true
console.log(true || false);   // ✅ true
console.log(false || false);  // ❌ false

// ✅ NOT (!) => value ka ulta kar deta hai (negation)
console.log(!true);           // false
console.log(!false);          // true


false && console.log("Ye nahi chalega"); 
// ❌ false milte hi second part check nahi hota
// Output: kuch nahi (second part execute nahi hoga)

true || console.log("Ye bhi nahi chalega"); 
// ✅ true mil gaya, to OR ke second part ko skip kar diya
// Output: kuch nahi (console.log nahi chala)

let userName = "" || "Default Name"; 
console.log("Username:", userName); 
// Output: Default Name
// "" is falsy, to right value use hui

let isLoggedIn = true && "Welcome User!";
console.log("Message:", isLoggedIn); 
// Output: Welcome User!
// true is truthy, to right value return ho gayi
