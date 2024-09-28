Project description: This is a perfect challenge to test your layout skills. The card layout doesn't shift, so it's also great for those that haven't dived into responsive websites yet!

## Centering the stats

To [center](mobile%20design%20image.jpg) the stats like the design, I had to use **Grid**, setting a fixed width for each set with `grid-template-columns: repeat(auto-fit, 77px)`. If you’re going with **flexbox**, you'll need to use **flex-basis** for each element.

## The stats labels: followers, likes and photos.

I switched them from `display: inline` to `display: block`, so they break to a new line.

## Removing the height of the line

To achieve the pixel-perfect height for the card, I used a pseudo-element to remove that one-pixel height from the line separating the profile header from the stats:

```css
.ghost-line {
  position: relative;
  width: 100%;
  height: 0px;
  background-color: var(--dark-gray);
}

.ghost-line::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 1px;
  background-color: var(--dark-gray);
  opacity: 0.5;
}
```

## Wondering about the shape sizes?

I don’t have the Figma file for this project, but I think the shapes are:

- Desktop: 978px square
- Mobile: 601px square

Now you just gotta do your math to position them right like in the design! 🔎

```css

.card__stats-list li:nth(2) {
  margin-right: 48.24px;
  margin-left: 42.24px;
}
```