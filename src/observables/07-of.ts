import {of} from 'rxjs';

// const obs$ = of([1,2,3,4,5,6]);
// const obs$ = of([1,2,3,4,5,6], {a:1,b:2}, function () {}, Promise.resolve(true));
// const obs$ = of([1,2,3,4,5,6], {a:1,b:2}, function () {}, Promise.resolve(true));
const obs$ = of<number>(...[1,2,3,4,5,6],2,3,4,5);

console.log('Inicio del Obs$');

obs$.subscribe(value => console.log('[next]: ', value),
    null,
    () => console.log('Terminamos la secuencia'));

console.log('fin del Obs$');
