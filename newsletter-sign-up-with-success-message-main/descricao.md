The real challenge of this project is the screen responsiveness. When you reach the desktop 
version, in my case, I used mobile-first concept, I had to redesign the content almost entirely.

An important detail that I noticed and caught my attention was the default value
of `align-items: flex-start` of `li`.

This project, like many other projects from Frontend Mentor, uses line-height and the look and feel is great.

One tip to help you with the padding of the form content (left and right), I changed it from 40px to 
use this `padding: 0 4.546%;` for better responsiveness. Don't forget that there is another 24px padding of 
the whole content, so 24px + 40px.

Another tip is to block the sizes of the icon-list with this:

`max-width: 21px;`
`max-height: 21px;`
`min-width: 21px;`
`min-height: 21px;`

Tips for the button hover (almost perfect!):

`background: linear-gradient(90deg, #FF5492 0%, #FF7144 100%);`
`box-shadow: 0px 18px 30px 4px var(--box-shadow-color);`

One special challenge about screen responsiveness is that when I dismiss the success window, I had to
rearrange the header, so I had to use this line of code that I've learned:

`header.style.display = header.style.display === 'block' ? 'none' : ''; //responsiveness requires that`