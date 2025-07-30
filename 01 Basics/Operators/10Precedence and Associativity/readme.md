# 📊 JavaScript Operator Precedence & Associativity

JavaScript me agar ek hi line me multiple operators ho, to kaun pehle chalega ye decide hota hai **precedence** se.

Aur agar multiple operators ka precedence same ho, to **associativity** decide karti hai kaun pehle evaluate hoga.

---

## ✅ Operator Precedence

Higher number = higher priority. Example:

let result = 10 + 5 * 2; // result = 20
// Because * has higher precedence than +


### ✅ Associativity
Agar operators ka precedence same ho, to associativity use hoti hai.

### Associativity	Example	Explanation
Left to Right	a + b + c	Add a + b, then result + c
Right to Left	a = b = c	Assign c to b, then b to a

### ✅ Common Precedence Table

1. ()               → Grouping
2. . [] ()          → Member access, function call
3. new              → Object creation
4. ++ -- (postfix)  → Increment/Decrement
5. ! ~ + - typeof   → Unary operators
6. **               → Exponentiation
7. * / %            → Multiplication, Division, Modulo
8. + -              → Addition, Subtraction
9. << >> >>>        → Bitwise shifts
10. < <= > >= in instanceof
11. == != === !==   → Equality
12. &               → Bitwise AND
13. ^               → Bitwise XOR
14. \|              → Bitwise OR
15. &&              → Logical AND
16. \|\|            → Logical OR
17. ?:              → Ternary
18. = += -= etc.    → Assignment
19. ,               → Comma


# 💡 Interview Questions

### Q1: Precedence vs Associativity?
Precedence: Pehle kaun chalega
Associativity: Same level wale kis order me chalenge

### Q2: Why this matters?
let a = 10;
let b = 5;
let c = 2;
console.log(a + b * c); // Output: 20, not 30

