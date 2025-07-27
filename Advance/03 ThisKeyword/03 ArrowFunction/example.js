
 // 🔹 Arrow Function and `this`

console.log("🔹 Arrow Function Examples");

// ✅ Global arrow function
const greet = () => {
  // Arrow function me `this` lexical hota hai, global context se lega
  // Browser me ye `window` hoga, Node.js me `{}` ya global object
  console.log("👉 Global Arrow:", this); 
};
greet();

// ---------------------------------------------

// ✅ Inside object (WRONG use)
const user = {
  name: "Anuj",
  arrowFunc: () => {
    // Arrow function ka `this` object se bind nahi hota
    // Ye `this` global context ka hoga, isliye this.name undefined aayega
    console.log("👉 Inside Object (Arrow):", this.name); // ❌ undefined
  },
};
user.arrowFunc();

// ---------------------------------------------

// ✅ Correct lexical usage inside regular function
const employee = {
  name: "Anuj Bansal",
  greet: function () {
    // Regular function ka `this` employee object ko point karega
    // Arrow function andar hone ke karan `this` ko lexical context (employee) se le lega
    const innerArrow = () => {
      console.log("👉 Lexical `this` (Arrow):", this.name); // ✅ "Anuj Bansal"
    };
    innerArrow();
  },
};
employee.greet();

// ---------------------------------------------

// ✅ setTimeout example
const timerObj = {
  name: "Timer",
  start: function () {
    // Regular function ke andar arrow function hai
    // Arrow function `this` ko lexical (timerObj) se lega
    setTimeout(() => {
      console.log("👉 setTimeout Arrow:", this.name); // ✅ "Timer"
    }, 1000);
  },
};
timerObj.start();

// ---------------------------------------------

// ✅ Arrow function can't be used as constructor

// ❌ Arrow functions constructor ke tarah kaam nahi karte
// const ArrowConstructor = () => {};
// const obj = new ArrowConstructor(); // ❌ TypeError: ArrowConstructor is not a constructor

// Explanation:
// Arrow function me `[[Construct]]` internal method nahi hota
// Isliye `new` keyword ke saath call karne par error deta hai

