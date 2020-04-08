import { of } from 'rxjs';
import { take, tap } from 'rxjs/operators';


const numbers$ = of(1,2,3,4,5,6);

// Este ejemplo solo emite los 3 primeros valores del observable y lo completa
numbers$
    .pipe(
        // para ver que es real que se ejecuta solo tres veces
        tap( t => console.log('[tap]: ', t)),
        take(3)
    )
    .subscribe(
        {
            next: value => console.log('[next]: ', value),
            complete: () => console.log('[complete]'),
        }
);

console.log('------------------------------------------------------');

// Y si ponemos un valor muy alto en el take, ejemplo 30, el observable se completa igualmente
numbers$
    .pipe(
        take(30)
    )
    .subscribe(
        {
            next: value => console.log('[next]: ', value),
            complete: () => console.log('[complete]'),
        }
    );


// Pero aqui vemos que nos subscribimos al observable numeros$, por lo que si lo paramos en la
// tercera emision, el observable se sigue emitiendo aunque lo hayamos parado?
// Como vemos, el observable numbers2$ deja de emitir valores.
setTimeout(()=> {
    const numbers2$ = of(1,2,3,4,5,6).pipe(
        tap( t => console.log('[numers2$]: ', t)),
    );
    numbers2$.pipe(
        tap( t => console.log('[tap2]: ', t)),
        take(3),
    )
        .subscribe(
            {
                next: value => console.log('[next2]: ', value),
                complete: () => console.log('[complete2]'),
            }
        );
}, 2000);
