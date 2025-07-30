 const target = document.getElementById("target");
const log = document.getElementById("log");

// 🔍 Callback function: jab mutation detect ho
const callback = (mutationsList) => {
  mutationsList.forEach(mutation => {
    const msg = `👀 Mutation detected: ${mutation.type}`;
    console.log(msg);
    log.innerHTML += msg + "<br/>";
  });
};

// 🛠️ Observer config
const config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: false // Sirf direct child observe kare
};

// 🔁 Observer bana ke target observe karo
const observer = new MutationObserver(callback);
observer.observe(target, config);

// 🔘 Button 1: Text add karna
document.getElementById("addText").addEventListener("click", () => {
  target.innerHTML += "<p>📝 New Text</p>";
});

// 🎨 Button 2: Class toggle
document.getElementById("changeClass").addEventListener("click", () => {
  target.classList.toggle("highlighted");
});
