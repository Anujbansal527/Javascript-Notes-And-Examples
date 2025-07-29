  ## 🧠 What is DOM Manipulation?

DOM Manipulation ka matlab hai: **HTML page ke elements ko JS se change/update karna** — jaise:

- Text change karna
- HTML content inject karna
- Input value update karna
- Hide/show elements
- Dynamic UI banana (like todo list, product cards)

---

## 🔧 Methods for Manipulation

| Method              | Purpose                          | Example |
|---------------------|----------------------------------|---------|
| `innerText`         | Text content without HTML        | `element.innerText = "Hello"` |
| `innerHTML`         | Inject raw HTML                  | `element.innerHTML = "<b>Hi</b>"` |
| `textContent`       | Similar to innerText, more raw   | `element.textContent = "Raw Text"` |
| `value` (input)     | Input field value get/set        | `input.value = "New Text"` |

---

## 📌 innerText vs innerHTML vs textContent

| Property      | Includes Tags? | Includes Hidden Text? | Use Case |
|---------------|----------------|------------------------|----------|
| innerText     | ❌ No           | ❌ No                  | Human-visible text |
| innerHTML     | ✅ Yes          | ❌ No                  | Add HTML content |
| textContent   | ❌ No           | ✅ Yes                 | Raw full content |

---

## ✅ Common Real-World Scenarios

- Button click se text change karna
- Input value read karna
- Form reset karna
- Dynamic HTML add karna (cards, messages)

---