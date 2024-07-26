Proud

- Better understanding different HTML elements.

- Studing the aside tag, found that it is used as a call-out box [Aside definition from web.dev](https://web.dev/learn/html/headings-and-sections?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fhtml#aside).

- Learnt this CSS property `list-style-position: inside;` to deal with inline bullet lists. Not the case in this project.

- Explored how bullet lists are rendered from ul and ol tags. See this content [Custom bullets with CSS ::marker](https://web.dev/articles/css-marker-pseudo-element).

- Learnt how to change color of the bullet markers.

- ol list uses Outfit-Bold.

- Always thought that tables were old school, but I understand now that tables are suitable for displaying tabular data in a structured and understandable manner, as it is in the Nutrition section.

- To get better responsiveness and attend to the design, the li tags must be `display: flex;` and `align-items: center`.

Things that I need to understand better

- I wouldn't add a container encapsulating header, main and footer. I don't like this, but since we have backgrounds all over the project and we have to add margins, paddings and stuff to the global layout. To solve this, I added a pseudo-element ::before to the body, so now I have two backgrounds placed correctly.

- `white-space: wrap;` to breakline the h1 heading.

- Changing the default behaviour of li from `display: list-item` to `display: flex` will cause the loss of appearance of markers. You will have to manage it manually.