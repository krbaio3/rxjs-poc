import { ajax } from 'rxjs/ajax';

// Es un servidor de pruebas que nos devuelve lo que le enviamos
const url = 'https://httpbin.org/delay/1';

/*
* Ejemplo de una peticion ajax pasada a json directamente
*/

const obs$ = ajax.getJSON(url, {
    'Content-Type': 'application/json',
    'mi-token': 'bear mi-super-token'
});

obs$.subscribe(data=> console.log('[data]:', data));
