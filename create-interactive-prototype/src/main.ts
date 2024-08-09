document.querySelector(".action-create-flow")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-flow", "*");
});
