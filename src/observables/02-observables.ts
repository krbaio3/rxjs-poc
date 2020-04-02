import { Observable, Observer, Subscribable, Subscription } from 'rxjs';

export const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

const interval$ = new Observable<number>(subscriber => {
    let i = 0;
    const interval = setInterval(() => {
        subscriber.next(++i);
        console.log('Dentro del Interval', i);
    }, 1000);

    // Si no le ponemos el `return`, se nos va al infinito ejecutando el setInterval,
    // aunque nos hayamos desuscrito.
    return () => {
        clearInterval(interval);
        console.log('[destroy] interval');
    }
});

const subscription1: Subscription = interval$.subscribe((num:number) => console.log('{ Numero } ', num));
const subscription2: Subscription = interval$.subscribe((num:number) => console.log('{ Numero } ', num));
const subscription3: Subscription = interval$.subscribe((num:number) => console.log('{ Numero } ', num));


setTimeout(()=> {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();
    console.log('completado timeout');
},3000);
