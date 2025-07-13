 // ✅ Basic optional chaining
const user = {
  name: "Anuj",
  contact: {
    email: "anuj@example.com"
  }
};

console.log(user?.name);             // ✅ Anuj
console.log(user?.contact?.email);   // ✅ anuj@example.com
console.log(user?.address?.city);    // ✅ undefined (no error)

// ✅ Optional chaining with method
const person = {
  greet: () => "Hello!"
};

console.log(person?.greet?.()); // ✅ Hello!
console.log(person?.sayHi?.()); // ✅ undefined (no error)

// ✅ Optional chaining with array access
const data = {
  items: ["apple", "banana"]
};

console.log(data?.items?.[1]);     // ✅ banana
console.log(data?.items?.[5]);     // ✅ undefined
console.log(data?.products?.[0]);  // ✅ undefined