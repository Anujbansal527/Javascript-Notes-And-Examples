try {
  console.log("👋 Start");
  let result = 10 / a; // ❌ 'a' undefined hai, error aayega
  console.log("Result:", result);
} catch (error) {
  console.log("⚠️ Error aaya =>", error.message);
}

console.log("✅ Program continue kiya...");