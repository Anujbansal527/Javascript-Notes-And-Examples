try {
  console.log("🚀 Try Block Start");
  let x = y + 1; // ❌ Error aayega (y is not defined)
} catch (e) {
  console.log("💥 Catch Block =>", e.message);
} finally {
  console.log("🧹 Finally Block - Har haal mein chalega");
}

console.log("✅ Program done");