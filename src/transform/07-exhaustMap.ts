import { fromEvent, interval, Observable } from 'rxjs';
import { concatMap, exhaustMap, mergeMap, pluck, switchMap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const interval$: Observable<number> =
    interval(500).pipe(take(3));
const click$: Observable<MouseEvent> =
    fromEvent<MouseEvent>(document, 'click');

/* El exhaustMap mientras tenga una subscripcion activa, ignora las demas subscripciones
* hasta que no termine la que esta en curso. Cuando termina con la activa, las subscripciones
* que le ham llegado mientras tenia una subscripcion activa, son perdidas, y si cuando termine
* de la suscripcion activa entra una nueva, hasta que no termine con ella no coge otra, y asi
* sucesivamente */
click$.pipe(
    exhaustMap<MouseEvent,Observable<number>>(() => interval$))
    .subscribe(console.log);
