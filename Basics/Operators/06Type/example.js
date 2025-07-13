
// ===================================
// 📐 typeof Operator Examples
// ===================================

console.log(typeof "Anuj");        // "string"
console.log(typeof 123);           // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object" ⚠️ legacy bug
console.log(typeof {});            // "object"
console.log(typeof []);            // "object"
console.log(typeof function(){});  // "function"

// ===================================
// 📐 instanceof Operator Examples
// ===================================

console.log([] instanceof Array);        // true
console.log({} instanceof Object);       // true
console.log(new Date() instanceof Date); // true

function MyFunc(){}
let f = new MyFunc();
console.log(f instanceof MyFunc);        // true

console.log(function(){} instanceof Function); // true
