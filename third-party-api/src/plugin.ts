penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "create-images-board") {
    // First of all, let's get the images from picsum photos.
    fetch("https://picsum.photos/v2/list?limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error getting data");
        }
        return response.json();
      })
      .then((images) => {
        // Next, you'll want to create a board.
        const board = penpot.createBoard();
        // Then you can add the FlexLayout to the board.
        const flex = board.addFlexLayout();

        // Let's add some styles.
        board.horizontalSizing = "auto";
        board.verticalSizing = "auto";
        flex.horizontalSizing = "fill";
        flex.verticalSizing = "fill";

        // You're getting five images from picsum photos, so we need to loop through the array to load each one.
        images.forEach((image: any) => {
          // Create a shape to fill with the image.
          const shape = penpot.createRectangle();
          // After creating the shape, add it to our board.
          board.appendChild(shape);
          // Change the size of your shape to 200x200.
          shape.resize(200, 200);
          // Finally, upload your image and fill the shape with it.
          penpot
            .uploadMediaUrl(image.author, image.download_url)
            .then((data) => {
              shape.fills = [{ fillOpacity: 1, fillImage: data }];
            })
            .catch((err) => console.error(err));
        });
      })
      .catch((error) => {
        console.error("There was a problem:", error);
      });
  }
});
