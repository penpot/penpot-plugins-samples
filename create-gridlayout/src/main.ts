document.querySelector(".action-create-grid")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-grid", "*");
});
