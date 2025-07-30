// 🔹 Async Error Handling - Promises
fetch("https://wrongurl.com")
  .then(res => res.json())
  .catch(err => {
    console.log("🚨 Error in Fetch:", err.message);
  });

// 🔹 Using async/await
async function getData() {
  try {
    let res = await fetch("https://wrongurl.com");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("❌ Error in async:", error.message);
  }
}

getData();