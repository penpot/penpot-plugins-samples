penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "group") {
    // First get the current selection, it should be a selection of shapes 
    const selected = penpot.selection;

    // Check if there is a selection and also if it isn't a group
    if (selected.length && !penpot.utils.types.isGroup(selected[0])) {
      penpot.group(selected);

      // output
      // {
      //   "id": "788a12ca-0d8f-808a-8004-c4ec9a6f5afa",
      //   "type": "group",
      //   "name": "Group",
      //   "blocked": false,
      //   "hidden": false,
      //   "proportionLock": false,
      //   "constraintsHorizontal": null,
      //   "constraintsVertical": null,
      //   "borderRadius": null,
      //   "borderRadiusTopLeft": null,
      //   "borderRadiusTopRight": null,
      //   "borderRadiusBottomRight": null,
      //   "borderRadiusBottomLeft": null,
      //   "opacity": null,
      //   "blendMode": "normal",
      //   "shadows": null,
      //   "blur": null,
      //   "exports": null,
      //   "x": 507,
      //   "y": -209,
      //   "parentX": 507,
      //   "parentY": -209,
      //   "frameX": 507,
      //   "frameY": -209,
      //   "width": 210.5,
      //   "height": 308.5,
      //   "bounds": {
      //       "x": 507,
      //       "y": -209,
      //       "width": 210.5,
      //       "height": 308.5
      //   },
      //   "center": {
      //       "x": 612.25,
      //       "y": -54.75
      //   },
      //   "rotation": 0,
      //   "flipX": false,
      //   "flipY": false,
      //   "fills": [],
      //   "strokes": [],
      //   "layoutChild": null,
      //   "layoutCell": null,
      //   "interactions": []
      // }
    }
    
  } else if (message === "ungroup") {
    // First get the current selection, it won't work with a selection of shapes
    const selected = penpot.selection;

    // Check if there is a selection and also if it is a group
    if (selected.length && penpot.utils.types.isGroup(selected[0])) {
      penpot.ungroup(selected[0]);

      // output undefined
    }
  }
});
