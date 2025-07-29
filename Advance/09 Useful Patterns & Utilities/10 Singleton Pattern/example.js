 // 🧱 Singleton Pattern in JavaScript
// 🔍 Use-case: Ensure only one instance of an object exists (e.g., config, DB connection)

// ✅ Singleton using Class
class AppConfig {
  constructor(theme, mode) {
    // 🔁 Agar already ek instance bana hai, to wahi return karo
    if (AppConfig.instance) {
      return AppConfig.instance;
    }

    // 📦 Nahi bana to values assign karo aur instance save karo
    this.theme = theme;
    this.mode = mode;
    AppConfig.instance = this; // 👈 First time instance yahan set hota hai
  }

  getConfig() {
    return `Theme: ${this.theme}, Mode: ${this.mode}`;
  }
}

const config1 = new AppConfig("dark", "production");
console.log("Config1:", config1.getConfig()); // Theme: dark, Mode: production

const config2 = new AppConfig("light", "development");
console.log("Config2:", config2.getConfig()); // Still: Theme: dark, Mode: production

console.log("Same Instance:", config1 === config2); // true

// ✅ Singleton using Closure (IIFE pattern)
const SingletonCounter = (function () {
  let instance; // 🧠 Private variable to hold instance

  function create() {
    let count = 0;
    return {
      increment: () => ++count,
      getCount: () => count
    };
  }

  return function () {
    if (!instance) instance = create(); // 🏗️ Pehli baar hi create hoga
    return instance; // 🧩 Baad me wahi instance return hoga
  };
})();

const counterA = SingletonCounter();
const counterB = SingletonCounter();

counterA.increment();
counterA.increment();

console.log("Counter B count:", counterB.getCount()); // 2 (shared instance!)

/*
🌀 FLOW STEPS 

👉 Class-based Singleton:

Step 1: AppConfig class banayi jisme static instance store hota hai
Step 2: Jab config1 banaya → theme: dark, mode: production set hua
Step 3: Jab config2 banaya → constructor me dekha ki instance already hai
        → wahi purana instance return ho gaya
Step 4: config2.getConfig() bhi wahi purana config return karega

📌 config1 === config2 → true (same instance)

👉 Closure-based Singleton:

Step 1: IIFE function turant execute ho gaya aur `instance` naam ka variable create hua (private)
Step 2: create() function ke through count, increment & getCount define kiye gaye
Step 3: SingletonCounter() call karne par agar instance exist nahi hai to create() se naya banta hai
Step 4: Baad me wahi shared object return hota hai (counterA, counterB same hi object)

📌 counterA.increment() → same object ka count badh raha hai
📌 counterB.getCount() → same value return karega (2)

🧠 Why Singleton?

✔️ Configurations, logging, or DB connections ke liye ek hi shared instance chahiye hota hai
✔️ Global state ko manage karne ka clean pattern
✔️ Memory efficient & predictable behavior

📦 2 Approaches:

| Approach         | Description                          |
|------------------|--------------------------------------|
| Class-based      | Modern JS (ES6+), static instance    |
| Closure-based    | Functional style, IIFE + closure     |

*/

