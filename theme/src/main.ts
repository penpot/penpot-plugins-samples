// Get the current theme from the URL and update the param of the plugin URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    // when the theme is updated in the penpot UI we also update the param of the plugin URL
    document.body.dataset.theme = event.data.theme;
  }
});