// ✅ DOM elements select kar rahe hain
const input = document.getElementById("input");   // jahan user input karega
const output = document.getElementById("output"); // status ya result message yahan dikhayenge

// 📋 Copy input value to clipboard
function copyText() {
  const text = input.value; // user ke input box se text le lo

  // 📎 Clipboard API ka use karke text copy karo
  navigator.clipboard.writeText(text)
    .then(() => {
      output.textContent = "✅ Text copied to clipboard!"; // agar copy successful ho
    })
    .catch((err) => {
      output.textContent = "❌ Failed to copy: " + err; // agar koi error aaye
    });
}

// 📥 Paste text from clipboard to input box
function pasteText() {
  // 📎 Clipboard API ka use karke clipboard se text read karo
  navigator.clipboard.readText()
    .then((clipText) => {
      input.value = clipText; // clipboard se jo mila, wo input box me daal do
      output.textContent = "📥 Text pasted from clipboard!"; // success message dikhayo
    })
    .catch((err) => {
      output.textContent = "❌ Failed to paste: " + err; // error dikhayo agar paste fail ho
    });
}
