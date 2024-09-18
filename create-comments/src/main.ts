document.querySelector("[data-handler='create-comment']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("create-comment", "*");
});

document.querySelector("[data-handler='reply-comment']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("reply-comment", "*");
});

document.querySelector("[data-handler='delete-comment']")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("delete-comment", "*");
});

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});