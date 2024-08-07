document.querySelector(".action-create-color")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-color", "*");
});

document.querySelector(".action-read-colors")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("read-colors", "*");
});
