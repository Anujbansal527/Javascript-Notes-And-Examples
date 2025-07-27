// 🔹 Class Context and `this`
// ✅ Regular class method
class Student {
  constructor(name, roll) {
    // constructor ke andar this ka matlab current object (instance)
    this.name = name;
    this.roll = roll;
  }

  showDetails() {
    // yeh ek regular method hai — jab hum ise object ke through call karte hain,
    // tab `this` student object ko refer karega
    console.log("👉 Student Details:", this.name, this.roll);
  }
}

const s1 = new Student("Anuj", 101);
s1.showDetails(); // ✅ Output: Anuj 101


// ✅ Arrow function in class (auto-bound)
class Demo {
  constructor() {
    this.name = "ArrowUser"; // object ka property set ho raha hai
  }

  regularFunc() {
    // yeh regular function hai — agar isse directly object ke through call karein,
    // to `this` object ko refer karta hai
    console.log("👉 Regular Method:", this.name);
  }

  arrowFunc = () => {
    // arrow function `this` ko lexical scope se leta hai,
    // matlab jaha pe define hua (constructor), wahi ka this bind hoga
    console.log("👉 Arrow Method:", this.name);
  }
}

const d = new Demo();
d.regularFunc(); // ✅ Output: ArrowUser
d.arrowFunc();   // ✅ Output: ArrowUser


// ❌ If we detach regularFunc, it will lose `this`
const detached = d.regularFunc;
detached(); // ❌ undefined (kyunki ab function ke paas apna context nahi hai)

// ✅ Arrow function remains bound
const detachedArrow = d.arrowFunc;
detachedArrow(); // ✅ Output: ArrowUser (kyunki arrow function lexical context hold karta hai)


// ✅ Static method example
class Tools {
  static about() {
    // static method class se directly call hota hai, na ki object se
    // isme `this` class ko refer karta hai (not instance)
    console.log("👉 this in static:", this); // ✅ Tools class hi print hoga
  }
}

Tools.about(); // ✅ Output: this = class Tools
