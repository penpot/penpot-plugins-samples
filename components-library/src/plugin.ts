penpot.ui.open("Penpot components library", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "create-component") {
    const rectangle = penpot.createRectangle();
    const shape = penpot.currentPage?.getShapeById(rectangle.id);
    // You'll need to send a shape as a parameter. It can be a new one or an existing one.
    if (shape) {
      // let's create a component
      penpot.library.local.createComponent(shape);
      // output
      // {
      //   "id": "68ec0227-4d3e-80db-8004-c66782db65b2",
      //   "name": "Rectangle",
      //   "path": ""
      // }
    }
  } else if (message === "read-components") {
    // If you want to check what components are available, just head to the local library.
    console.log(penpot.library.local.components);
    // output
    // [{
    //   "id": "68ec0227-4d3e-80db-8004-c66782db65b2",
    //   "name": "Rectangle",
    //   "path": ""
    // }]
  }
});
