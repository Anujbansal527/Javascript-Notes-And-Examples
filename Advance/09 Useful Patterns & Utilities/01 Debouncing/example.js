// 📘 Debounce Example in JavaScript
// 🔍 Use-case: Search input, window resize, form validation

// ✅ Debounce Utility Function
function debounce(fn, delay) {
  let timer; // ⏳ Timer reference store karne ke liye

  // 🔁 Har baar ye naya function return karega jo debounce effect create karega
  return function (...args) {
    // 🧹 Har baar pehle se chal raha timer clear kar do
    clearTimeout(timer);

    // 🕒 Naya timer set karo, agar user ruk gaya to delay ke baad fn() chalega
    timer = setTimeout(() => {
      fn.apply(this, args); // 🔁 Original function ko sahi context aur arguments ke sath call karo
    }, delay);
  };
}

// 🧪 Example: Debounced Input Listener

// 📥 Ek input box banate hain jahan user type karega
const searchInput = document.createElement("input");
searchInput.setAttribute("placeholder", "Type to search...");
searchInput.style.padding = "10px";
searchInput.style.fontSize = "16px";
searchInput.style.margin = "20px";
document.body.appendChild(searchInput);

// 👇 Debounced event listener lagate hain input par
searchInput.addEventListener(
  "input",
  debounce(function (event) {
    // 📦 Actual kaam yahan ho raha hai: input value ko console mein print karna
    console.log("🔍 Searching for:", event.target.value);
  }, 500) // ⏱️ 500ms ka delay (matlab agar user 500ms tak nahi type kare, tabhi chalega)
);

/* 
🌀 FLOW STEPS 

👉 Step 1: Page par input field ban gaya
    - User type karne laga (e.g., "hello")

👉 Step 2: 'input' event fire hota hai har character ke saath
    - e.g., "h", "he", "hel", "hell", "hello"

👉 Step 3: Har input event ke sath debounce() function call hota hai
    - Pehle se koi timer chalu ho to wo clear ho jata hai (clearTimeout)

👉 Step 4: Naya setTimeout set hota hai
    - Agar user typing continue karta raha, to timer baar-baar reset hota rahega

👉 Step 5: Jaise hi user ruk gaya (no typing for 500ms)
    - Last setTimeout fire hota hai → actual search function call hota hai

👉 Step 6: Console mein dikhega:
    🔍 Searching for: hello

🧠 Fayda:
- Bar-bar backend call ya heavy processing nahi hoti
- Sirf tab chalta hai jab user thoda ruk jaye

✅ Isko real-time search, resize, scroll events me use karte hain
*/
