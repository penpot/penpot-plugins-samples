document.querySelector(".action-group")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("group", "*");
});

document.querySelector(".action-ungroup")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("ungroup", "*");
});
