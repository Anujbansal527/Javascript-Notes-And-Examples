 // 🔹 Standalone Function (Independent)
function sayHello() {
  console.log("Hello from function");
}
sayHello(); // Output: Hello from function

// 🔹 Method (Function inside Object)
const user = {
  name: "Anuj",
  greet: function () {
    console.log("Hello", this.name);
  }
};
user.greet(); // Output: Hello Anuj

// 🔹 Assign function to object as method
function welcome() {
  console.log("Welcome", this.name);
}
const anotherUser = {
  name: "Bansal",
  greet: welcome
};
anotherUser.greet(); // Output: Welcome Bansal

// 🔹 Arrow function as method (❌ Bad)
const arrowUser = {
  name: "Anuj",
  greet: () => {
    console.log("Hi", this.name); // undefined
  }
};
arrowUser.greet(); // Output: Hi undefined

// 🔹 Function reused in multiple objects
function introduce() {
  console.log("I'm", this.name);
}
const obj1 = { name: "A", intro: introduce };
const obj2 = { name: "B", intro: introduce };

obj1.intro(); // I'm A
obj2.intro(); // I'm B
