penpot.ui.open("Penpot plugin starter template", "");

penpot.ui.onMessage<string>((message) => {
  if (message === "create-images-board") {
    // First of all, let's get the images from picsum photos.
    fetch("https://picsum.photos/v2/list?limit=5")
      .then(response => {
          if (!response.ok) {
              throw new Error("Error getting data");
          }
          return response.json();
      })
      .then(images => {
        // Next, you'll want to create a frame (Board in penpot UI).
        const frame = penpot.createFrame();
        // Then you can add the FlexLayout to the frame.
        const flex = frame.addFlexLayout();

        // Let's add some styles.
        frame.horizontalSizing = "auto";
        frame.verticalSizing = "auto";
        flex.horizontalSizing = "fill";
        flex.verticalSizing = "fill";

        // You're getting five images from picsum photos, so we need to loop through the array to load each one. 
        images.forEach((image: any) => {
          // Create a shape to fill with the image.
          const shape = penpot.createRectangle();
          // After creating the shape, add it to our frame. 
          frame.appendChild(shape);
          // Change the size of your shape to 200x200.
          shape.resize(200, 200);
          // Finally, upload your image and fill the shape with it.
          penpot
          .uploadMediaUrl(
            image.author,
            image.download_url
          ).then((data) => {
            shape.fills = [{ fillOpacity: 1, fillImage: data }];
          })
          .catch((err) => console.error(err));;
        });
      })
      .catch(error => {
          console.error("There was a problem:", error);
      });
  }
});
