// =============================
// ✅ Truthy & Falsy Examples
// =============================

let val;

// Falsy
val = 0;
if (val) console.log("0 is truthy");
else console.log("0 is falsy"); // ✅

val = "";
if (val) console.log("Empty string is truthy");
else console.log("Empty string is falsy"); // ✅

val = null;
if (val) console.log("null is truthy");
else console.log("null is falsy"); // ✅

val = NaN;
if (val) console.log("NaN is truthy");
else console.log("NaN is falsy"); // ✅

// Truthy
val = " ";
if (val) console.log("' ' (space) is truthy"); // ✅

val = [];
if (val) console.log("[] is truthy"); // ✅

val = {};
if (val) console.log("{} is truthy"); // ✅
