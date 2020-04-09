import { Observable, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

// Es un servidor de pruebas que nos devuelve lo que le enviamos
const urlFake = 'https://httpbin.orgXXX/delay/1';

/* Nos creamos una funcion que maneje errores*/

interface customResponse {
    ok: boolean;
    usuarios: [];
}
const errorHandler: (resp: AjaxError) => Observable<customResponse> = (resp: AjaxError) => {
    console.warn('[error]:', resp.message);
    return of<customResponse>({
        ok: false,
        usuarios: []
    })
};

/*
* Ambas peticiones fallan porque no manejan el error
*/

const obs$ = ajax.getJSON(urlFake)
    .pipe(
        catchError(errorHandler)
    );
const obs2$ = ajax(urlFake)
    .pipe(
        catchError(errorHandler)
    );

obs$.subscribe(data=> console.log('[data getJSON]:', data));
obs2$.subscribe(data=> console.log('[data]:', data));
