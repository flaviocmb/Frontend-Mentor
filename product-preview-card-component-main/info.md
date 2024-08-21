## First considerations

Great project. You learn a lot about flexbox. You learn how to handle the images.

## The image and the content will fight for the space

- I've noticed the fact that we must set width to both the image and the content on the desktop version. That's because of flexbox.

## Surviving the project

You won't get things done without understand these:

```css
img, picture {
    max-inline-size: 100%; /* max-width: 100%; */
    block-size: auto;
    display: block;
}
```

I recommend this read [Responsive Images](https://web.dev/learn/design/responsive-images).