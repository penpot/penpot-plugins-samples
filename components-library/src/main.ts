document.querySelector(".action-create-component")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-component", "*");
});

document.querySelector(".action-read-components")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("read-components", "*");
});
