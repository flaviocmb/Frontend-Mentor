# Usando `height` e `height: auto` em imagens

Ao trabalhar com imagens em CSS, você pode se deparar com a necessidade de ajustar a altura das imagens em relação ao seu contêiner. A escolha entre definir uma altura específica (`height`) ou usar `height: auto` pode impactar a aparência e a responsividade do seu design. Aqui estão algumas diretrizes para ajudar você a decidir quando usar cada abordagem.

## Quando Usar `height`

Se o contêiner da imagem é maior do que a altura da imagem e você deseja que a imagem preencha completamente o contêiner, você pode precisar definir uma altura específica. Isso é útil em situações onde a imagem deve cobrir uma área específica, independentemente de sua própria proporção.

**Exemplo:**

```css
img.full-height {
  height: 100%; /* Preenche a altura do contêiner */
  width: auto;  /* Mantém a proporção da imagem */
}
```

## A imagem possui tamanho 510 x 484 mas a especificação do arquivo de design mostra o card da imagem na página com tamanho 152 x 160. Qual seria a melhor prática de abordagem para seguir o design?

A abordagem mais eficaz é redimensionar a imagem para o tamanho especificado no design. Isso pode ser feito de duas maneiras: no momento da criação do arquivo ou dinamicamente usando CSS.

### Dinamicamente usando CSS

```css
.card-img {
  width: 152px;
  height: 160px;
  object-fit: cover; /* Cobre o contêiner, mantendo a proporção e cortando o excesso */
}
```

`object-fit: cover;`: ajusta a imagem para preencher o contêiner enquanto mantém a proporção da imagem. Parte da imagem pode ser cortada para preencher completamente o card sem distorção.

#### Considerações Adicionais

Se o design for responsivo, considere usar diferentes tamanhos de imagem para diferentes dispositivos. Isso pode ser feito com atributos srcset e sizes no HTML para fornecer imagens adequadas para diferentes tamanhos de tela.

```html
<img src="path/to/image-152x160.jpg" 
     srcset="path/to/image-510x484.jpg 510w, 
             path/to/image-152x160.jpg 152w" 
     sizes="(max-width: 600px) 152px, 510px" 
     class="card-img" 
     alt="Description of image">
```

## qual é o aspect ratio dessas imagens?

510/484 =(aproximadamente) 1.0536 ou seja 1.05
152/160 = 0.95

Imagem Original: Aproximadamente 1.05:1
Imagem do Card: Aproximadamente 0.95:1

Essas relações de aspecto mostram que a imagem original é ligeiramente **mais larga** em comparação com a **altura**, enquanto a imagem do card é um pouco **mais alta** em relação à **largura**.

> _A imagem de tamanho 510/484 em mesmo nível da imagem do card 152/160 seria aproximadamente 152/144 que também chega ao aspect ratio de 1.05._

### Aplicar a relação de aspecto (aspect ratio) com CSS

Para a imagem original:

```css
.image-original-container {
  width: 100%; /* Ajuste conforme necessário */
  aspect-ratio: 1.05; /* Relação de aspecto de 510 x 484 */
  overflow: hidden;
  position: relative;
}

.image-original-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner */
}
```

Para a imagem do card:

```css
.image-card-container {
  width: 100%; /* Ajuste conforme necessário */
  aspect-ratio: 0.95; /* Relação de aspecto de 152 x 160 */
  overflow: hidden;
  position: relative;
}

.image-card-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajusta a imagem para cobrir o contêiner */
}
```

#### Eu poderia usar `aspect-ratio: 510 / 484;` em CSS?

Sim, você pode usar a propriedade aspect-ratio em CSS, mas a forma correta de especificar a relação de aspecto é usando valores numéricos sem a necessidade de unidade, como **width / height**.

No entanto, você pode simplificar para uma forma mais comum ou arredondada, como:

```css
aspect-ratio: 1.05; /* Aproximadamente 510 / 484 */
```
