import { interval, Observer } from 'rxjs';
import { take } from 'rxjs/operators';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

// Se ejecuta tan pronto pueda la cola de JS
// Nunca se ejecuta el complete
const interval$ = interval(0);

interval$.subscribe(observer);

