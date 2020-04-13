import { interval, concat, Observable, of, from } from 'rxjs';
import { take } from 'rxjs/operators';


const interval$: Observable<number> = interval(1000);

// concat(
//     interval$.pipe(take(3)),
//     interval$.pipe(take(2)),
// ).subscribe(console.log);

/* Esta funcion nos permite concatenar observables de tal manera que cuando se
* complete el primer observable del argumento, lo concatena con el siguiente, y
* asi sucesivamente siempre y cuando se complete el observable anterior*/
concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    from([1,2,3,4])
).subscribe(console.log);
