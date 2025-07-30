const output = document.getElementById("output");

// ✅ Set cookie
function setCookie() {
  const name = document.getElementById("username").value;

  // 🧾 Cookie set with expiry and path
  document.cookie = `username=${name}; expires=Tue, 31 Dec 2025 23:59:59 UTC; path=/`;
  output.textContent = "✅ Cookie set for username!";
}

// ✅ Get cookie
function getCookie() {
  const cookies = document.cookie.split("; ");
  let found = false;

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    if (key === "username") {
      output.textContent = `🍪 Cookie Value: ${value}`;
      found = true;
    }
  });

  if (!found) {
    output.textContent = "⚠️ No cookie found for username.";
  }
}

// ❌ Delete cookie
function deleteCookie() {
  // ⏳ Set expiry in past = delete
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
  output.textContent = "🗑️ Cookie deleted.";
}
