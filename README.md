# How to use new Dialog HTML element with React

Creating a perfect modal or a dialog has been bothering web developers for a long time. Native alert() and confirm() methods are not really suitable due their lack of options and styling. In this article I will try to use the new `<dialog>` element HTML provides, but which is not widely supported yet.

Technologies used:

- React with TypeScript
- Plain CSS files imported to React
- dialog HTML element

## Initial setup and configuration

1. Create a new React app with `npx create-react-app . --template typescript`
2. Start dev server using `npm start`

## Using the new element

The new `<dialog>` element is not yet widely supported, but all the major browsers should support it in their latest versions.

Adding the dialog element to React component is rather easy, just:

```tsx
// a handle to our <dialog> element
const dialogRef = useRef<HTMLDialogElement>(null);

return (
  <dialog ref={dialogRef}>
    {/* add your dialog contents here */}
  </dialog>
);
```

With that, the dialog element exists in the DOM but is not visible by default. You could add open attribute, like this:

```tsx
<dialog ref={dialogRef} open>
```

but that would make the dialog visible right from the beginning. If we use `dialogRef` we can control the appearance of the dialog better. The dialog element has several methods we can use to control visibility:

```tsx
// to show the dialog
dialogRef.current.showModal();

// to close the dialog
dialogRef.current.close();
```

opening the dialog using `showModal()` will change the dialogs `display` CSS value and make it visible. This also gives us possibility to style its appearance using `dialog[open] { ... }` css selector.

Regarding styling, the new `dialog` element will automatically create a backdrop layer to prevent interaction with the rest of the page while the dialog is open. Again, styling it with CSS is rather easy:
```css
dialog::backdrop {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(2px);
}
```

## Summary

In the end the new dialog element is very nice way to add a modern dialogs to your app. No need for third party libraries or self-made backdrops etc. This won't replace as it is the native popups like `alert` and `confirm`, but I will demonstrate a solution for that later.

Also, as it is pretty simple from markup point of view, styling the dialog is very simple and could be even animated using `transition-group` of React.

More info from [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog).

**Feel free to browse the code, if you have any questions or improvement ideas let me know!**

## Author

Timo Kallela, for more information please visit my [GitHub profile](https://github.com/kallelat)

You can also contact me by [email](mailto:timo.kallela@gmail.com) or via [LinkedIn](https://www.linkedin.com/in/kallelat/)!

## License

Contents of this repository is licensed under [MIT](LICENSE) license.
