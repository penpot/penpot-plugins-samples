document.querySelector(".action-create-flex")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-flex", "*");
});
