// ✅ Step 1: Base Object (Template object bana rahe hain jisme methods defined hain)
const userTemplate = {
  greet() {
    console.log(`👋 Hello, I am ${this.name}`);
  },
  showRole() {
    console.log(`🔑 Role: ${this.role}`);
  },
};

// ✅ Step 2: New object inherit karo using Object.create()
// Yahaan anuj object ko userTemplate se inherit kar rahe hain
const anuj = Object.create(userTemplate);

// ✅ Step 3: Custom properties assign karo
// In properties ko anuj object pe directly assign kar rahe hain
anuj.name = "Anuj Bansal";
anuj.role = "Frontend Developer";

// ✅ Step 4: Call inherited methods
// Ye methods directly anuj object me nahi hain, lekin prototype chain ke through mil jaate hain
anuj.greet();     // 👋 Hello, I am Anuj Bansal
anuj.showRole();  // 🔑 Role: Frontend Developer

// ✅ Step 5: Check prototype link (optional debug step)
// __proto__ se prototype chain check karte hain
console.log(anuj.__proto__ === userTemplate); // ✅ true
