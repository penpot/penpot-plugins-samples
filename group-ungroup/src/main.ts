// get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

document.querySelector(".action-group")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("group", "*");
});

document.querySelector(".action-ungroup")?.addEventListener("click", () => {
  // send message to plugin.ts
  parent.postMessage("ungroup", "*");
});

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});