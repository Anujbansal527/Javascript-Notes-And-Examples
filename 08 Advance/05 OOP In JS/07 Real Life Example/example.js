// 🔹 Parent class - User
class User {
  #password; // 👈 Private field, direct access allowed nahi hai

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#password = password;
  }

  // 🔸 Instance method - login
  login() {
    console.log(`✅ ${this.name} ne login kiya`);
  }

  // 🔸 Instance method - logout
  logout() {
    console.log(`👋 ${this.name} logout ho gaya`);
  }

  // 🔸 Getter method - email read karne ke liye
  get userEmail() {
    return this.email;
  }

  // 🔸 Setter method - password update karne ke liye
  set userPassword(newPass) {
    if (newPass.length >= 6) {
      this.#password = newPass;
      console.log("🔐 Password update ho gaya");
    } else {
      console.log("❌ Password 6 char se zyada hona chahiye");
    }
  }

  // 🔸 Static method - class se direct call hoti hai, instance se nahi
  static platform() {
    console.log("🌐 Platform: Anuj JS App");
  }
}

// 🔹 Child class - Admin, User se inherit karta hai
class Admin extends User {
  constructor(name, email, password) {
    super(name, email, password); // 🔄 Parent constructor call
    this.role = "Admin"; // 👑 extra property
  }

  // 🔸 Admin-specific method
  deleteUser(user) {
    console.log(`🗑️ Admin ${this.name} ne delete kiya: ${user.name}`);
  }
}

// ✅ Usage / Example Run:

const user1 = new User("Anuj", "anuj@gmail.com", "anuj@123");

user1.login(); // ✅ Anuj ne login kiya
console.log("📧", user1.userEmail); // 📧 anuj@gmail.com

user1.userPassword = "123";        // ❌ short password
user1.userPassword = "123456";     // 🔐 Password update ho gaya

// 🔹 Create admin user
const admin = new Admin("Admin Bhai", "admin@gmail.com", "adminpass");

admin.login();  // ✅ Admin Bhai ne login kiya
admin.deleteUser(user1); // 🗑️ Admin Admin Bhai ne delete kiya: Anuj

// 🔹 Static method - direct class se call hoti hai
User.platform(); // 🌐 Platform: Anuj JS App

// ❌ user1.platform(); // Error: instance se static method call nahi hoti