// 📌 Jab textarea me kuch likha jaye, us note ko localStorage me save karna hai
const textarea = document.getElementById('note');   // 📝 HTML ka <textarea> element ko select kiya
const status = document.querySelector('.status');   // 📢 Online/Offline status dikhane wali element ko select kiya

// 🔁 Agar pehle se koi note save hai to use wapas textarea me dikha do
textarea.value = localStorage.getItem('note') || ''; // 📥 'note' key se value lo localStorage se, agar nahi mili to blank rakho

// ✍️ Jab user textarea me likhe (input event), note ko localStorage me save kar do
textarea.addEventListener('input', () => {
  localStorage.setItem('note', textarea.value); // 💾 Note ko localStorage me 'note' key ke andar store karo
});

// 🌐 Jab page load ho, to check karo user online hai ya nahi
window.addEventListener('load', () => {
  if (navigator.onLine) {
    status.textContent = "✅ You're Online";         // ✅ Agar user online hai to ye message dikhao
  } else {
    status.textContent = "📴 You're Offline (cached)"; // 📴 Agar user offline hai to ye message dikhao
  }
});
