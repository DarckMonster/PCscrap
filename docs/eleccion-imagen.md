# Elección de la imagen para el contendor para pruebas

## Requisito
* Es indispensable que la imagen pueda ejecutar `bun`, es decir, que sea compatible con nuestro toolkit.

## Criterios de elección

* Usar imágnes de `bun`, aquellas que nos proporciona bun en DockerHub. 
* Imaǵenes que sean actualizadas constantemente y que sigan dando soporte en el futuro. Esto hará que evitemos problemas de compatibilidad con futuras actualizaciones así como nos aseguramos que se mantenga la seguridad en nuestro contendor.
* Cierto rendimiento, así que buscaremos que la imagen sea ligera para evitar que se sobrecargue.


## Imágenes compatibles

* bun: la imagen oficial de bun. Hay varias opciones, son imagenes custom de las tres de abajo.
* alpine: imagen liviana pero más dificil de usar
* debian: imagen estandar, bien balanceada entre tamaño y características.
* slim: imagen basada en debian pero recortando las características innecesarias, más liviana.

## Selección

Como bun nos proporciona imágenes con custom para asegurarnos de poder usar bun sin problema, lo más inteligente es usar una de estas. Entre las tres opciones de imágnes me voy a quedar con `slim` ya que está basada en debian, entorno que ya conozco, y es más ligera, lo que contribuirá a mejorar el rendimiento. Entre las distintas versiones me voy a quedar con la siguiente: [slim](https://hub.docker.com/r/oven/bun/tags?page=1&name=slim)
