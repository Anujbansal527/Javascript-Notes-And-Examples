 // ✅ Basic switch example
let day = "tuesday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;
  case "tuesday":
    console.log("Second day"); // ✅ Output
    break;
  case "wednesday":
    console.log("Midweek");
    break;
  default:
    console.log("Unknown day");
}

// ✅ Switch without break (fall-through)
let grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
  case "B":
    console.log("Very Good"); // ✅ Output
  case "C":
    console.log("Good");
  default:
    console.log("Keep it up!");
}

// ✅ Using default
let code = 500;

switch (code) {
  case 200:
    console.log("Success");
    break;
  case 404:
    console.log("Not Found");
    break;
  default:
    console.log("Unknown error"); // ✅ Output
}