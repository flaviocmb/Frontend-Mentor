## Justify-self

I got help from justify-self to push down the buttons when the screen size causes the cards to [stretch](./buttons%20floating.png) (between the resolutions of 768px and 900px). Therefore, you need to use `display: grid;` and `justify-self` together. **You don't need to set up columns or rows for this to works**.

## Property flex

`flex: 1;` behaves like **1fr**. I used it to ensure that the dimensions of the three cards are adjusted, making them [equally](./equaly.png) sized.

```css
.cards {
    display: flex;
}

.card {
    flex: 1; /* or width: 100%; */
}
```