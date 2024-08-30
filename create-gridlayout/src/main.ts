document.querySelector("[data-handler='create-grid']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-grid", "*");
});
