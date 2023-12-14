# Test runner

Como criterios para la elección del test runner voy a tener en cuenta **rapidez** de ejecución, **compatibilidad** con TypeScript y **proyección en el tiempo**.

## Jest
Jest es un framework de tests que ya es nativo para TypeScript, algo positivo, y tiene un buen rendimiento gracias a su paralelismo, sin embargo, mi programa es secuencial, lo que impide aprovechar esta característica. Otro aspecto positivo es que se mantiene bastante actualizado.

## Mocha 
Mocha es un *test-runner* que permite realizar test unitarios, este es usado tanto en proyectos de JavaScript como de TypeScript. La principal ventaja de este es su flexibilidad a la hora de realizar distintos tipos de test el principal problema es que ultimamente su desarrollo no ha sido muy continuado, lo que pude dar que pensar que este puede ser sustituido en el futuro por otras opciones.
Esto dificulta un poco tenerlo en cuenta ya que la compatibilidad
con TypeScript no es del todo sencilla.

## Bun
Como es natural, la mejor práctica para elegir un test runner es elegir **bun**, ya que es una herramienta rápida y nueva con constantes actualizaciones. Con *bun* puedo hacer test unitarios a gran velocidad, adenás el kit de herramientas que tengo en el proyecto ya que tiene implementado un test runner que se ejecuta con `bun test`.

# Metodología de test

En este objetivo tenemos que programar la lógica de negocio ya que necesitamos probarla con los tests. En su desarrollo tenemos dos opciones, **test-first** y **test-last**. **Test-last** consiste en escribir primero el código y luego los tests, como es normal. Y **test-first** es todo lo contrario, en primer lugar se escriben los test y luego el código. 

En mi caso voy ha hacer el código adaptándolo a los tests. Además voy a seguir la metodología **BDD** (*Behavior Driven Development*).Esta es una estrategia de desarrollo dirigido por comportamiento, que ha evolucionado desde TDD (Test Driven Development), aunque no se trata de una técnica de testing. BDD se define en un idioma común entre todos los stakeholders, las pruebas se centran en el usuario y el comportamiento del sistema.

# Filosofía seguida a la hora de desarrollar los tests

La filosofía que vamos a seguir para desarrollar los test es **F.I.R.S.T**:

- **Fast**: Los tests deben ejecutarse de forma rápida. De esta forma, no tiene importancia ejecutar los test muchas veces, ya que se tarda poco tiempo en ver los resultados.

- **Isolated**: Los tests ejecutan partes aisladas de nuestro código. En general, la mayoría de tests se encargan de probar partes aisladas del código y no dependen de datos externos o APIs.

- **Repeatable**: Los tests siempre devuelven los valores esperados y se testea acorde a estos.

- **Self-Validating**: Los datos de salida y entrada esperados son automáticos y no hace falta esperar ninguna acción manual.

- **Thorough**: Hay que proponer desde casos fáciles hasta complejos, para ver cómo se comporta el programa a partir de distintos datos de entrada.


## Anotaciones 

El programa tiene una única funcionalidad así que solo hace falta hacer un test por tienda. El test es sencillo, tengo un par de páginas web descargadas y sobre ellas debemos tener un output deseado que es lo que comprueba los tests. El test es rápido (~50ms) y automático. No requiere de ninguna acción adicional, solo hace falta tener el `test.txt` adecuado a las páginas web introducidas.

### Pccomponentes
* En *div id="product-grid"*
* nombre &rarr; *title="..."* o en *data-product-name="..."*
* precio &rarr; en *"product-card" -> "product-card__info-container"* ejemplo: 659,9€ siempre tiene el símbolo de € al final y si está en oferta está algo más escondido y tiene 2 precios, coger el primero.