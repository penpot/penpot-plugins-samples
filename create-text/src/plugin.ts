penpot.ui.open("Penpot plugin starter template", '');

penpot.ui.onMessage<string>((message) => {
  if (message === "create-text") {
    let text = penpot.createText('Hello World!');
        // output
    //   {
    //     "id": "b6ea2aac-1eb3-801a-8004-c3d118e2dcca",
    //     "type": "text",
    //     "name": "Text",
    //     "blocked": false,
    //     "hidden": false,
    //     "proportionLock": false,
    //     "constraintsHorizontal": null,
    //     "constraintsVertical": null,
    //     "borderRadius": null,
    //     "borderRadiusTopLeft": null,
    //     "borderRadiusTopRight": null,
    //     "borderRadiusBottomRight": null,
    //     "borderRadiusBottomLeft": null,
    //     "opacity": null,
    //     "blendMode": "normal",
    //     "shadows": null,
    //     "blur": null,
    //     "exports": null,
    //     "x": 586,
    //     "y": 200,
    //     "parentX": 586,
    //     "parentY": 200,
    //     "frameX": 586,
    //     "frameY": 200,
    //     "width": 152,
    //     "height": 24,
    //     "bounds": {
    //         "x": 586,
    //         "y": 200,
    //         "width": 152,
    //         "height": 24
    //     },
    //     "center": {
    //         "x": 662,
    //         "y": 212
    //     },
    //     "rotation": 0,
    //     "flipX": false,
    //     "flipY": false,
    //     "fills": [
    //         {
    //             "fillColor": "#000000",
    //             "fillOpacity": 1
    //         }
    //     ],
    //     "strokes": null,
    //     "layoutChild": null,
    //     "layoutCell": null,
    //     "interactions": [],
    //     "characters": "Hello world!",
    //     "growType": "auto-width",
    //     "fontId": "gfont-work-sans",
    //     "fontFamily": "Work Sans",
    //     "fontVariantId": "500",
    //     "fontSize": "20",
    //     "fontWeight": "500",
    //     "fontStyle": "normal",
    //     "lineHeight": "1.2",
    //     "letterSpacing": "0",
    //     "textTransform": "uppercase",
    //     "textDecoration": "underline",
    //     "direction": null,
    //     "align": "left",
    //     "verticalAlign": null
    // }

    if (text) {
      text.growType = 'auto-width';
      text.fontStyle = 'italic';
      text.textTransform = 'uppercase';
      text.textDecoration = 'underline';
      // the following properties can be set up with 'mixed' if multiple fonts are used
      text.fontFamily = 'Work Sans';
      text.fontId = 'gfont-work-sans';
      text.fontSize = '20';
      text.fontWeight = '500';

      text.x = penpot.viewport.center.x;
      text.y = penpot.viewport.center.y;

      // set the selection to our just created text 
      penpot.selection = [text];
    }
  }
});
