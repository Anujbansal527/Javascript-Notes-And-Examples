## 💼 Real-World Scenario: User & Admin System

### 🔹 Parent Class: `User`
- Name
- Email
- #password (private)
- login()
- logout()
- Getter for email
- Setter for password with validation

### 🔹 Child Class: `Admin`
- `extends User`
- Role = "Admin"
- Method: deleteUser()

---

## ⚙️ OOP Concepts Used:

| Feature              | Used? |
|----------------------|-------|
| Class                | ✅     |
| Constructor          | ✅     |
| Inheritance          | ✅     |
| Private Properties   | ✅     |
| Getters & Setters    | ✅     |
| Static Method        | ✅     |
| Instance Method      | ✅     |

---

## 🎯 Output Example:

```js
const user1 = new User("Anuj", "anuj@gmail.com", "secret123");
user1.login(); // ✅ Login success

const admin1 = new Admin("Admin Bhai", "admin@gmail.com", "admin@123");
admin1.deleteUser(user1); // 🗑️ Deleted user: Anuj
```
