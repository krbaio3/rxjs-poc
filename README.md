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
    - 06-reduce: funciona como el reduce de ECMAScript6. El valor lo emite al final de la subscripcion
    - 07-scan: funciona como el `reduce`, pero con la salvedad que cuando los valores son emitidos por nuestro 
    observable, va emitiendo el valor del acumulado
    - 08-take: limita la cantidad de emisiones que un observable puede tener.
    - 09-fist: coge el primer valor y se completa, y al agregarle una condicion que se cumple por primera vez 
    la condicion, se para la emision de valores.
    - 10-takeWhile: recibe valores mientras la condicion se cumpla.
    - 11-takeUntil: sigue emitiendo y recibiendo valores hasta que el segundo observable emita su primer valor
    - 12-skip: saltar u omitir X de emisiones iniciales
    - 13-distinct: emite valores siempre y cuando sean distintos al ya emitido.
    - 14-distinct: ejemplo de como hace la comparacion con el ===.
    - 15-distinctUntilChanged: emite valores siempre y cuando sean distintos al valor anterior.
    - 16-distinctUntilKeyChanged: es el mismo concepto que distinctUntilChanged pero como argumento se le pasa una
    propiedad del objeto para comparar

### Operadores de Tiempo

    - 01-debounceTime: podemos contar las milesimas de segundo desde la ultima emision, si sobrepasan el valor que indicamos,
    emitiran el valor
    - 02-debounceTime: ejemplo con un input que por ejemplo hace peticiones http
    - 03-throttleTime: justo cuando emite el valor, empieza a contar el tiempo indicado hasta emitir el siguiente valor,
    pero si en ese tiempo el observable ha emitido valores (dentro del tiempo indicado) los ignora
    - 04-throttleTime: indicamos 
    - 05-sampleTime: ultimo valor emitido en un periodo de timepo
    - 06-sample: emite el ultimo valor emitido por el observable hasta que se emita un nuevo valor (2 observables)
    - 07-auditTime: emite el ultimo valor emitido por el observable por un periodo de tiempo
    
 ### Peticiones Ajax
 
    - 01.1-ajax-catchError: Se implementa un ejemplo con el fetch de ES6. Camino feliz 
    - 01.2-ajax-catchError: Se implementa un ejemplo con el fetch de ES6 pero con fallo. Viendo el problema que genera el
    como trata las peticiones http.
    - 01.3-ajax-catchError: Se implementa el codigo anterior pero con observables. Camino feliz.
    - 01.4-ajax-catchError: Se implementa el codigo anteror pero con una url que da fallo, y ser personaliza la salida 
    que nos da la captura del error.
    - 02.1-getJSON: peticion basica ajax que directamente nos la convierte a JSON
    - 02.2-getJSON: fallo de peticiones porque no manejan el error  
    - 02.3-getJSON: manejando errores con catchError
    - 02.4-getJSON: manejando errores desde el observer del subscribe. Diferencia entre ambos.
    - 03-methods-http: construccion de llamadas http con la propiedad ajax

### Operadores de Transformacion

    - 01-megeAll: Ejemplo de llamada al API de github pero sin uso de mergeAll
    - 02-megeAll: Ejemplo de llamada al API de github usando el mergeAll para aplanar toda la salida de la API
    - 03-megeAll: Ejemplo de llamada al API de github usando el mergeAll para aplanar toda la salida de la API
    - 04.1-megeMap: Recibe el valor de nuestro observable inicial, y devuelve una subscripcion a otro observable
    - 04.2-megeMap: Ejemplo que el mergeMap se subscribe al evento interval
    - 04.3-megeMap: Ejemplo de llamada http con aplanamiento de datos, no es recomendable, porque se envia todo 
    lo que hay en el input
    - 05.1-swichMap: Es como el mergeMap, pero cuando se subscribe a un nuevo observable, cancela la subscripcion
    anterior
    - 05.2-switchMap: Comparacion entre switchMap - mergeMap
    - 06-concatMap: Parecido al mergeAll. concatena el ultimo valor emitido cuando el observable anterior se 
    complete. Lo pone en una cola a la espera de que se resuelva el observable anterior.
    - 07-exhaustMap: Mantiene una subscripcion activa (emitiendo valores) antes de agregar otra subscripcion. Si
    se intentan agregar mas subscriciones mientras haya una activa, las nuevas subscripciones son ignoradas. 

### Operadores y combinacion de Observables

    - 01-startWith: hace que se emita como primer valor/es el parametro que se le pase como argumento.
    - 02-endWith: hace que se emita como ultimo valor/es el parametro que se le pase como argumento.
    - 03-concat (funcion): la funcion concat (el observable concat esta deprecado), concatena observables
    siempre y cuando se vayan completando.
    - 04-merge (funcion): la funcion merge (el observable merge esta deprecado), muestra la salida de dos observables 
    segun vayan emitiendo datos. Hasta que no esten los dos completados, el observable (producto del merge de los dos)
    no se completa
    - 05-combineLatest: combina el ultimo valor de cada observable, enviados en un array, se completa cuando se 
    completen los dos, si uno no se completa y sigue emitiendo valores, los lanza con el ultimo valor emitido del
    observable completado.
    - 06-forkJoin: Debe de ser finito, por lo que cuando se complenten los obs$ que se pasan como argumento, emite el 
    valor de los tres observables en un array o en un objeto. Array por defecto.


### Laboratory

    - 01-laboratory: Ejercicio de scroll y barra superior marcando cuando queda de texto
    - 02-laboratory: Ejercicio de llamada ajax y aplanamiento de operaciones.
    - 03-laboratory: Ejercicio con un simple loading (startWith, endWith)
    - 04-laboratory: Ejercicio forkJoin y peticiones ajax
