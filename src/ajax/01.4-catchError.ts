import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const urlFake = 'https://api.github.com/users/per_page=5';

/*
* Lo anterior es el camino feliz, que no captura errores. En caso de
* tener algun error, lo podemos manejar con el operador catchError
* que nos provee rxjs. En el catchError nos permite devolverle un observable
* o lo que queramos, de esta forma, nuestro html no se rompera. Lo que nos da
* una versatilidad muy buena para tratar errores.
*/


ajax(urlFake).pipe(
    pluck('response'),
    catchError( error => {
        console.warn(`[error]: ${error}`)
        return of([]);
    })
).subscribe(users => console.log('[users]:', users));


/* Podemos optimizar el codigo anterior, pasando el error a una funcion.
* Esto nos da mucha potencia para el tratamiento de errores
*/

const errorRxjs: (error: AjaxError) => Observable<[]> = (error: AjaxError) => {
    console.warn(`[error]: ${error}`);
    return of<[]>([]);
};

setTimeout(()=>{
    console.log('========================================================');
    console.log('Espera 2 segundos para ver la salida del response pasada por la funcion errorRxjs');
    console.log('========================================================');
},1000);

setTimeout(()=> {
    ajax(urlFake).pipe(
        pluck('response'),
        catchError( errorRxjs)
    ).subscribe(users => console.log('[users]:', users));
}, 3000);
