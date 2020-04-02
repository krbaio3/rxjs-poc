import { asyncScheduler, of, range } from 'rxjs';

// const src$ = of(1,2,3,4,5);
// const src$ = range(-5,10 );
// const src$ = range(-5,10 );
// const src$ = range(1,5 );
//const src$ = range(5 ); // el inicio es 0 por defecto
const src$ = range(0, 5, asyncScheduler ); // Se transforma de manera asincorna

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
