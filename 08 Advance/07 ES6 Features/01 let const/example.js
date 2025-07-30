// var - function scoped aur hoisting me 'undefined' se initialize hota hai
function varExample() {
  console.log(a); // undefined (hoisting)
  var a = 10;
  console.log(a); // 10
}
varExample();

// let - block scoped, hoisting hota hai but TDZ me hota hai (use se pehle error deta hai)
function letExample() {
  // console.log(b); // ReferenceError: Cannot access 'b' before initialization
  let b = 20;
  console.log(b); // 20
}
letExample();

// const - block scoped, re-assign nahi kar sakte
function constExample() {
  const c = 30;
  console.log(c); // 30
  // c = 40; // TypeError: Assignment to constant variable.
}
constExample();

// Block scope demo
{
  var x = 100;
  let y = 200;
  const z = 300;
}
console.log(x); // 100, var is function scoped, global here
// console.log(y); // ReferenceError: y is not defined (block scoped)
// console.log(z); // ReferenceError: z is not defined

// const with objects (reference can't change, but properties can)
const obj = { name: "Anuj" };
obj.name = "Bansal"; // Allowed
// obj = {}; // TypeError: Assignment to constant variable.
console.log(obj);

// TDZ example (uncomment to test)
/*
{
  console.log(tdzVar); // undefined (var)
  // console.log(tdzLet); // ReferenceError
  // console.log(tdzConst); // ReferenceError

  var tdzVar = "Var hoisted";
  let tdzLet = "Let in TDZ";
  const tdzConst = "Const in TDZ";
}
*/