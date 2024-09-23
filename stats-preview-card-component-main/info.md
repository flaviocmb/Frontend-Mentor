Just knew that in this project. It is nice to know that the `<picture>` element can have `::before` or `::after` pseudo-elements instead of trying to use them with the image tag `<img>`. This way I can make that filter violet transparent background. This is because the `<img>` is a [void element](https://developer.mozilla.org/en-US/docs/Glossary/Void_element) and it cannot have any child nodes.

I believe this also explains the need to decide if using the `<picture>` element with **sources** instead of the `<img>` element with **sizes** attribute.

## Ways to present the content on the desktop version

I found two ways to present the content above 768px screen:

- When the image scales up, the text content also scales up in size (font and space). [The hardest and the one I chose]
- The text content doesn't scale, and only the image scales.

## Being semantic

Using <ul> tag over that stats list is semantic.

## tag <em>

```html
<h1>
  Get <em class="component__title--accent">insights</em> that help your business
  grow.
</h1>
```

## The image aspect ratio for desktop version

We got to be careful when the screen scales down and the image begin to underfit its space (aspect ratio). In this case you must you will deal with **height** inside the img's box (picture). And if you do that, you should use `object-fit` together:

```css
.component__photo {
  height: 100%;
  object-fit: cover;
  object-position: center;
}
```
