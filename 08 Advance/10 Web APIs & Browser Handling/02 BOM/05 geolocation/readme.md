# 📍 Geolocation API – User ka Real Location Access Karna

---

## 🔹 Kya hota hai Geolocation API?

- Ye browser feature user ke current **latitude & longitude** ko access karta hai.
- Iska base object hota hai: `navigator.geolocation`
- Browser permission maangta hai (🔒 user approval needed)

---

## 🔹 Syntax:

```js
navigator.geolocation.getCurrentPosition(successFn, errorFn);
```
✅ successFn → position mil gaya

❌ errorFn → user ne mana kiya, ya support nahi mila. 

### 🔹 Properties (in position object):
| Property                    | Description        |
| --------------------------- | ------------------ |
| `position.coords.latitude`  | User ka latitude   |
| `position.coords.longitude` | User ka longitude  |
| `position.coords.accuracy`  | Accuracy in meters |

### 🧠 Real Life Use Cases:
- Weather app (location ke basis pe weather)

- Nearby stores detect karna

- Maps/directions provide karna

- Geo-tagging photos

### ⚠️ Important Notes:
- Permission must hai! (user allow kare tabhi milega)

- HTTPS page hona chahiye (secure context required)

- On error: block, timeout, unsupported
