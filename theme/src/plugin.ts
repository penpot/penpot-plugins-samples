// When we open the plugin modal, we add to the iframe URL as a param the current theme applied in the penpot UI
penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.getTheme()}`);

// When the theme is changed in the penpot UI we send a message to handle it in main.js
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});