try {
  nonExistentFunction();
} catch (err) {
  console.log("🧠 Name:", err.name);
  console.log("📩 Message:", err.message);
  console.log("📚 Stack Trace:\n", err.stack);
}