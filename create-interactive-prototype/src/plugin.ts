import { Board } from "@penpot/plugin-types";

penpot.ui.open("Penpot interactive prototype", "");

penpot.ui.onMessage<string>((message) => {
  // If you want to give this example a try, it's best to assume it'll work well with the Penpot interface you've already set up like this:
  // We've got three boards:: "Home", "Items list" and "Item detail".
  // In the "Home" board, we need another board nested in there called "Home button to list"
  // In the "Items list", you'll see one or more rectangles called Item.
  // In the "Item detail" we need to add another board with a nested callout titled "Detail button to list."
  // Just a heads-up: At the root of this example, you'll find a screenshot of how the structure of elements in Penpot would look like for this example to work correctly (example-tree-elements.png).
  if (message === "create-flow") {
    const page = penpot.getPage();

    // You'll need to get the boards so you can specify where you want to navigate to.
    const home = page?.findShapes({ name: "Home", type: "board" })[0];
    const itemsList = page?.findShapes({
      name: "Items list",
      type: "board",
    })[0];
    const itemDetail = page?.findShapes({
      name: "Item detail",
      type: "board",
    })[0];

    // First things first, we need to set up a flow and choose a starting board. This will be our Home board.
    home && penpot.getPage()?.createFlow("My first flow", home as Board);

    // Element that triggers the navigation
    const buttonHome = penpot
      .getPage()
      ?.findShapes({ name: "Home button to list" })[0];
    buttonHome?.addInteraction("click", {
      type: "navigate-to",
      destination: itemsList as Board,
      animation: {
        type: "slide",
        way: "in",
        direction: "left",
        duration: 200,
        easing: "linear",
      },
    });

    // Get all Items(rectangles) from Items list boards and add an interaction to each one to navigate to the Item Detail board
    const items = page?.findShapes({ name: "Item", type: "rect" });
    items?.forEach((item) => {
      item?.addInteraction("click", {
        type: "navigate-to",
        destination: itemDetail as Board,
        animation: {
          type: "slide",
          way: "in",
          direction: "left",
          duration: 200,
          easing: "linear",
        },
      });
    });

    // When we are in the item detail, let's set an interaction to navigate back to the previous board
    const buttonBack = penpot
      .getPage()
      ?.findShapes({ name: "Detail button to list" })[0];
    buttonBack?.addInteraction("click", { type: "previous-screen" });
  }
});
