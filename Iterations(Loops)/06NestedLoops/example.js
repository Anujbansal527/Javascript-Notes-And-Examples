// ✅ Multiplication Table (1 to 5)
for (let i = 1; i <= 5; i++) {
  console.log(`\nTable of ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}

// ✅ Star Pattern (square of *)
let rows = 4;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= rows; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// ✅ Triangle Pattern
let height = 5;
for (let i = 1; i <= height; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  console.log(pattern);
}

// ✅ Number Pattern
for (let i = 1; i <= 5; i++) {
  let nums = "";
  for (let j = 1; j <= i; j++) {
    nums += j + " ";
  }
  console.log(nums);
}

// ✅ Break in nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) break;
    console.log(`i=${i}, j=${j}`); // Inner loop breaks at j = 2
  }
}

// ✅ Continue in nested loop
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue;
    console.log(`i=${i}, j=${j}`); // Skips j = 2
  }
}
