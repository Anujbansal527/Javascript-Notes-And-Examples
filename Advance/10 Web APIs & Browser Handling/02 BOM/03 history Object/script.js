// 🔄 History length dikhana (kitne pages current session me visit hue)
console.log("📌 History length:", history.length);

// 🧭 User ko ek page peeche bhejna (same as browser back button)
function goBack() {
  history.back(); // ← Back jaata hai
}

// 🧭 User ko ek page aage bhejna (if navigated via back before)
function goForward() {
  history.forward(); // → Forward jaata hai
}

// 🔄 Specific pages jump karna (negative = back, positive = forward)
function jump(n) {
  history.go(n); // eg: go(-2), go(1)
}

// ✅ Use example in HTML:
// HTML buttons se connect karke yeh functions ko call kar sakte ho
// Example buttons:
// <button onclick="goBack()">Back</button>
// <button onclick="goForward()">Forward</button>
// <button onclick="jump(-2)">Go -2</button>
