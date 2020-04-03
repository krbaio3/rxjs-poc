import { interval, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

// Esto se ejecuta hasta el infinito y mas alla
// Nunca se ejecuta el complete
const interval$ = interval(2000);

interval$.subscribe(observer);

