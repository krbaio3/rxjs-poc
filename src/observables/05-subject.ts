import { Observable, Observer, Subject, Subscriber } from 'rxjs';

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
           () => subscriber.next(Math.random()), 5000);

   return () => clearInterval( intervalID);
});

const subject$ = new Subject<number>();
intervalo$.subscribe(subject$);


// En vez de subscribirnos al intervalo$, lo hacemos al subject$, y conseguimos que nos
// pinte el mismo valor
const subs1 = subject$.subscribe( (num: number) => console.log('[subs1]: ', num));
const subs2 = subject$.subscribe((num: number) => console.log('[subs2]: ', num));

