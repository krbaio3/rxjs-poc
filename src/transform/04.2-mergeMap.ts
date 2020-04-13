import { fromEvent, interval, Observable } from 'rxjs';
import { mergeMap, takeUntil } from 'rxjs/operators';

const mouseDown$:Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mousedown');
const mouseUp$:Observable<MouseEvent> = fromEvent<MouseEvent>(document, 'mouseup');
const interval$: Observable<number> = interval();

/* Cuando se hace Click en el html, se lanza el evento mouseDown dentro esta el mergeMap que hace
* lance el observable interval (se subscribe a el), que cuenta el tiempo, finalizando cunado se
* hace el mouseUp */
mouseDown$
    .pipe(
        mergeMap<MouseEvent, Observable<number>>( () => interval$.pipe(
            takeUntil<number>(mouseUp$)
        ))
    )
    .subscribe({
        next: value => console.log('[next] ', value),
        error: err => console.warn('[error] ', err),
        complete: () => console.log('[complete]')
    });
