 // 🔹 Regular Function Example
function add(a, b) {
  return a + b;
}
console.log("Regular add:", add(2, 3)); // 5

// 🔹 Arrow Function Example
const addArrow = (a, b) => a + b;
console.log("Arrow add:", addArrow(2, 3)); // 5

// ----------------------------------------------
// 🔹 Arrow vs Regular: `this` behavior

const obj = {
  name: "Anuj",

  regular: function () {
    console.log("Regular:", this.name); // "Anuj"
  },

  arrow: () => {
    console.log("Arrow:", this.name); // undefined
  },
};

obj.regular(); // "Anuj"
obj.arrow();   // undefined

// ----------------------------------------------
// 🔹 Arrow inside setTimeout

function Timer() {
  this.count = 0;

  // Regular Function -> `this` is not preserved
  setTimeout(function () {
    this.count++;
    console.log("Regular Timer:", this.count); // NaN / undefined
  }, 1000);

  // Arrow Function -> `this` is preserved
  setTimeout(() => {
    this.count++;
    console.log("Arrow Timer:", this.count); // ✅ Works properly
  }, 1000);
}
new Timer();

// ----------------------------------------------
// 🔹 Constructor Difference

function PersonRegular(name) {
  this.name = name;
}
const p1 = new PersonRegular("Anuj");
console.log("Regular Constructor:", p1.name); // Anuj

const PersonArrow = (name) => {
  this.name = name;
};
// const p2 = new PersonArrow("Anuj"); // ❌ Error: PersonArrow is not a constructor

// ----------------------------------------------
// 🔹 Arguments Object

function showArgs() {
  console.log("Regular Arguments:", arguments); // [Arguments] { '0': 1, '1': 2 }
}
showArgs(1, 2);

const showArgsArrow = () => {
  // console.log("Arrow Arguments:", arguments); // ❌ Error: arguments is not defined
};
showArgsArrow(1, 2);