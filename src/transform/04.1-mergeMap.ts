import { interval, Observable, of } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

const letras$: Observable<string> = of('a', 'b','c');

letras$
    .pipe(
        mergeMap<string, Observable<string>>(
            (letra) => interval(1000).pipe(
                map((i) => `${letra} - ${i}`),
                take(3)
            ))
    )
    .subscribe({
    next: value => console.log('[next] ', value),
    error: err => console.warn('[error] ', err),
    complete: () => console.log('[complete]')
});
