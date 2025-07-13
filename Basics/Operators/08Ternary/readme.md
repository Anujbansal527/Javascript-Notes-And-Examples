# 🎯 JavaScript Ternary Operator (`? :`)

Ternary operator ek **short form** hai `if-else` statement ka. Ye conditional check karta hai aur based on result, do values me se ek return karta hai.

## ✅ Syntax

-> condition ? value_if_true : value_if_false;

//normal eg
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // "Adult"


//Nested Ternary eg
let score = 75;
let grade = (score > 90) ? "A" :
            (score > 75) ? "B" :
            (score > 60) ? "C" : "D";

console.log(grade); // C
