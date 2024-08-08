penpot.ui.open("Penpot plugin starter template", '');

penpot.ui.onMessage<string>((message) => {
  if (message === "create-grid") {
    // First of all you need to create a frame (Board in penpot UI)
    const frame = penpot.createFrame();

    // Then you can add the gridLayout to it
    const grid = frame.addGridLayout();
    // output
    // {    
    //  "id": "abc556f2-8e68-80f9-8004-c7803cb57625",
    //  "type": "frame",
    //  "name": "Board",
    //  "blocked": false,
    //  "hidden": false,
    //  "proportionLock": false,
    //  "constraintsHorizontal": null,
    //  "constraintsVertical": null,
    //  "borderRadius": null,
    //  "borderRadiusTopLeft": null,
    //  "borderRadiusTopRight": null,
    //  "borderRadiusBottomRight": null,
    //  "borderRadiusBottomLeft": null,
    //  "opacity": null,
    //  "blendMode": "normal",
    //  "shadows": null,
    //  "blur": null,
    //  "exports": null,
    //  "x": -1,
    //  "y": -272,
    //  "parentX": -1,
    //  "parentY": -272,
    //  "frameX": -1,
    //  "frameY": -272,
    //  "width": 100,
    //  "height": 100,
    //  "bounds": {
    //      "x": -1,
    //      "y": -272,
    //      "width": 100,
    //      "height": 100
    //  },
    //  "center": {
    //      "x": 49,
    //      "y": -222
    //  },
    //  "rotation": 0,
    //  "flipX": false,
    //  "flipY": false,
    //  "fills": [
    //      {
    //          "fillColor": "#FFFFFF",
    //          "fillOpacity": 1
    //      }
    //  ],
    //  "strokes": [],
    //  "layoutChild": null,
    //  "layoutCell": null,
    //  "interactions": [],
    //  "grid": {
    //      "dir": "row",
    //      "rows": [],
    //      "columns": [],
    //      "alignItems": "start",
    //      "alignContent": "stretch",
    //      "justifyItems": "start",
    //      "justifyContent": "stretch",
    //      "rowGap": 0,
    //      "columnGap": 0,
    //      "verticalPadding": 0,
    //      "horizontalPadding": 0,
    //      "topPadding": 0,
    //      "rightPadding": 0,
    //      "bottomPadding": 0,
    //      "leftPadding": 0
    //  },
    //  "flex": null,
    //  "guides": null,
    //  "horizontalSizing": "fix",
    //  "verticalSizing": "fix"
    // }

    // Next, we can add some rows and columns to it. Just pass a parameter indicating the type of track do you want; 'flex' | 'fixed' | 'percent' | 'auto';
    grid.addRow('flex', 1);
    grid.addRow('flex', 1);
    grid.addColumn('flex', 1);
    grid.addColumn('flex', 1);

    // Let's align the items. These are the options: 'start' | 'end' | 'center' | 'stretch';
    grid.alignItems = 'center';
    grid.justifyItems = 'start';
    // and also we can align the content. These are the options 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    grid.justifyContent = 'space-between';
    grid.alignContent = 'stretch';

    // Just like in CSS, we can set the row and column gap.
    grid.rowGap = 10;
    grid.columnGap = 10;

    // We can set up a padding
    grid.verticalPadding = 5;
    grid.horizontalPadding = 5;

    // We can choose how big the container is going to be, both horizontally and vertically. These are the options: 'fit-content' | 'fill' | 'auto';
    grid.horizontalSizing = 'auto';
    grid.verticalSizing = 'auto';

    // *Just a heads-up: if you want to add a border to each cell, you'll need to create a rectangle or frame for that. The border will be applied to the whole table, not just each cell.
    // The same goes for color. It'll be applied to the whole table if you want to specify colors for each cell. In that case, you'll need to do the same as for borders.
  }
});
