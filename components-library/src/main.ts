document.querySelector("[data-handler='create-component']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-component", "*");
});

document.querySelector("[data-handler='read-components']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("read-components", "*");
});
