const output = document.getElementById("output");

function saveEmail() {
  const email = document.getElementById("email").value;

  // ✅ Store email temporarily (tab ke liye)
  sessionStorage.setItem("email", email);
  output.textContent = `✅ Email saved: ${email}`;
}

function getEmail() {
  // ✅ Tab se email uthao
  const email = sessionStorage.getItem("email");

  if (email) {
    output.textContent = `📥 Fetched from sessionStorage: ${email}`;
  } else {
    output.textContent = `⚠️ No email found in this tab`;
  }
}

function clearEmail() {
  sessionStorage.removeItem("email");
  output.textContent = "🗑️ Email removed from sessionStorage";
}
