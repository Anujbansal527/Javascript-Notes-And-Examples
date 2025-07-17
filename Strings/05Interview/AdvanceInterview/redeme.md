# 🎯 String Coding Interview Questions (with Patterns)

This file covers **interview-level string problems** with patterns, logic, and tips for solving them.

---

## ✅ Must-Know QnA Patterns

| 🔹 Question | 🧠 Tip |
|------------|--------|
| Reverse a string | Use `split().reverse().join()` |
| Check palindrome | Compare with reversed version |
| Count vowels | Loop with `includes("aeiou")` |
| Anagram check | Sort both strings, compare |
| Remove duplicates | Use `Set` or object |
| Compress string | Use loop + counter logic |
| Toggle case | Check case and flip |
| First non-repeating char | Use `Map`/object for frequency |
| Longest word | Split sentence + compare lengths |
| Count word frequency | Use `Map` or object |
| Capitalize each word | Split + capitalize first char |
| Replace vowels | Use `replace()` with regex |
| Convert to Title Case | `.split(' ')`, map, join |
| Valid palindrome ignoring cases/spaces | Normalize + check |
| Reverse words in sentence | `split(' ').reverse().join(' ')` |
| Check for subsequence | Two-pointer method |
| Max occurring character | Frequency count |

---

## 💡 Interview Tricks

- Use `Map` or `{}` to store frequencies
- Normalize strings (`toLowerCase()`, `replace(/\s/g, '')`)
- Avoid modifying string directly – they are immutable
- Use `charCodeAt()` and `String.fromCharCode()` for character-based logic

