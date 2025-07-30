// 👂 Worker listen karega jab main thread kuch bhejta hai
onmessage = function (event) {
  if (event.data === "start") {
    // 💥 Heavy task simulate karte hain (loop for demo)
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
      sum += i;
    }

    // 📤 Result wapas main thread ko bhejna
    postMessage(sum);
  }
};
