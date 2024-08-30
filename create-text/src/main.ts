document.querySelector("[data-handler='create-text']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-text", "*");
});

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});