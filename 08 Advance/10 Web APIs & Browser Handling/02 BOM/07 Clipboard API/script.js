// 🔍 Step 1: Input field aur output p tag ko access karo
const input = document.getElementById("textInput");
const output = document.getElementById("output");

// ✂️ Step 2: Copy function
function copyText() {
  // Step 2.1: Input field se text uthao
  const text = input.value;

  // Step 2.2: Clipboard API ka use karo to copy
  navigator.clipboard.writeText(text)
    .then(() => {
      // ✅ Success: User ko confirm message dikhao
      output.textContent = "✅ Text copied to clipboard!";
    })
    .catch((err) => {
      // ❌ Error: Agar user ne permission deny ki ho ya kuch issue ho
      output.textContent = "❌ Failed to copy text.";
      console.error("Copy error:", err);
    });
}

// 📋 Step 3: Paste function
function pasteText() {
  // Step 3.1: Clipboard se text read karo
  navigator.clipboard.readText()
    .then((text) => {
      // ✅ Success: Text ko input field mein daalo
      input.value = text;
      output.textContent = "✅ Text pasted from clipboard!";
    })
    .catch((err) => {
      // ❌ Error: Agar clipboard access deny ho gaya
      output.textContent = "❌ Failed to paste text.";
      console.error("Paste error:", err);
    });
}
