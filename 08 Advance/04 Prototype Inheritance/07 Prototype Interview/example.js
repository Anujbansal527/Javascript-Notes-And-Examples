 // ✅ Q1: __proto__ vs prototype

function Foo() {} // ek constructor function banaya
const f = new Foo(); // uska instance banaya

// 👉 f.__proto__ point karta hai Foo.prototype ki taraf
console.log(f.__proto__ === Foo.prototype); // ✅ true

// 👉 Function bhi ek object hai, uska __proto__ point karta hai Function.prototype
console.log(Foo.__proto__ === Function.prototype); // ✅ true

// -------------------------------------------------

// ✅ Q2: Missing property in object using prototype chain

const parent = {
  canFly: true, // parent ke pass property hai
};

const child = Object.create(parent); // child ka prototype hai parent

// 👉 property child ke pass nahi hai, lekin prototype chain se mil jaayegi
console.log(child.canFly); // ✅ true

// 👉 hasOwnProperty check karega ki kya property child ke paas direct hai
console.log(child.hasOwnProperty("canFly")); // ❌ false

// -------------------------------------------------

// ✅ Q3: Prototype overwritten

function Car() {} // ek function constructor

// 👉 yaha poora Car.prototype object ko hi overwrite kar diya gaya
Car.prototype = {
  wheels: 4,
};

const c = new Car();

// 👉 naye prototype me wheels property hai, isliye mil jaata hai
console.log(c.wheels); // ✅ 4

// 👉 lekin constructor property ab lost ho gayi, wo Object constructor ki taraf point karega
console.log(c.constructor === Car); // ❌ false

// -------------------------------------------------

// ✅ Q4: Class vs Function

class MyClass {} // ES6 class
function MyFunc() {} // normal function

// 👉 JS me class bhi internally ek function hi hoti hai
console.log(typeof MyClass); // ✅ "function"
console.log(typeof MyFunc);  // ✅ "function"

// -------------------------------------------------

// ✅ Q5: Object.create() use case

const animal = {
  type: "mammal",
};

const cat = Object.create(animal); // cat ka prototype ban gaya animal
cat.sound = "meow"; // direct property cat ke pass

// 👉 type animal me hai, cat ke pass nahi fir bhi access ho jaata hai
console.log(cat.type); // ✅ "mammal"

// 👉 prototype check
console.log(cat.__proto__ === animal); // ✅ true
