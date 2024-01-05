First thing noticed was the svg stroke-width wrong for mobile. To correct this, use

`stroke-width="3"`

And the svg for desktop uses a stroke of 2 (normal as it is). So you'll have to use this

`<picture>
    <source media="(min-width: 768px)" srcset="./assets/images/icon-arrow-stroke-width2.svg" type="image/svg+xml"/>
    <img src="./assets/images/icon-arrow-stroke-width3.svg" alt="downward arrow icon drawn in svg">
</picture>`