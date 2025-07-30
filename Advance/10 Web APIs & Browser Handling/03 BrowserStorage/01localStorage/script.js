const output = document.getElementById("output");

function saveName() {
  const name = document.getElementById("username").value;

  // ✅ Step 1: Store name string me (key: username)
  localStorage.setItem("username", name);
  output.textContent = `✅ Name saved: ${name}`;
}

function getName() {
  // ✅ Step 2: localStorage se value uthao
  const name = localStorage.getItem("username");

  if (name) {
    output.textContent = `👋 Welcome back, ${name}`;
  } else {
    output.textContent = `⚠️ No name found in storage`;
  }
}

function clearName() {
  // ✅ Step 3: storage se delete karo
  localStorage.removeItem("username");
  output.textContent = "🗑️ Name cleared from storage";
}
