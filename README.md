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
    - 07-of: observable con operador of.
    - 08-fromEvent: observable a partir de eventos.
    - 09-range: observable con range; distintos ejemplos.
    - 10-interval: ejecucion de un observable cada x periodo.
    - 11-interval: ejecucion tan pronto pueda ejecutarlo la cola de JS.
    - 12-interval: ejecucion tan pronto pueda ejecutarlo la cola de JS, pero ejecuta el complete.
    - 13-timer: ejecucion dado un periodo y completado.
    - 14-timer: ejecucion que se inicia dado un tiempo y ejecutado dado un periodo.
    - 15-timer: programamos cuando queremos que se emita y se complete el observable.
    - 16-asyncScheduler: ejemplo basico emulando un setTime.
    - 17-asyncScheduler: ejemplo basico emulando un setInterval.
    - 18-asyncScheduler: ejemplo 17 con unsubscribe en un asyncScheduler.
    - 19-of-from: distintos ejemplos con of y from.

### Operadores

    - 01-map: tratamiento de salida de observable, hace un map de js pero en rxjs
    - 02-pluck: selecciona una propiedad del objeto de salida para que se trate.
    - 03-mapTo: convierte una entrada del observable en un valor fijo cada vez que se emite
    - 04-filter: filtra la entrada de datos y si cumple la condicion deja pasar los datos.
    - 05-tap: permite ejecutar acciones entre operaciones de observables. Muy bueno para debug
