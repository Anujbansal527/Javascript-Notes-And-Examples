let worker;

function startWorker() {
  const output = document.getElementById("output");

  // 🔁 Worker ko baar-baar create na karein
  if (typeof Worker !== "undefined") {
    if (!worker) {
      // 🧵 Worker banaya → alag file me background thread chalega
      worker = new Worker("worker.js");
    }

    output.textContent = "🔄 Calculating in background...";

    // 🎯 Main thread → Worker ko message bhejna (e.g., input data)
    worker.postMessage("start");

    // ✅ Jab result wapas mile
    worker.onmessage = function (event) {
      output.textContent = "✅ Result: " + event.data;
    };
  } else {
    output.textContent = "❌ Your browser does not support Web Workers.";
  }
}

/*
🧵 Web Worker flow: 
➡️ User button dabata hai → main thread "main.js" ek worker start karta hai 
➡️ Worker background me calculation karta hai (e.g., sum of huge numbers) 
➡️ UI bilkul bhi freeze nahi hoti ✅ 
➡️ Result milne par "postMessage" se main thread ko result milta hai 
➡️ Output user ko dikhaya jata hai 🔁
 */