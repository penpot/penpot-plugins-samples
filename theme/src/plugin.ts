// When we open the plugin modal, we just add the current theme that's applied in the penpot UI to the iframe URL as a parameter.
penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.getTheme()}`);

// When you switch themes in the penpot UI, we'll send a message to handle it in main.js.
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});