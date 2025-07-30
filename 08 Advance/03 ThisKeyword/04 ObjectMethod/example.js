
 // 🔹 Object Method Context Examples
console.log("🔹 Object Method Examples");

// ✅ Direct method call from object
// 👉 Jab hum method ko directly object se call karte hain, `this` us object ko refer karta hai
const user = {
  name: "Anuj",
  greet: function () {
    console.log("👉 user.greet():", this.name); // ✅ "Anuj"
  },
};
user.greet();

// --------------------------------------------

// ✅ Shorthand method syntax
// 👉 JavaScript me method define karne ka short form, lekin `this` still object ko refer karega
const student = {
  name: "Ravi",
  hello() {
    console.log("👉 student.hello():", this.name); // ✅ "Ravi"
  },
};
student.hello();

// --------------------------------------------

// ❌ Losing context when assigning method to variable
// 👉 Jab method ko kisi variable me assign karte hain, toh `this` ka reference loose ho jata hai
const obj = {
  name: "Lost",
  show: function () {
    console.log("👉 this.name:", this.name); // ❌ undefined, kyunki `this` global context me chala gaya
  },
};

const showRef = obj.show;
showRef(); // ❌ undefined (context lost)

// --------------------------------------------

// ✅ Fix with bind()
// 👉 bind() method ek naya function return karta hai jisme `this` fix kar diya gaya hota hai
const fixedRef = obj.show.bind(obj);
fixedRef(); // ✅ "Lost"

// --------------------------------------------

// ❌ Using arrow function as method
// 👉 Arrow functions apna khud ka `this` nahi banate, balki surrounding lexical scope ka `this` lete hain
// Isliye yahan `this.name` undefined hoga
const arrowObj = {
  name: "Arrow",
  greet: () => {
    console.log("👉 arrowObj.greet():", this.name); // ❌ undefined
  },
};
arrowObj.greet();

// --------------------------------------------

// ✅ How to correctly use `this` with arrow function (indirectly)
// Agar arrow function chahiye toh better hai ki normal method ke andar use karo,
// jahan `this` pehle hi correct ho:
const smartArrow = {
  name: "SmartArrow",
  greet: function () {
    const arrow = () => {
      console.log("👉 smartArrow.greet():", this.name); // ✅ "SmartArrow"
    };
    arrow();
  },
};
smartArrow.greet();
