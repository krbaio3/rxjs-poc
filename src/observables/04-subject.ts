import { Observable, Observer, Subscribable, Subscriber, Subscription } from 'rxjs';

export const observer: Observer<any> = {
    next: value => console.log('[next]:', value),
    error: err => console.warn('[error]: ', err),
    complete: () => console.info('[completado]'),
};

const intervalo$ = new Observable<number>( (subscriber: Subscriber<number>) =>
{
   const intervalID =
       setInterval(
           () => subscriber.next(Math.random()), 1000);

   return () => clearInterval( intervalID);
});
// Subscripciones arrojan numeros distintos, cuando deberia de ser igual.
const subs1 = intervalo$.subscribe( (num: number) => console.log('[subs1]: ', num));
const subs2 = intervalo$.subscribe(num => console.log('[subs2]: ', num));
