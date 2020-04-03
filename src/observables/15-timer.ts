import { timer, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

const hoyEn3 = new Date(); // fecha de ahora
hoyEn3.setSeconds(hoyEn3.getSeconds() + 5); // Se le suma 5 segundos

// programamos cuando queremos que se emita y se complete el observable.
const timer$ = timer(hoyEn3);

console.log('[INICIO]');
timer$.subscribe(observer);
console.log('[FIN]');

