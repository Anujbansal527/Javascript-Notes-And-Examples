 function traverse() {
  // 👇 Main container select kiya
  const main = document.getElementById("main");

  // ✅ Children access using .children (element nodes only)
  const children = main.children;
  console.log("Total children:", children.length);
  for (let i = 0; i < children.length; i++) {
    console.log(`Child ${i + 1}:`, children[i].innerText);
  }

  // ✅ First and last child element
  console.log("First Child:", main.firstElementChild.innerText);
  console.log("Last Child:", main.lastElementChild.innerText);

  // ✅ Access a single child and uska parent
  const secondChild = children[1];
  console.log("Second child:", secondChild.innerText);

  const parent = secondChild.parentElement;
  console.log("Parent of second child:", parent.id);

  // ✅ Access sibling of second child
  const next = secondChild.nextElementSibling;
  const prev = secondChild.previousElementSibling;

  console.log("Next sibling:", next?.innerText || "No next sibling");
  console.log("Previous sibling:", prev?.innerText || "No previous sibling");
}
