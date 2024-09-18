document.querySelector("[data-handler='add-ruler-guide']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("add-ruler-guide", "*");
});

document.querySelector("[data-handler='remove-ruler-guide']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("remove-ruler-guide", "*");
});

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});