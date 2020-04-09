import { ajax } from 'rxjs/ajax';

// Es un servidor de pruebas que nos devuelve lo que le enviamos
const urlFake = 'https://httpbin.orgXXX/delay/1';

/*
* Ambas peticiones fallan porque no manejan el error
*/

const obs$ = ajax.getJSON(urlFake);
const obs2$ = ajax(urlFake);

obs$.subscribe(data=> console.log('[data getJSON]:', data));
obs2$.subscribe(data=> console.log('[data]:', data));
