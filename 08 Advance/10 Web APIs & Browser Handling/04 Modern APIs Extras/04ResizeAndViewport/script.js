 // ✅ HTML elements ko select kar rahe hain jahan sizes dikhani hai
const windowSize = document.getElementById("windowSize");       // pure window (browser window) ka size
const viewportSize = document.getElementById("viewportSize");   // viewport size (especially important on mobile)

// ✅ Function: Window size ko update karta hai (browser width x height)
function updateWindowSize() {
  windowSize.textContent = `📐 Window Size: ${window.innerWidth} x ${window.innerHeight}`;
  // innerWidth aur innerHeight se browser window ka size milta hai (scrollbars ko include karta hai)
}

// ✅ Function: Visual Viewport size ko update karta hai (mostly mobile devices ke liye)
function updateViewportSize() {
  if (window.visualViewport) {
    // visualViewport mobile browsers me hota hai, jo zoomed-in aur visible area ka size batata hai
    viewportSize.textContent = `📏 Viewport Size: ${visualViewport.width} x ${visualViewport.height}`;
  } else {
    viewportSize.textContent = "📏 Viewport API not supported.";
  }
}

// 🔄 Jab window resize ho (desktop ya mobile) tab ye functions call hote hain
window.addEventListener("resize", () => {
  updateWindowSize();      // window size ko update karo
  updateViewportSize();    // viewport size ko bhi update karo (mobile me important)
});

// 🔄 VisualViewport resize event (e.g. mobile me keyboard khul jaye to viewport chhota ho jata hai)
if (window.visualViewport) {
  visualViewport.addEventListener("resize", () => {
    updateViewportSize();  // viewport size ko specifically tab update karo
  });
}

// 🟢 Page load hone ke baad pehli baar sizes dikhane ke liye
updateWindowSize();        // window ka size dikhado
updateViewportSize();      // viewport ka size bhi dikhado
