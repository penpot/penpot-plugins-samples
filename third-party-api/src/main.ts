document.querySelector(".action-create-images-board")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-images-board", "*");
});
