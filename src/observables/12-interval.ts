import { interval, Observer } from 'rxjs';
import { take } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

// Limitacion con take que mas adelante se vera. De esta forma se ejecuta
// el complete, si no, nunca se ejecutara
const interval$ = interval(0).pipe(take(5));

console.log('[INICIO]');
interval$.subscribe(observer);
console.log('[FIN]');

