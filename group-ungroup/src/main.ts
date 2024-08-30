document.querySelector("[data-handler='group']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("group", "*");
});

document.querySelector("[data-handler='ungroup']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("ungroup", "*");
});
