 // ✅ Basic nullish coalescing
let city = null;

let selectedCity = city ?? "Indore";
console.log("City:", selectedCity); // ✅ Output: Indore

// ✅ Difference between || and ??
let age = 0;

console.log("Using || :", age || 18);  // ✅ Output: 18 (0 is falsy)
console.log("Using ??:", age ?? 18);   // ✅ Output: 0 (0 is not null/undefined)

// ✅ undefined case
let profileName;

console.log("Profile:", profileName ?? "Anonymous"); // ✅ Output: Anonymous

// ✅ nested object use
const settings = {
  theme: null,
  language: "en"
};

console.log("Theme:", settings.theme ?? "light");       // ✅ light
console.log("Language:", settings.language ?? "en-US"); // ✅ en