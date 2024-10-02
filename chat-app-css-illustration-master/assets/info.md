# Chat app CSS illustration - Intermediate level

## Project Description

In this challenge, you'll be building out the entire app illustration from scratch. This will seriously test your CSS skills. So give it a go if you feel confident!

## Brief

Your challenge is to build out this feature illustration using HTML & CSS and get it looking as close to the design as possible.

The only assets we provide in this challenge are the image of the person in the app UI and the 3 images of the dog. You need to create everything else using HTML & CSS!

Your users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Bonus: See the chat interface animate on the initial load

## It's a challenging project

It's a challenging project, and over time I'll add more comments about the hurdles I've faced. If you have any questions about my layout organization, feel free to drop your comments, and we can chat about it.

## border-radius

I didn’t know you could set all four corners of **border-radius** directly in one property!

Before, I used to do it like this:

`border-top-left-radius` or `border-top-right-radius`

Now I can just use:

`border-radius: 10px 10px 4px 10px;`

## Centering the main content on the screen size of 1440x800

Aligning the main content was tricky because the design isn’t centered on the horizontal measurements.

The CSS code below using Grid seems like the easiest way to do it, as far as I understand. You’ll need to do some math and use the gap to nail the design perfectly.

```css
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center
  gap: 1.5625rem;
}
```

The trick here is to use `justify-items: center;` to center the phone card within the space occupied by **1fr**, and then use the gap at your own math or eye 🧐.

## "You need to create everything else using HTML & CSS!"

I didn't create **the send message button**, **the left arrow**, **the three dots on the right** and **the two main backgrounds**, but I’ll tackle those later and update the comments.

## What specific areas of your project would you like help with?

I need help identifying the unicode to those left and right arrows so I can make the buttons. The three dots I already know how I am going to do it.

## References

https://blocks.roadtolarissa.com/pnavarrc/775cce58f4f2e5421355
https://codepen.io/anthonydugois/pen/mewdyZ
https://getwaves.io
