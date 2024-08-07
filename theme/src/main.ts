// Just get the current theme from the URL and update the parameter of the plugin URL.
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    // When we make updates to the theme in the penpot UI, we also make updates to the plugin URL parameters.
    document.body.dataset.theme = event.data.theme;
  }
});