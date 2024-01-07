The svg stroke-width will change for mobile. To correct this, use

`stroke-width="3"`

And the svg for desktop uses a stroke of 2 (normal as it is). So you'll have to use work with two svgs

`<picture>
    <source media="(min-width: 768px)" srcset="./assets/images/icon-arrow-stroke-width2.svg" type="image/svg+xml"/>
    <img src="./assets/images/icon-arrow-stroke-width3.svg" alt="downward arrow icon drawn in svg">
</picture>`

Do you see a space after the number 24? That's an input type text. However I think that came from the design and there's not purpose to have input type text (besides the month input), so I coded all three as input type number.

The error-invalid design must be developed using any event listener type like input.

This is fun, you'll have to put a space between the hyphens. Or you'll be a magician with letter-spacing from JS.
`<span>- -</span>`