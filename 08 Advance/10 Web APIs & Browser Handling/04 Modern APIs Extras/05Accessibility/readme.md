 # ♿ Accessibility (A11Y) in Web 

Accessibility ka matlab hai:  
👉 Har user (including disabled users) tumhari website ko use kar paye — screen reader, keyboard, etc. se.

A11Y = Accessibility (11 letters between A and Y)

---

## 🎯 Objective

- Screen readers ke liye elements accessible banana
- Keyboard navigation enable karna
- Proper HTML roles aur ARIA attributes ka use karna

---

## 📦 Use Cases

- Government websites
- WCAG compliance (required by law in many places)
- Voice/screen reader users
- Keyboard-only users

---

## 🔁 Flow

1. Use semantic HTML (like `<button>`, `<label>`, `<nav>`, etc.)  
2. Add ARIA roles where needed (`aria-label`, `aria-hidden`, etc.)  
3. Keyboard focus manage karo (`tabindex`)  
4. Visually hidden content ko screen readers ke liye accessible banao

---

## 🔧 Important Tags / Attributes

| Attribute / Tag      | Purpose                                  |
|----------------------|------------------------------------------|
| `aria-label`         | Element ko custom label dena             |
| `aria-hidden="true"` | Element ko screen reader se chhupana     |
| `tabindex="0"`       | Element ko tab se focusable banana       |
| `<label for="id">`   | Input fields ko label assign karna       |
| `role="alert"`       | Screen reader ko alert sunane ka signal  |

---

## ✅ Keyboard Navigation Tips

- Use `tab` key to navigate
- Use `enter` or `space` to activate buttons
- Use `tabindex="-1"` to make element unfocusable
- Use arrow keys in custom controls (e.g. sliders)

---

## 🧪 Demo:
- Form with proper labels  
- Buttons with screen reader support  
- Custom element with keyboard navigation

---

## 📌 Bonus

Try using a **screen reader** like:
- 🔈 ChromeVox (extension)
- 🎧 NVDA (Windows)
- 🔊 VoiceOver (Mac/iOS)
