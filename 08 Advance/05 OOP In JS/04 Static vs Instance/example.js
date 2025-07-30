// ✅ Class declaration
class Car {
  constructor(name) {
    // 👇 Instance property (object-specific)
    this.name = name;
  }

  // ✅ Instance method
  drive() {
    // 👉 drive method sirf object ke through accessible hoga (carA.drive())
    console.log(`${this.name} ab drive kar rahi hai 🚗`);
  }

  // ✅ Static method
  static compare(car1, car2) {
    // 👉 compare method class ke through call hota hai (Car.compare()), not instance
    console.log(`Comparing ${car1.name} and ${car2.name}`);
  }
}

// ✅ Instances (objects) banaye gaye Car class se
const carA = new Car("BMW");
const carB = new Car("Audi");

// ✅ Instance method call
carA.drive(); // 🔹 Output: BMW ab drive kar rahi hai 🚗

// ✅ Static method call using class name
Car.compare(carA, carB); // 🔹 Output: Comparing BMW and Audi

// ❌ Incorrect usage: Static method ko instance ke through call karne ki koshish
// carA.compare(carB); // ❌ Error: compare is not a function

/*
🧠 Summary:

🔹 carA, carB → instances (objects)
🔹 carA.drive() → valid ✅ (instance method)
🔹 Car.compare(carA, carB) → valid ✅ (static method)
🔹 carA.compare() → ❌ Invalid (static method ko object se access nahi kar sakte)

🧩 Static methods → utility/helper functions ke liye hoti hain 
jo kisi object par depend nahi karti, bas class ke level par hoti hain.
*/
