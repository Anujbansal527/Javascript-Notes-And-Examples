# 🛡️ Browser Storage Security Notes (XSS, Cookies, Flags)

---

## 🔐 1. localStorage / sessionStorage Risks:

| Risk           | Description                                                                 |
|----------------|-------------------------------------------------------------------------------|
| ❗ XSS Attack   | JavaScript injection via `<script>` or input → attacker can read your storage |
| ❌ No Flags     | Can't add `HttpOnly`, `Secure`, `SameSite` → easily accessible to any JS file  |
| ⚠️ Permanent    | localStorage data remains unless manually cleared → long-term exposure

### 🧪 Example (XSS):
```html
<script>
  alert(localStorage.getItem("token"));
</script>
```
If this script is injected, attacker can see token.

### ✅ Mitigation:
- Never store auth tokens or passwords in localStorage

- Sanitize all user input (avoid DOM-based XSS)

- Use server-side sessions or HttpOnly cookies for auth

### 🍪 2. Secure Cookies Best Practices:
| Flag       | What It Does                                        |
| ---------- | --------------------------------------------------- |
| `HttpOnly` | JS can't access cookie (even via `document.cookie`) |
| `Secure`   | Only accessible over HTTPS                          |
| `SameSite` | Prevents CSRF attacks                               |

### Example (Set by Server or Headers):
```js
Set-Cookie: token=abc123; HttpOnly; Secure; SameSite=Strict
```

### 🔁 Comparison :
| Feature        | localStorage | sessionStorage | Cookie                     |
| -------------- | ------------ | -------------- | -------------------------- |
| JS Accessible  | ✅ Yes        | ✅ Yes          | ✅ Yes (❌ if HttpOnly)      |
| Size Limit     | \~5MB        | \~5MB          | \~4KB                      |
| Sent to server | ❌ No         | ❌ No           | ✅ Yes                      |
| Expiry         | Manual Clear | On Tab Close   | Expiry-based               |
| Security Flags | ❌ No         | ❌ No           | ✅ (Secure, HttpOnly, etc.) |

