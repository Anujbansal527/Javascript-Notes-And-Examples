# 💾 Browser Storage – localStorage, sessionStorage, Cookies

---

## 🧠 Purpose:
Browser Storage ka use tab hota hai jab hume client-side (user browser) me data temporarily ya permanently store karna hota hai – bina server pe request bheje.

---

## 🔹 1. localStorage

- ✅ Persistent (tab, browser close hone ke baad bhi data rahega)
- 🔐 Secure nahi (any JS file can access)
- 📦 Key-Value string storage only
- 📏 Size limit: ~5MB

### ✅ Common Use Cases:
- Theme (light/dark)
- Remember user settings
- JWT token storage (⚠️ not recommended due to XSS)

---

## 🔹 2. sessionStorage

- 🕐 Data tab tak rahega jab tak user us tab ko close nahi karta
- 👥 Alag tabs ke liye alag sessionStorage
- 📦 Same API as localStorage
- 📏 Size limit: ~5MB

### ✅ Use Cases:
- Multi-step forms (tab-specific)
- Form drafts or previews
- Temporary session data

---

## 🔹 3. Cookies 🍪

- ⚠️ Oldest method, still used for:
  - Authentication
  - Tracking
  - Server-side session management

- 🕒 Can have expiration (set via `expires` or `max-age`)
- 👀 Sent with every request → affect performance
- ✅ Can be set `HttpOnly`, `Secure`, `SameSite`

---

## 🔁 Comparison Table

| Feature              | localStorage     | sessionStorage   | Cookies         |
|----------------------|------------------|------------------|-----------------|
| Lifetime             | Manual / forever | Until tab closes | Based on expiry |
| Sent to server       | ❌ No             | ❌ No             | ✅ Yes           |
| Size limit           | ~5MB             | ~5MB             | ~4KB            |
| Accessible from JS   | ✅ Yes            | ✅ Yes            | ✅ Yes (unless HttpOnly) |
| Storage type         | String only      | String only      | String only     |
| Use for auth         | ❌ Not safe       | ❌ Not safe       | ✅ Preferred     |

---

## ⚠️ Security Notes

- ❗ Don’t store sensitive info in localStorage/sessionStorage.
- ❗ Use `HttpOnly` and `Secure` flags in cookies for safe authentication.
- ❗ Avoid XSS (Cross-Site Scripting) by sanitizing inputs.
- 🔐 Cookies support `SameSite` to prevent CSRF.

