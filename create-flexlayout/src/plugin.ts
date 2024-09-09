penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "create-flex") {
    // First of all you need to create a board
    const board = penpot.createBoard();

    // You'll need to set the board to auto so it fits its content.
    board.horizontalSizing = "auto";
    board.verticalSizing = "auto";

    // Then you can add the flexLayout to it
    const flex = board.addFlexLayout();
    // output
    //{
    //  "dir": null,
    //  "rows": null,
    //  "columns": null,
    //  "alignItems": "start",
    //  "alignContent": "stretch",
    //  "justifyItems": null,
    //  "justifyContent": "start",
    //  "rowGap": 0,
    //  "columnGap": 0,
    //  "verticalPadding": 0,
    //  "horizontalPadding": 0,
    //  "topPadding": 0,
    //  "rightPadding": 0,
    //  "bottomPadding": 0,
    //  "leftPadding": 0
    // }

    // We can choose whether to go right or left with "row" or "row-reverse", or up or down with "column" or "column-reverse". The default is null.
    flex.dir = "column";

    // Next, we can decide the wrapping behaviour ("wrap" | "nowrap"). The default setting for this property is "undefined".
    flex.wrap = "wrap";

    // Let's align the items. These are the options: "start" | "end" | "center" | "stretch";
    flex.alignItems = "center";
    // and also we can align the content. These are the options "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch";
    flex.justifyContent = "center";

    // We can set up a padding
    flex.verticalPadding = 5;
    flex.horizontalPadding = 5;

    // We can choose how big the container is going to be, both horizontally and vertically. These are the options: "auto" | "fill" | "fix";
    flex.horizontalSizing = "fill";
    flex.verticalSizing = "fill";

    // You can also add some shapes inside to get a better idea of what the results will be.
    board.appendChild(penpot.createRectangle());
    board.appendChild(penpot.createEllipse());
  }
});
