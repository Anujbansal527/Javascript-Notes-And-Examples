// 🔹 Event Handlers and `this` in JavaScript
// ✅ Step 1: Normal Function Event Handler
// 👉 Ek button create kar rahe hain
const btn1 = document.createElement("button");
btn1.innerText = "Click - Normal Function";
btn1.id = "btn1";
document.body.appendChild(btn1);

// 👉 Normal function me `this` ka value button element hota hai
btn1.addEventListener("click", function () {
  console.log("👉 Normal Function `this`:", this); // ✅ <button> element
  this.style.backgroundColor = "lightgreen"; // ✅ kaam karega
});

// ---------------------------------------------

// ✅ Step 2: Arrow Function Event Handler

const btn2 = document.createElement("button");
btn2.innerText = "Click - Arrow Function";
btn2.id = "btn2";
document.body.appendChild(btn2);

// 👉 Arrow function me `this` lexical hota hai (outer context ka this lega)
// Yahaan arrow function outer context ka `this` lega (window ya module)
btn2.addEventListener("click", () => {
  console.log("👉 Arrow Function `this`:", this); // ❌ window (ya undefined strict mode me)
  // this.style.backgroundColor = "orange"; // ❌ kaam nahi karega
});

// ---------------------------------------------

// ✅ Step 3: Object Method ke andar Event Handlers

const eventObj = {
  id: "eventBtn",
  create: function () {
    const btn = document.createElement("button");
    btn.innerText = "Click - Object Method";
    document.body.appendChild(btn);

    // 👉 Regular function use kiya gaya hai, toh `this` = <button>
    btn.addEventListener("click", function () {
      console.log("👉 Object + Regular Func `this`:", this); // ✅ <button>
      this.style.backgroundColor = "skyblue"; // ✅ valid
    });

    // 👉 Arrow function use kiya gaya hai, toh `this` = eventObj (lexical parent)
    btn.addEventListener("dblclick", () => {
      console.log("👉 Object + Arrow Func `this`:", this); // ❌ eventObj (not button)
      // this.style.backgroundColor = "pink"; // ❌ kaam nahi karega
    });
  },
};

// 🔁 Call the method to create the button and attach events
eventObj.create();
