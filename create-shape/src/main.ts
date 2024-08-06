document.querySelector(".action-create-rectangle")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-rectangle", "*");
});
