// ⭐ STEP 1: Sabhi elements ko select karo
const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");
const btn = document.getElementById("btn");


// ⭐ STEP 2: Capturing phase ke liye event listeners lagao
// Event capturing top se bottom chalta hai (outer → middle → inner)
outer.addEventListener("click", () => {
  console.log("🔴 Outer DIV Captured - CAPTURING");
}, true); // true means capturing phase

middle.addEventListener("click", () => {
  console.log("🟠 Middle DIV Captured - CAPTURING");
}, true);

inner.addEventListener("click", () => {
  console.log("🟢 Inner DIV Captured - CAPTURING");
}, true);


// ⭐ STEP 3: Bubbling phase ke liye event listeners lagao
// Event bubbling bottom se top chalta hai (inner → middle → outer)
outer.addEventListener("click", () => {
  console.log("🔴 Outer DIV Clicked - BUBBLING");
}); // false by default → bubbling

middle.addEventListener("click", () => {
  console.log("🟠 Middle DIV Clicked - BUBBLING");
});

inner.addEventListener("click", () => {
  console.log("🟢 Inner DIV Clicked - BUBBLING");
});


// ⭐ STEP 4: stopPropagation ka use button click par
// Ye event ko dono phase me aage propagate hone se rok deta hai
btn.addEventListener("click", (e) => {
  console.log("👆 Button Clicked (stopPropagation applied)");
  e.stopPropagation(); // Event yahi ruk jaayega
});
