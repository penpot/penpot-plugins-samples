document.querySelector("[data-handler='create-flex']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-flex", "*");
});
