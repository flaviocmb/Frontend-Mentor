** apagar quando publicar **

I think the first real challenge is responsiveness with two types of background (both delivered in the assets).

The title questions are buttons. That was one way that I imagine to solve the click expansion (accordion). Also had to learn about pseudo-elements like ::after to set the plus sign icon.

One big problem I found was when the accordion expands in a window with position absolute. How should I deal with scrollbars, whitespace margin and the content below the FAQs window for better UX design? My way to solve was to use "overflow-y: auto" inside the FAQs window at a max-height of 560px (above that, we should see a scrollbar).

Something that felt so good to code was the little animation on

transition: .25s;
transform: rotate(180deg);

That is all magic to me! :)