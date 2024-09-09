# Precise dimensions

Eu tive dificuldades em encontrar o tamanho correto da fonte. A fonte do design é diferente da fonte do Google Fonts.

As medidas de altura de linha, espaço entre as letras e margem de blocos são um verdadeiro desafio.

Eu utilizei grid em vários locais e gostei do resultado.

A função clamp() mostra um grande poder dentro da responsividade, mas eu cai na armadilha de colocar clamp em muitas propriedades quando eu poderia simplesmente usar media query.

## Breaking down the feedback

Thank you so much for your time and effort in evaluating this.

Let's break down the feedback:

1. The header tag was removed and I also changed the words "Powered by Technology" from a paragraph to a <h1> tag. ✅
2. Aria-labels removed from the <a> tags in the footer. ✅
3. The alt attributes is now empty. ✅
4. Font links are placed in the html. ✅
5. There's now only one media query. ✅
6. The project is even more responsive at low resolution screens with margins on the edges. ✅

The font-size using clamps and viewport width are responsive design by following this guy [Andy Bell](https://youtu.be/5uhIiI9Ld5M?si=zrUEcdqfLa0GlX-D&t=760). **I recommend you to watch it**. I updated the code for a middle ground here and now it looks a bit more fine and responsive in any number of font sizes of the browser: font-size: clamp(1.5rem, 0.5rem + 5vw, 2.3125rem);