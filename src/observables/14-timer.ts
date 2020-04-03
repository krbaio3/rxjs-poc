import { timer, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

// se ejecuta tan pronto lo libere la cola de JS
// const timer$ = timer(0);

// Creamos un interval que se inicie a los dos segundos, y que se dispare cada segundo
const timer$ = timer(2000,1000);

console.log('[INICIO]');
timer$.subscribe(observer);
console.log('[FIN]');

