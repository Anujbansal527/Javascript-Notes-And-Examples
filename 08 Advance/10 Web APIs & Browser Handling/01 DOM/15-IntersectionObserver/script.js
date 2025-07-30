 // 🔍 Target element jisko observe karna hai
const target = document.getElementById("targetBox");

// 🧠 Callback function jab bhi target viewport mein enter ya exit kare
const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // ✅ Element visible hai → class add karo
      entry.target.classList.add("visible");
      console.log("👁️ Target is visible");
    } else {
      // 🔁 Exit hone pe class hata do
      entry.target.classList.remove("visible");
      console.log("👁️ Target is NOT visible");
    }
  });
};

// 🛠️ Options: threshold 0.5 means 50% visible hona chahiye
const options = {
  threshold: 0.5
};

// 🔁 Observer create karo
const observer = new IntersectionObserver(callback, options);

// 📌 Target ko observe karna start karo
observer.observe(target);
