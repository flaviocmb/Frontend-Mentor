## the paragraph tag and his display block

If you want the element to not ocupy the whole line, give it a `display: inline-block;`. Now it will ocupy its word space.

## the image will get a height

The card image in this case will be set with height value, or you won't get the same design results.

```css
.header-as-non-landmark img {
  width: 336px;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
}
```

`object-fit` will scale the image as the mobile version is. `object-position` will help with the screen shrinks, the image must be centered.

`width` and `height` values are desktop values. This is also another reason to use `object-fit`. 

> Notice that went you use a desktop size, the card get wider and the image as well. The design is fine here.

## A bit of taste of clamp

It goes wider at the resolution from 468px to 768px.

### Card

`max-width: clamp(20.4375rem, 14.88rem + 19vw, 24rem);`

### Title

`font-size: clamp(1.25rem, 0.86rem + 1.3333vw, 1.5rem);`

### Status and Date

`font-size: clamp(0.75rem, 0.555rem + 0.6667vw, 0.875rem);`

### Card text

`font-size: clamp(0.875rem, 0.68rem + 0.6667vw, 1rem);`