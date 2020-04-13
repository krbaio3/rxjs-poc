import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, mergeMap, pluck, switchMap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const interval$: Observable<number> =
    interval(500).pipe(take(3));
const click$: Observable<MouseEvent> =
    fromEvent<MouseEvent>(document, 'click');

/* El concatMap concatena la salida actual con la anterior salida
* cuando el observable anterior se completa, de tal forma
* que lo hace cuando el observable anterior deje de emitir valores (completado)*/
click$.pipe(
    concatMap<MouseEvent,Observable<number>>(() => interval$))
    .subscribe(console.log);
