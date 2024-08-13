penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "create-color") {
    // TODO modify when it's possible to create a specific color https://tree.taiga.io/project/penpot/issue/8479
    // You can easily add a new color to your color library using this process.
    penpot.library.local.createColor();
    // output
    // {
    //   "id": "f54fff93-7abe-80f4-8004-c64eba9e16c4",
    //   "name": "#000000",
    //   "path": null,
    //   "color": "#000000",
    //   "opacity": 1,
    //   "gradient": null,
    //   "image": null
    // }
  } else if (message === "read-colors") {
    // Take a look at the colors you have available in your library
    console.log(penpot.library.local.colors);
    // output
    // [{
    //   "id": "f54fff93-7abe-80f4-8004-c64eba9e16c4",
    //   "name": "#000000",
    //   "path": null,
    //   "color": "#000000",
    //   "opacity": 1,
    //   "gradient": null,
    //   "image": null
    // }]
  }
});
