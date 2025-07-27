// 🔹 call, apply, bind Examples

// ✅ Example 1: Function Borrowing
function greet(message) {
  // this.name kisi object par depend karega jisme se function borrow ho raha hai
  console.log(`${message}, I am ${this.name}`);
}

const person1 = { name: "Anuj" };
const person2 = { name: "Ravi" };

// 👉 Using call
// call() me comma-separated arguments pass karte hain
greet.call(person1, "Hello"); // ✅ Hello, I am Anuj

// 👉 Using apply
// apply() me arguments ek array ke form me pass karte hain
greet.apply(person2, ["Hi"]); // ✅ Hi, I am Ravi

// 👉 Using bind
// bind() ek naya function return karta hai jisme `this` permanently bind ho jata hai
const greetAnuj = greet.bind(person1, "Namaste");
greetAnuj(); // ✅ Namaste, I am Anuj

// ---------------------------------------------

// ✅ Example 2: In object methods
const student = {
  name: "Rahul",
  show() {
    console.log("👉 Student:", this.name);
  },
};

const externalShow = student.show;
externalShow(); // ❌ undefined => kyunki `this` global context me chala gaya

// 👉 Use bind to fix it
const fixedShow = student.show.bind(student);
fixedShow(); // ✅ Rahul

// ---------------------------------------------

// ✅ Example 3: Pre-setting arguments using bind
function multiply(a, b) {
  return a * b;
}

// 👉 2 ko fix kar diya, ab sirf b pass karna hoga
const double = multiply.bind(null, 2);
console.log("👉 Double of 5:", double(5)); // ✅ 10

// ---------------------------------------------

// ✅ Example 4: bind in setTimeout
const obj = {
  name: "Delayed",
  show: function () {
    // ❌ setTimeout ke andar `this` global ho jata hai
    setTimeout(
      function () {
        console.log("❌ Without bind:", this.name); // undefined
      },
      1000
    );

    // ✅ bind se `this` ko object par fix kar diya
    setTimeout(
      function () {
        console.log("✅ With bind:", this.name); // Delayed
      }.bind(this),
      2000
    );
  },
};

obj.show();
