import { ajax, AjaxError } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Es un servidor de pruebas que nos devuelve lo que le enviamos
const urlFake = 'https://httpbin.orgXXX/delay/1';

/* Nos creamos una funcion que maneje errores*/
interface customResponse {
    ok: boolean;
    usuarios: [];
}
const errorHandler: (resp: AjaxError) => Observable<customResponse> = (resp: AjaxError) => {
    console.warn('[errorHandler]:', resp.message);
    return of<customResponse>({
        ok: false,
        usuarios: []
    })
};

/*
* Ambas peticiones fallan porque no manejan el error
*/

const obs$ = ajax.getJSON(urlFake);
const obs2$ = ajax(urlFake);

/* En vez de manejarlo con un catchError, lo podemos manejar con el
* objeto observer que se puede implementar dentro del subscribe */

obs$.subscribe({
    next: value => console.log('[next obs$]:', value),
    error: err => console.warn('[error obs$]:', err),
    complete: () => console.debug('[complete obs$]')
});

/* Pero que pasaria si implementamos el catchError dentro de nuestro observable?
* Podemos ver que no se dispara el error del Observer, sino, que como nuestra
* funcion emite un nuevo observable, el observer ejecuta el next*/
obs2$.pipe(
    catchError(errorHandler)
).subscribe({
    next: value => console.log('[next obs2$]:', value),
    error: err => console.warn('[error obs2$]:', err),
    complete: () => console.debug('[complete obs2$]')
});
