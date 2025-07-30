# 🍪 Cookies in JavaScript – Read, Write, Delete

---

## 🔹 Cookies kya hota hai?

- Small text data jo browser me store hoti hai
- Server-side ya client-side dono se access ho sakti hai
- By default: every HTTP request ke sath server ko bheji jaati hai
- ⚠️ Size limit ~4KB

---

## 📦 Syntax (JS se):

```js
// Set
document.cookie = "name=Anuj; expires=Sun, 31 Dec 2025 23:59:59 UTC; path=/";

// Get
console.log(document.cookie); // key=value; key2=value2;

// Delete (set past expiry)
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

### ⚙️ Important Flags:
| Flag       | Use                                      |
| ---------- | ---------------------------------------- |
| `expires`  | Kab tak cookie valid hai (date format)   |
| `path`     | Kis path me valid hai (e.g. / or /admin) |
| `Secure`   | Sirf HTTPS pe accessible                 |
| `HttpOnly` | JS se access nahi ho sakti (only server) |
| `SameSite` | CSRF protect karta hai (Strict/Lax/None) |

### ❗ Warnings:
- Size limit: 4096 bytes (~4KB)

- Performance impact: har request ke sath jata hai

- JS-only cookies are not secure
 
- Server-set cookies are more reliable and secure

### ✅ Use Cases:
- Auth token exchange (e.g., sessionId)

- "Remember Me" features

- Tracking (analytics tools like GA)

- Server-client sync


