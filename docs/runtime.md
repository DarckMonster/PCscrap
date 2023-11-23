# Runtime para TypeScript

## Criterios de elección

* Estoy buscando un runtime que sea rápido y moderno, pero que además sea totalmente compatible con **TypeScript**.
* Una toolchain unificada para mejorar la cohesión de las tres herramientas.
  

## Investigación y decisión

He estado investigando sobre runtimes. He visto ejemplos que usan Node.js, deno y bun como runtime para TypeScript. Deno es un fork de Node.js más rápido y bun es otro runtime diferente aún más rápdio. 

En cuanto a **Node**, es la primera herramienta y la más popular pero no es la mejor para un proyecto de TypeScript ya que no lo ejecuta de manera nativa. Por esta razón y otras más es más conveniente revisar los otros dos.

**Deno** es más actual y soporta nativamente TypeScript, bastante bueno, pero me he decantado por el más actual y he visto que es el que da mejor rendimiento:

**Bun** es una herramienta muy reciente y está destacando por su velocidad y versatlidad. Tras revisar las distintas herramientas que tenemos disponibles, he elegido a **bun** ya que es un toolkit siendo el runtime, gestor de dependencias y tambien es un test runner.

###### Dada la popularidad de deno y Node entre los alumnos también me hizo decantarme por **bun**.