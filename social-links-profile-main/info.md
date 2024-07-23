## Points of Attention:

- The card has different paddings when it is displayed on different screen sizes. This requires the use of media queries.
- I chose to use the <section> tag to encapsulate the card.
- I chose to use the <header> tag for the name, location, and personal phrase information.
- I chose to use the <nav> tag to encapsulate the social media links.
- The avatar isn't the `<img>` tag. I chose to use a complete solution with `<figure>` tag.
- `<img>` tag receives the avatar CSS class because it will render any other image source.
- Specifying dimensions in HTML ensures that the browser reserves the appropriate space for the image before it loads, which can help prevent layout shifts and improve the perceived performance of your page. Using CSS to set image dimensions provides more flexibility and allows you to apply responsive styles and media queries. Combining both can be advantageous for both layout stability and responsive design.

## Question for the community

Is there a pro membership would confirm the avatar dimensions? The screen size 375px, the height and width is respectively 89x89 and the 1440px is 88x88?
