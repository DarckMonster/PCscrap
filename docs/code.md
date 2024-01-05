# Anotaciones sobre el código

## constructor de scraping
Aquí, con tienda tenemos las url de las paginas a descargar, cosa que se debería hacer con una funcion... En lugar de tener los HTML ya descargados.

## scraping (scraping(...) de scraping.ts)

El scraping se realiza mediante regex. El problema es que hay que tener una expresión regex distinta para cada tienda.

### Pccomponentes
* En *"product-grid"* empiezan los productos.
* nombre &rarr; en *data-product-name="..."*
* precio &rarr; en *"product-card" -> "product-card__info-container"* ejemplo: 659,9€ siempre tiene el símbolo de € al final y si está en oferta está algo más escondido y tiene 2 precios, coger el primero. Con procesadores hay un comentario de html \<!-- --> entre el precio y '€', aspecto a tener en cuenta.
* En *"product-list-middle-container"* terminan los comoponentes buscados. Ya hay que parar de buscar.

## extraer modelo (extraerModelo(...) de scraping.ts)

Los modelos de tipo_componete.ts están ordenados, primero están los modelos base y después los ti, xt, xtx, etc. Si un modelo no es base (con ti, xt...) encontraría tanto el modelo base como el especial. Así, si es especial, cogeremos el último, el más especial.

*Ej.*  De 4060 ti encontramos tanto 4060 como 4060 ti, cogemos el más especial. Si tenemos 4060 solo encontraremos 4060.