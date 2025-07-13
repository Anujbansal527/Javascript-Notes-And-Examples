// ==================================
// 🧠 Unary Operators
// ==================================

// Unary plus (+): Converts a string to a number
let a = "5";
console.log("+a:", +a);          // 5 => Converts string "5" to number 5

// Unary plus on boolean: true becomes 1, false becomes 0
let b = true;
console.log("+b:", +b);          // 1 => true is coerced to number 1

// Logical NOT operator: Negates the boolean value
console.log("!b:", !b);          // false => !true is false

// Pre-increment (++): Increments value before using it
let num = 10;
console.log("++num:", ++num);    // 11 => num becomes 11, then returned

// Pre-decrement (--): Decrements value before using it
console.log("--num:", --num);    // 10 => num becomes 10 again

// typeof operator: Returns the data type of a variable
console.log("typeof num:", typeof num); // "number" => num is a number

// delete operator: Removes a property from an object
let user = { name: "Anuj", age: 22 };
console.log("Before delete:", user); // { name: "Anuj", age: 22 }
delete user.age; // Deletes the 'age' property from user object
console.log("After delete:", user);  // { name: "Anuj" }

// void operator: Evaluates an expression and returns undefined
console.log("void 0:", void 0);     // undefined => void always returns undefined
