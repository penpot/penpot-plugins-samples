# penpot plugins samples

In this repository, you'll find a few practical examples and use cases. These examples can help you get started with your first plugin.

For each example, we used the <a target="_blank" href="https://github.com/penpot/penpot-plugin-starter-template">starter template repository</a> that you can use as a starting point.

Feel free to explore the examples, modify the code, and experiment with different approaches. We want you to understand these examples so you can apply them confidently in your own development work.

## Getting Started ##
These plugins are written in TypeScript. TypeScript is like JavaScript's supercharged sibling, helping to catch errors early and make your code cleaner and easier to work with. It's great for keeping things organized and bug-free. It allows us to use our type library, which gives the user the benefits of autocompletion and error checking. These make coding smoother, more reliable, and just a lot nicer to work with.

## How to test an example
As we said before, we used the <a target="_blank" href="https://github.com/penpot/penpot-plugin-starter-template">starter template repository</a> for each example so, if you want to test them you should follow these instructions:
- Clone the repository 
    ```
    git clone git@github.com:penpot/penpot-plugin-starter-template.git
    cd penpot-plugin-starter-template
    ```
- You've got two options here. You can either replace the files in the examples, or just copy the content into the equivalent file.
- Once you've done that, you just need to run `npm run dev` in the starter template project and install the plugin in your penpot UI using the URL that it'll appear in the terminal. It should look something like this: `http://localhost:4400/manifest.json`.

## How to contribute
Do you have any examples you'd like to share? Have you come up with a use case that you think the community would find interesting? We'd be thrilled to hear from you!

If you would like to share an example, we would appreciate it if you could make a pull request to this repository using the following structure:
```
▾ sample-name/
  ▸ src/
    main.ts
    plugin.ts
  index.html
  manifest.json
```

If you have suggestions for examples or use cases that you would like us to include in the repository, you can write to us at <a href="mailto:info@penpot.app">info@penpot.app</a> or open an issue in <a href="https://github.com/penpot/penpot-plugins-samples/issues">this repository</a> with the tag `enhancement` describing your needs and if it's possible, including an example.

If you spot a problem with an example and it's not working right, you can open an issue with the tag `bug`.

## Useful links ##
* <a target="_blank" href="https://github.com/penpot/penpot-plugin-starter-template">Plugin Starter Template with plain Typescript</a><br>
* <a target="_blank" href="https://github.com/penpot/plugin-examples">Plugin Starter Template using a framework</a><br>
* <a target="_blank" href="https://penpot-plugins-styles.pages.dev/">Plugin styles</a><br>
* <a target="_blank" href="https://penpot-plugins-api-doc.pages.dev/">API Documentation</a>