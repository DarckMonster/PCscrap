# PCscrap

## Problema inicial

Una persona que se dedica a montar ordenadores pasa demasiado tiempo mirando en distintas webs para encontrar la mejor para comprar un componente. Por tanto quiere comparar de forma rápida cada pieza para quedarse con la de mejor precio. Para ello es necesario extraer la información de las webs y estructurarla.

## Clase scraping

Es la entidad encargada de englobar todos los componentes con sus tiendas respectivas.

Para comprobar la sintaxis de esta entidad tendremos que ejecutar el siguiente comando:

```bash
bun run check
```

Para hacer un test rápido del funcionamiento del código simplemente ejecutamos el comando que nos porporciona el propio bun:
```bash
bun run test
```

## Test en un entorno aislado

Para poder crear la imagen de docker ejecutamos el primer comando y el segundo para ejecutarla:
```bash
bun run build-docker
bun run docker
```

También se puede importar la imagen de [DockerHub](https://hub.docker.com/r/darckmonster/pcscrap) de la siguiente manera:
```bash
docker pull darckmonster/pcscrap
bun run docker
```


## Documentación

* [ClaveSSH](docs/ClaveSSH.png)  
* [Config](docs/gitConfig.png)    
* [Historiasde de usuario](docs/historias-de-usuario.md)  
* [Milestones](docs/milestones.md)
* [Runtime](docs/runtime.md)     
* [Gestor de dependencias](docs/gestor-dependencias.md)    
* [Task runner](docs/task-manager.md)
* [Tests](docs/tests.md)
* [Codigo](docs/code.md)
* [Elección de imagen](docs/eleccion-imagen.md)
