# Clipboard landing page

## Project description

Put your layout skills to the test with this HTML & CSS landing page challenge. This challenge includes a design for hover states.

## Dica legal que aprendi para construir landing pages muito altas

Quando eu atualizo a página do navegador, constantemente sou alçado para o topo da página e toda vez precisava rolar novamente para baixo. Adicione o código javascript ao final do body.

```javascript
<script>
window.onload = function() {
    const scrollPosition = localStorage.getItem('scrollPosition');
    if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
    }
};

window.onscroll = function() {
    localStorage.setItem('scrollPosition', window.scrollY);
};
</script>
```

## HTML landmarks

- header
- main
- footer

## DRY CSS code

Tentei aplicar ao máximo as ideias do DRY - Don't Repeat Yourself. Acredito que com o tempo e experiência aprenderei mais sobre a melhor abordagem de organização (e isso inclui DRY) apenas olhando o layout da página e/ou acessando um design file se existir.

## First time using a pseudo-class (descontinuado)

That's my first time using a little more complex and advanced CSS pseudo-class `.features__text:not(:last-child)`. Eu acredito que eu sempre utilizarei essa abordagem nos meus códigos futuros pela utilidade e significado.

```css
.features div:not(:last-child) {
  margin-bottom: 3rem;
}
```

Eu precisava [adicionar margem](./pseudo-class.png) apenas no primeiro e segundo parágrafos.

## Mantendo o aspect ratio de imagens

Because I explicitly (coz of design file) set width and height, `object-fit: contain;` keeps aspect ratio on small screen sizes.

```css
.features img {
  width: 19.5rem; /* 312px */
  height: 14.875rem; /* 238px */
  object-fit: contain;
  margin-block-end: 3.5rem;
}
```

## box-shadow and screen shrink

When the screen shrinks you might find [this problem](./box-shadow-problem.png): A imagem encolhe (coz of responsiveness) e se desloca do próprio eixo e então fica uma borda sombreada.

Isso está ocorrendo porque eu adicionei dimensões explícitas à imagem (para atender ao design).

Para resolver, eu tive que envolver a imagem em uma caixa (div) e adicionar o box-shadow nesta caixa, dessa maneira o box-shadow "segue" o encolhimento da imagem. Veja:

```css
.access .box-shadow {
  max-width: 19.4375rem; /* 311px */
  max-height: 11.375rem; /* 182px */
  position: relative;
  overflow: hidden;
  box-shadow: 0px 40px 50px 0px rgba(0, 0, 0, 0.07);
}

.access img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
```

Observe com atenção que é fundamental adicionar max-width e max-height para manter a responsividade. [Agora parece bom](./box-shadow-solved.png).

Is there another clever way to solver this? leave a comment please.

## This is not a simple hover

Acredito que esse seja um dos grandes desafios desse projecto (incluído na descrição do projeto). If you wander how to do that hover on the buttons, the **[NTF Preview Card Component](https://www.frontendmentor.io/solutions/nft-preview-card-component-hhBAmiQbU8)** has this same way to hover something. In this project you will have to work with pseudo-element and build a new color na frente da cor do cyan.

```css
.btn-green {
  position: relative;
}

.btn-green:hover::after,
.btn-green:focus::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  background-color: hsla(0, 0%, 100%, 0.25);
  z-index: 1;
}
```

E se você quiser adicionar transition, isso é um pouco complicado porque você configurou opacidade na cor do background, assim você não pode usar a propriedade `opacity: 1;` diretamente no pseudo-elemento. Veja como deve fica:

```css
.btn-green::after {
  content: "";
  position: absolute;
  background-color: hsla(0, 0%, 100%, 0.25);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 100px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.btn-green:hover::after,
.btn-green:focus::after {
  opacity: 1;
}
```

## Minha decisão sobre responsividade da imagem do computador

Sobre a sessão da imagem do computador de um lado e os textos do outro, eu decidi manter o computador colado na borda esquerda da tela em todos os tamanhos de tela a partir de 768px. A imagem do computador mantem o **aspect-ratio** e alcança metade da tela pois eu defini isso no grid.

```css
.features__image-and-features {
  display: grid;
  grid-template-columns: 50% 1fr;
  grid-template-rows: auto;
}
```

Uma outra escolha poderia ser manter a imagem no tamanho original em todas as telas a partir de 768px, [mas o conteúdo da imagem ficaria mais da metade para fora da tela](./another-choice.png).

## The workflow list

Observe a [imagem do projeto](./the-workflow-list.png) e você entenderá que é necessário definir espaço entre cada item de lista, centralizá-los e quando a tela for pequena, vai precisar diminuir o tamanho de cada item de lista.

Eu utilizei `flex: 1;` para organizar o espaço democrático de cada item. Você aprenderá mais sobre isso no projeto [3 column preview card component](https://www.frontendmentor.io/solutions/3-column-preview-card-component-flexgrid-Y_T8B8Gv2Y).

```css
.workflow__list li {
  flex: 1;
}
```
