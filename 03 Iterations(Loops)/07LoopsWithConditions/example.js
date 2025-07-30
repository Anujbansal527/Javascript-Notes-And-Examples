 
// ✅ break statement
for (let i = 1; i <= 5; i++) {
  if (i === 4) break;
  console.log("Break example →", i); // Output: 1 2 3
}

// ✅ continue statement
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log("Continue example →", i); // Output: 1 2 4 5
}

// ✅ break in while loop
let count = 1;
while (count <= 5) {
  if (count === 3) break;
  console.log("While loop count:", count);
  count++;
}

// ✅ continue in while loop
let num = 0;
while (num < 5) {
  num++;
  if (num === 2) continue;
  console.log("While →", num); // 1 3 4 5
}

// ✅ Nested loop break with label
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) break outerLoop;
    console.log(`i=${i}, j=${j}`);
  }
}
