import { timer, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

// a los dos segunos se ejecuta el observable y se termina
const timer$ = timer(2000);

console.log('[INICIO]');
timer$.subscribe(observer);
console.log('[FIN]');

