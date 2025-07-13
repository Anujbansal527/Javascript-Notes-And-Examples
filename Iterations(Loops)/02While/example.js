// ✅ Basic while loop
let i = 1;
while (i <= 5) {
  console.log("i is:", i); // 1 to 5
  i++;
}

// ✅ Looping over array
let colors = ["red", "green", "blue"];
let index = 0;

while (index < colors.length) {
  console.log("Color:", colors[index]); // red, green, blue
  index++;
}

// ✅ Infinite loop example (don't run this 😅)
// while (true) {
//   console.log("This will run forever!");
// }

// ✅ Break in while loop
let count = 1;
while (count <= 10) {
  if (count === 6) break;
  console.log("Before break:", count); // 1 to 5
  count++;
}

// ✅ Continue in while loop
let x = 0;
while (x < 5) {
  x++;
  if (x === 3) continue;
  console.log("Skip 3:", x); // 1, 2, 4, 5
}

// ✅ Mistake: no increment inside
// let y = 1;
// while (y < 3) {
//   console.log("y:", y); // Infinite loop (y never increases)
// }