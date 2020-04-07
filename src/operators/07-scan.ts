import { from } from 'rxjs';
import { map, reduce, scan } from 'rxjs/operators';


const numbers = [1,2,3,4,5,6];

const totalAcumulado = (acumulado: number, valorActual: number) => acumulado + valorActual;

// Comparacion de reduce y scan

// Reduce
from( numbers).pipe(
    reduce(totalAcumulado, 0)
).subscribe(console.log);

// Scan
from( numbers).pipe(
    scan(totalAcumulado, 0)
).subscribe(console.log);

// implementando un patron Redux
interface Usuario {
    id: string;
    autenticado: boolean;
    token: string;
    edad: number;
}

const user: Partial<Usuario>[] = [
    { id: 'jorge', autenticado: false, token: null },
    { id: 'jorge', autenticado: true, token: 'abc' },
    { id: 'jorge', autenticado: true, token: 'abc123' },
];

// Es importante tipar el scan, porque si le quitamos el tipado, en el map de mas
// abajo fallara porque no encuentra la propiedad id, solo encuentra la propiedad 'edad'
// que cree que es el state.
const state$ = from<Partial<Usuario>[]>(user).pipe(
    scan<Partial<Usuario>>((acc, value) => {
        return {...acc, ...value}
    }, { edad: 33 })
);

const id$ = state$.pipe( map(state => state.id));

id$.subscribe(console.log);
//
// interval(1000)
//     .pipe(
//         take(3),
//         reduce( totalReducer, 0)
//     )
//    .subscribe({
//        next: value => console.log(`[next]: ${value}`),
//        complete: () => console.log('[complete]'),
//    });
//
