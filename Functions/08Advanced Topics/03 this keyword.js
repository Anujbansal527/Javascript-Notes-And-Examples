// 🔹 1. Global Context (Browser me 'this' => window object hota hai)
console.log(this); // 🔁 Browser me => window, Node.js me => {}

function showThis() {
  console.log(this); // 🔁 Regular function me => window (non-strict) ya undefined (strict mode)
}
showThis();

// 🔸 Interview: Global context me `this` kya hota hai?

// 🔹 2. Object Method ke andar 'this'
const person = {
  name: "Anuj",
  greet: function () {
    console.log("Hello, " + this.name); // 🔁 this => person object
  }
};
person.greet(); // Output: Hello, Anuj

//  Jab object method call hota hai to `this` us object ko point karta hai

// 🔹 3. Arrow Function ke andar 'this'
const user = {
  name: "Anuj",
  greet: () => {
    console.log("Hi " + this.name); // ❌ undefined, kyunki arrow function ka `this` nahi hota
  }
};
user.greet(); // Output: Hi undefined

// 🔸 Interview: Arrow function ka `this` lexical hota hai (parent scope se inherit)

// 🔹 4. Nested Functions (Closure ke through)
const obj = {
  value: 10,
  outer: function () {
    console.log("Outer:", this.value); // ✅ 10
    function inner() {
      console.log("Inner:", this.value); // ❌ undefined (kyunki 'this' global ho gaya)
    }
    inner();
  }
};
obj.outer();

// 🔸 Solution: Arrow use karo ya `self = this` trick
const obj2 = {
  value: 20,
  outer: function () {
    const self = this;
    const inner = function () {
      console.log("Inner fixed:", self.value); // ✅ 20
    };
    inner();
  }
};
obj2.outer();

// 🔹 5. Using `call()`, `apply()`, `bind()` to set `this` manually
function welcome(city) {
  console.log(`Welcome ${this.name} to ${city}`);
}
const user1 = { name: "Anuj" };

welcome.call(user1, "Indore"); // ✅ Anuj
welcome.apply(user1, ["Bhopal"]); // ✅ Anuj
const boundFn = welcome.bind(user1, "Delhi");
boundFn(); // ✅ Anuj

//  call/apply/bind se hum manually `this` set karte hain

// 🔹 6. Constructor Function ke andar `this`
function Person(name) {
  this.name = name;
}
const p1 = new Person("Anuj");
console.log(p1.name); // ✅ Anuj

// 🔸 Interview: Constructor me `this` naye object ko refer karta hai

// 🔹 7. Event Listener Example (browser-specific)
document.body.addEventListener("click", function () {
  console.log(this); // ✅ this => jis element pe event laga hai (yahan body)
});

// Arrow lagate to parent lexical this milta
document.body.addEventListener("click", () => {
  console.log(this); // ❌ window ya outer lexical
});
