penpot.ui.open("Penpot plugin starter template", `?theme=${penpot.getTheme()}`);

penpot.ui.onMessage<string>((message) => {
  if (message === "create-rectangle") {
    // You can also use createEllipse(), createPath() or createFrame()
    const shape = penpot.createRectangle();

    // Just decide on the size you want for the shape.
    shape.resize(150, 150);

    // Let's add some color.
    shape.fills = [{ fillColor: '#f8f9fc' }];

    // Let's add a border radius.
    // You can set a border radius for each side using the following options: borderRadiusTopLeft, borderRadiusTopRight, borderRadiusBottomRight, or borderRadiusBottomLeft.
    shape.borderRadius = 8;

    // Let's add a border
    shape.strokes = [
      {
        strokeColor: '#d4dadc',
        strokeStyle: 'solid',
        strokeWidth: 0.5,
        strokeAlignment: 'center',
      },
    ];

    // Just position the shape right in the middle of the viewport.
    const center = penpot.viewport.center;
    shape.x = center.x;
    shape.y = center.y;
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