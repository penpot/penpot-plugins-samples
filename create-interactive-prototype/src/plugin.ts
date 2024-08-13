import { PenpotFrame } from "@penpot/plugin-types";

penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  // * We refer to "frame" which stands for "board" in penpot UI. You can find in the root of this example of how 
  // If you want to give this example a try, it's best to assume it'll work well with the Penpot interface you've already set up like this:
  // We've got three frames:: "Home", "Items list" and "Item detail".
  // In the "Home" frame, we need another frame nested in there called "Home button to list"
  // In the "Items list", you'll see one or more rectangles called Item.
  // In the "Item detail" we need to add another frame with a nested callout titled "Detail button to list."
  // Just a heads-up: At the root of this example, you'll find a screenshot of how the structure of elements in Penpot would look like for this example to work correctly (example-tree-elements.png).
  if (message === "create-flow") {
    const page = penpot.getPage();

    // You'll need to get the frames so you can specify where you want to navigate to.
    const home = page?.findShapes({name: "Home", type: "frame"})[0];
    const itemsList = page?.findShapes({name: "Items list", type: "frame"})[0];
    const itemDetail = page?.findShapes({name: "Item detail", type: "frame"})[0];

    // First things first, we need to set up a flow and choose a starting frame. This will be our Home frame.
    home && penpot.getPage()?.createFlow("My first flow", home as PenpotFrame);

    // Element that triggers the navigation
    const buttonHome = penpot.getPage()?.findShapes({name: "Home button to list"})[0];
    buttonHome?.addInteraction("click", {type: "navigate-to", destination: itemsList as PenpotFrame, animation: {type: "slide", way: "in", direction: "left", duration: 200}});

    // Get all Items(rectangles) from Items list frame and add an interaction to each one to navigate to the Item Detail frame
    const items = page?.findShapes({name: "Item", type: "rect"});
    items?.forEach(item => {
      item?.addInteraction("click", {type: "navigate-to", destination: itemDetail as PenpotFrame, animation: {type: "slide", way: "in", direction: "left", duration: 200}});
    });

    // When we are in the item detail, let's set an interaction to navigate back to the previous frame
    const buttonBack = penpot.getPage()?.findShapes({name: "Detail button to list"})[0];
    buttonBack?.addInteraction("click", {type: "previous-screen"});

  }
});
