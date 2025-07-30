function showLocation() {
  // 🔍 Sabhi location properties console aur HTML me dikhana
  const info = `
    📍 href: ${location.href}
    🌐 hostname: ${location.hostname}
    📂 pathname: ${location.pathname}
    ❓ search: ${location.search}
    🔗 hash: ${location.hash}
    🔐 protocol: ${location.protocol}
  `;
  console.log(info);
  document.getElementById("info").innerText = info;
}

function reloadPage() {
  // 🔁 Page ko refresh/reload karta hai
  location.reload();
}

function redirectPage() {
  // 🔀 Google pe redirect karega (history me back possible)
  location.assign("https://www.google.com");
}

function replacePage() {
  // 🔁 Example.com pe le jayega, lekin back nahi ja sakte
  location.replace("https://www.example.com");
}
