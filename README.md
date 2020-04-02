# RXJS

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)

## Indice

### Observables

    - 01-observables: crear observables y observer.
    - 02-observables: desubscripcion de un observable, que pasa si no hacemos el clearInterval.
    - 03-observables: encadenar observables (subscripciones) sobre uno, para desuscribirse de todos a la vez.    
    - 04-subject: subscripcion asincrona de un observable, pero el flujo por detras sigue y lo vemos.
    - 05-subject: subscripcion sincrona de un observable, pero el flujo por detras sigue funcionando aunque no se vea.
    - 06-subject: subscripcion sincrona de un observable y vemos como se completa todo el flujo.

