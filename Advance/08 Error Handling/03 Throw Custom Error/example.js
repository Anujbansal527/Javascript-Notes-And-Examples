let age = 15;

try {
  if (age < 18) {
    throw new Error("🚫 Age must be 18+");
  }
  console.log("✅ You can vote");
} catch (e) {
  console.log("⚠️ Custom Error:", e.message);
}