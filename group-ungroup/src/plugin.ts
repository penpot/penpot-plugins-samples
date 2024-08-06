penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.getTheme()}`);

penpot.ui.onMessage<string>((message) => {
  if (message === "group") {
    const selected = penpot.selection;
    if (selected.length) {
      penpot.group(selected);
    }
    
  } else if (message === "ungroup") {
    const selected = penpot.selection;
    if (selected.length && penpot.utils.types.isGroup(selected[0])) {
      penpot.ungroup(selected[0]);
    }
  }
});

// Update the theme in the iframe
penpot.on("themechange", (theme) => {
  penpot.ui.sendMessage({
    source: "penpot",
    type: "themechange",
    theme,
  });
});