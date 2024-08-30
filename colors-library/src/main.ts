document.querySelector("[data-handler='create-color']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-color", "*");
});

document.querySelector("[data-handler='read-colors']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("read-colors", "*");
});
