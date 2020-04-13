import { fromEvent, interval, Observable } from 'rxjs';
import { mergeMap, pluck, switchMap, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';


const clickMerge$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
const clickSwitch$: Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'click');
const interval$: Observable<number> = interval(1000);

/* Diferencia entre mergeMap y switchMap. El mergeMap lo limitamos a 10 con el take para
* no consumir tanta memoria */

clickMerge$
    .pipe(
        mergeMap<MouseEvent, Observable<number>>( (value) => interval$
            .pipe(take<number>(10)))
    )
.subscribe(value => console.log('[mergeMap]', value));


clickSwitch$
    .pipe(
        switchMap<MouseEvent, Observable<number>>( (value) => interval$
            .pipe(take<number>(10)))
    )
    .subscribe(value => console.log('[switchMap]', value));
