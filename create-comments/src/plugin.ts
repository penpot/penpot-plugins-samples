penpot.ui.open("Penpot comments", "");

penpot.ui.onMessage<string>(async (message) => {
  if (message === "create-comment") {
    const page = penpot.currentPage;

    if (page) {
      // You can add a new comment thread anywhere on a page.
      await page.addCommentThread("Hello world!", { x: 10, y: 10 });
    }
  } else if (message === "reply-comment") {
    // If you'd like to reply to an existing thread, just use the "reply" method in the comment thread.
    const page = penpot.currentPage;

    if (page) {
      const comments = await page.findCommentThreads({
        onlyYours: true,
        showResolved: false,
      });
      await comments[0].reply("This is a reply.");
      // If you want to delete a reply, just use the "remove" method.
      // await commments[0].remove();
    }
  } else if (message === "delete-comment") {
    // If you'd like to delete the whole thread, the first thing you need to do is find the comment thread you've chosen to remove.
    const page = penpot.currentPage;

    if (page) {
      const commentThreads = await page.findCommentThreads({
        onlyYours: true,
        showResolved: false,
      });
      await page.removeCommentThread(commentThreads[0]);
    }
  }
});
