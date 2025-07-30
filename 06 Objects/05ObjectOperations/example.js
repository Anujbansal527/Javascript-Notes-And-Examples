// ✅ Shallow Copy Example
const original = { name: "Anuj", age: 23 };
const shallow = { ...original };
shallow.name = "Bansal";
console.log("Original:", original); // Anuj
console.log("Shallow:", shallow);   // Bansal

// ❌ Shallow copy with nested object (fails)
const nested = { user: { name: "Anuj" } };
const shallowNested = { ...nested };
shallowNested.user.name = "Bansal";
console.log("Nested Original:", nested.user.name); // Bansal ❌

// ✅ Deep copy (using JSON)
const deep = JSON.parse(JSON.stringify(nested));
deep.user.name = "DeepClone";
console.log("Deep Original:", nested.user.name); // Bansal ✅
console.log("Deep Clone:", deep.user.name);      // DeepClone

// ✅ Merge objects
const obj1 = { name: "Anuj" };
const obj2 = { age: 23 };
const merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// ✅ Object.freeze
const freezeObj = { lang: "JS" };
Object.freeze(freezeObj);
freezeObj.lang = "Python";
console.log("Freeze:", freezeObj.lang); // JS

// ✅ Object.seal
const sealObj = { lang: "JS" };
Object.seal(sealObj);
sealObj.lang = "Python";   // allowed
sealObj.level = "expert";  // ignored
console.log("Seal:", sealObj); // { lang: 'Python' }

// ✅ Convert to Array
const user = { name: "Anuj", age: 23 };
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));