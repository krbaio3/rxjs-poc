import { interval } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

const numbers = [1,2,3,4,5,6];

const totalReducer = (acumulado: number, valorActual: number) => acumulado + valorActual;

const total = numbers.reduce( totalReducer, 0);

console.log (total);

interval(1000)
    .pipe(
        take(3),
        reduce( totalReducer, 0)
    )
   .subscribe({
       next: value => console.log(`[next]: ${value}`),
       complete: () => console.log('[complete]'),
   });

