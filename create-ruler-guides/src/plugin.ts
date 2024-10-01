penpot.ui.open("Penpot ruler guides", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "add-ruler-guide") {
    // You can add ruler guides to a page or a board.
    const page = penpot.currentPage;

    if (page) {
      // We'll add the ruler guide to the page. You can set the orientation (horizontal or vertical) and the value of the position.
      page.addRulerGuide("horizontal", 200);
      // rulerGuide output
      // {
      //   "orientation": "horizontal",
      //   "position": 200
      // }
      page.addRulerGuide("vertical", 200);
    }

    // Here's an example of how to add a ruler guide to a board.
    // const board = penpot.createBoard();
    // board.resize(200, 200);
    // board.addRulerGuide("horizontal", 10);
    // board.addRulerGuide("vertical", 10);
  } else if (message === "remove-ruler-guide") {
    // To remove a ruler guide, just specify which one you want to delete.
    const page = penpot.currentPage;

    if (page) {
      page.removeRulerGuide(page.rulerGuides[0]);
    }
  }
});
