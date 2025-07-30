// 🟢 STEP 1: Sabhi tasks aur columns ko select karo
const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

// 🟢 STEP 2: Har task ko draggable banane ke liye drag events lagao
tasks.forEach(task => {
  task.addEventListener("dragstart", (e) => {
    // Jab drag start ho, uski ID ko dataTransfer me store karo
    e.dataTransfer.setData("text/plain", e.target.id);
    task.classList.add("dragging"); // style ke liye class
  });

  task.addEventListener("dragend", () => {
    // Jab drag khatam ho, class hata do
    task.classList.remove("dragging");
  });
});

// 🟢 STEP 3: Har column par dragover & drop ke events lagao
columns.forEach(column => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault(); // ⚠️ drop allow karne ke liye zaroori hai
    column.style.backgroundColor = "#d2f8d2"; // Visual feedback (light green)
  });

  column.addEventListener("dragleave", () => {
    // Jab drag bahar chala jaye to bg reset kar do
    column.style.backgroundColor = "#f1f1f1";
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();

    // Dragged task ki ID wapas lo
    const taskId = e.dataTransfer.getData("text/plain");
    const task = document.getElementById(taskId);

    // Us task ko is column ke andar daal do
    column.appendChild(task);

    // Background color reset karo
    column.style.backgroundColor = "#f1f1f1";

    // Console me print karo
    console.log(`✅ Moved "${task.textContent}" to "${column.querySelector("h2").textContent}"`);
  });
});
 /*
 ## 🧩 Drag & Drop Steps in Hinglish

### 🟢 Step 1:
Sabhi `.task` aur `.column` elements ko select kiya.

### 🟢 Step 2:
Har `task` pe `dragstart` lagaya, jisme:
- ID ko store kiya using `e.dataTransfer.setData`
- Visual effect ke liye `.dragging` class add ki

`dragend` pe class remove ki gayi.

### 🟢 Step 3:
Har `column` pe:
- `dragover`: Prevent default + green background
- `dragleave`: Background reset
- `drop`:
  - ID retrieve kiya
  - Task ko column ke andar `appendChild()` kiya
  - Console me move log print kiya
 */