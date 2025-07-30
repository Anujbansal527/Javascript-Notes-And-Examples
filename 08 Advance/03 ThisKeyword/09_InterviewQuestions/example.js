// 🔹 Interview Questions on `this`

// 🔸 Q1: Lost context
// 👉 Jab hum method ko ek variable me assign karte hain (ref1), to `this` us object (obj1) se disconnect ho jata hai
// ❌ Ab `this.name` undefined ho jata hai kyunki `ref1()` ka context global ho gaya (window ya undefined)

const obj1 = {
  name: "Anuj",
  show() {
    console.log("Q1:", this.name); // this -> obj1
  },
};
const ref1 = obj1.show;
ref1(); // ❌ undefined (Lost context)

// --------------------------------------------

// 🔸 Q2: Arrow vs Regular in Object
// 👉 Arrow function ka apna `this` nahi hota, ye outer (global) scope ka `this` leta hai
// 👉 Regular function me `this` current object (obj2) ko point karta hai

const obj2 = {
  name: "Bansal",
  regularFunc() {
    console.log("Q2 - Regular:", this.name); // this -> obj2
  },
  arrowFunc: () => {
    console.log("Q2 - Arrow:", this.name); // ❌ this -> window/global (not obj2)
  },
};
obj2.regularFunc(); // ✅ Bansal
obj2.arrowFunc();   // ❌ undefined

// --------------------------------------------

// 🔸 Q3: bind without call
// 👉 bind() ek naya function return karta hai jisme `this` permanently bind ho jata hai
// Jab hum usse call karte hain, to `this` person object ko refer karta hai

function showName() {
  console.log("Q3:", this.name); // this -> person
}
const person = { name: "Binded" };
const bindedFunc = showName.bind(person);
bindedFunc(); // ✅ Binded

// --------------------------------------------

// 🔸 Q4: call() inside nested function
// 👉 Nested function ke andar `this` by default global ho jata hai
// Lekin agar hum inner function ko `.call(this)` ke sath call karein, to outer ka `this` pass kar sakte hain

const obj4 = {
  name: "Anuj",
  show: function () {
    function inner() {
      console.log("Q4:", this.name); // this -> passed from .call()
    }
    inner.call(this); // ✅ Anuj
  },
};
obj4.show();

// --------------------------------------------

// 🔸 Q5: setTimeout context
// 👉 setTimeout ke andar arrow function use karne se `this` lexical context se bind ho jata hai
// 👉 Lekin regular function ke case me `this` window/global ho jata hai

const obj5 = {
  name: "Timer",
  show: function () {
    setTimeout(() => {
      console.log("Q5 - Arrow:", this.name); // ✅ Arrow => obj5
    }, 1000);

    setTimeout(function () {
      console.log("Q5 - Regular:", this.name); // ❌ Regular => window/global
    }, 1500);
  },
};
obj5.show();
