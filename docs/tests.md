# Test runner

Como es natural, la mejor práctica para elegir un test runner es elegir **bun**, el kit de herramientas que tengo en el proyecto ya que tiene implementado un test runner que se ejecuta con `bun test`.

# Metodología de test

En este objetivo tenemos que programar la lógica de negocio ya que necesitamos probarla con los tests. En su desarrollo tenemos dos opciones, **test-first** y **test-last**. **Test-last** consiste en escribir primero el código y luego los tests, como es normal. Y **test-first** es todo lo contrario, en primer lugar se escriben los test y luego el código. 

En mi caso voy ha hacer el código adaptándolo a los tests. Además voy a seguir la metodología **BDD** (*Behavior Driven Development*).Esta es una estrategia de desarrollo dirigido por comportamiento, que ha evolucionado desde TDD (Test Driven Development), aunque no se trata de una técnica de testing. BDD se define en un idioma común entre todos los stakeholders, las pruebas se centran en el usuario y el comportamiento del sistema.

# Filosofía seguida a la hora de desarrollar los tests

La filosofía que vamos a seguir para desarrollar los test es **F.I.R.S.T**:

- **Fast**: Los tests deben ejecutarse de forma rápida. De esta forma, no tiene importancia ejecutar los test muchas veces, ya que se tarda poco tiempo en ver los resultados.

- **Isolated**: Los tests ejecutan partes aisladas denuestro código. En general, la mayoría de tests se encargan de probar partes aisladas del código y no dependen de datos externos o APIs.

- **Repeatable**: Los tests siempre devuelven los valores esperados y se testea acorde a estos.

- **Self-Validating**: Los datos de salida y entrada esperados son automáticos y no hace falta esperar ninguna acción manual.

- **Thorough**: Hay que proponer desde casos fáciles hasta complejos, para ver cómo se comporta el programa a partir de distintos datos de entrada.
