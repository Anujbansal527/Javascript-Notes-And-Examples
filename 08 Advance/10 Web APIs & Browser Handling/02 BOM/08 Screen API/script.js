// 📌 Output element
const output = document.getElementById("output");

function showScreenInfo() {
  // 🖥️ Screen object se dimension aur info dikhana
  const info = `
    📏 screen.width: ${screen.width}px
    📐 screen.height: ${screen.height}px
    🪟 availWidth: ${screen.availWidth}px
    🪟 availHeight: ${screen.availHeight}px
    🎨 pixelDepth: ${screen.pixelDepth} bits
    🔄 orientation: ${screen.orientation.type}
  `;
  console.log(info);
  output.textContent = info;
}

// ⛶ Fullscreen me jaana
function goFullScreen() {
  // 👇 documentElement = pura page fullscreen karega
  const el = document.documentElement;

  if (el.requestFullscreen) {
    el.requestFullscreen();
  } else {
    alert("⚠️ Fullscreen API not supported in this browser.");
  }
}

// 🔙 Fullscreen se bahar aana
function exitFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else {
    alert("❌ Exit fullscreen not supported.");
  }
}
