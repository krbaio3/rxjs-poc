import { Observable, Observer, Subject, Subscriber, Subscription } from 'rxjs';

export const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};
/**
 * 1 - Casteo Multiple
 * 2 - Tambien es un Observer
 * 3 - Next, error y complete
 * */
const intervalo$ = new Observable<number>( (subscriber: Subscriber<number>) =>
{
   const intervalID =
       setInterval(
           () => subscriber.next(Math.random()), 1000);

   return () => {
       clearInterval( intervalID);
       console.log('Intervalo eliminado');
   }
});

const subject$ = new Subject<number>();
const subscription: Subscription = intervalo$.subscribe(subject$);


// En vez de subscribirnos al intervalo$, lo hacemos al subject$, y conseguimos que nos
// pinte el mismo valor

const subs1 = subject$.subscribe( observer);
const subs2 = subject$.subscribe(observer);

setTimeout( () => {
    subject$.next(10);
    subject$.complete();
    // Al cancelar la subscripcion ejecutamos el flujo de intervalo$ => clearInterval()
    subscription.unsubscribe();
}, 3500);
