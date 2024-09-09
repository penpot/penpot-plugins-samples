penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "create-rectangle") {
    // You can also use createEllipse(), createPath() or createBoard()
    const shape = penpot.createRectangle();
    // output
    // {
    //   "id": "788a12ca-0d8f-808a-8004-c3d7a79308b6",
    //   "type": "rect",
    //   "name": "Rectangle",
    //   "blocked": false,
    //   "hidden": false,
    //   "proportionLock": false,
    //   "constraintsHorizontal": null,
    //   "constraintsVertical": null,
    //   "borderRadius": 8,
    //   "borderRadiusTopLeft": null,
    //   "borderRadiusTopRight": null,
    //   "borderRadiusBottomRight": null,
    //   "borderRadiusBottomLeft": null,
    //   "opacity": null,
    //   "blendMode": "normal",
    //   "shadows": null,
    //   "blur": null,
    //   "exports": null,
    //   "x": 607.5,
    //   "y": 65.5,
    //   "parentX": 607.5,
    //   "parentY": 65.5,
    //   "frameX": 607.5,
    //   "frameY": 65.5,
    //   "width": 150,
    //   "height": 150,
    //   "bounds": {
    //       "x": 607.5,
    //       "y": 65.5,
    //       "width": 150,
    //       "height": 150
    //   },
    //   "center": {
    //       "x": 682.5,
    //       "y": 140.5
    //   },
    //   "rotation": 0,
    //   "flipX": false,
    //   "flipY": false,
    //   "fills": [
    //       {
    //           "fillColor": "#7efff5"
    //       }
    //   ],
    //   "strokes": [
    //       {
    //           "strokeStyle": "solid",
    //           "strokeWidth": 2,
    //           "strokeColor": "#2e3434",
    //           "strokeAlignment": "center"
    //       }
    //   ],
    //   "layoutChild": null,
    //   "layoutCell": null,
    //   "interactions": []
    // }

    // Just decide on the size you want for the shape.
    shape.resize(150, 150);

    // Update shape name, by default it'll be "Rectangle"
    shape.name = "My example shape";

    // Let's add some color.
    shape.fills = [{ fillColor: "#7EFFF5" }];

    // Let's add a border radius.
    // You can set a border radius for each side using the following options: borderRadiusTopLeft, borderRadiusTopRight, borderRadiusBottomRight, or borderRadiusBottomLeft.
    shape.borderRadius = 8;

    // Let's add a border
    shape.strokes = [
      {
        strokeColor: "#2e3434",
        strokeStyle: "solid",
        strokeWidth: 2,
        strokeAlignment: "center",
      },
    ];

    // Just position the shape right in the middle of the viewport.
    const center = penpot.viewport.center;
    shape.x = center.x;
    shape.y = center.y;
  }
});
