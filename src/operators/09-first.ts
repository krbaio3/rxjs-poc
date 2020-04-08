import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

// Una forma de hacer que cuando se lance el primer click y se desubscriba,
// es esta, pero no es la forma del todo correcta
click$
    .pipe(
        take(1)
    )
    .subscribe({
    next: value => console.log('[next]', value),
    complete: () => console.log('[complete]')
});

// la forma correcta de hacerlo seria usar el operador first
const click2$ = fromEvent<MouseEvent>(document, 'click');

click2$
    .pipe(
        first()
    )
    .subscribe({
        next: value => console.log('[next2]', value),
        complete: () => console.log('[complete2]')
});

// forma de usar el first con condiciones
const click3$ = fromEvent<MouseEvent>(document, 'click');

click3$
    .pipe(
        tap<MouseEvent>(console.log),
        first<MouseEvent>((event: MouseEvent) => event.clientY >= 150)
    )
    .subscribe({
        next: value => console.log('[next3]', value),
        complete: () => console.log('[complete3]')
    });

// Otra forma de usar el first con condiciones
const click4$ = fromEvent<MouseEvent>(document, 'click');

interface myEvent {
    clientX: number;
    clientY: number;
}

click4$
    .pipe(
        tap<MouseEvent>( t => console.log('[tap]', t)),
        map<MouseEvent, myEvent>( ({ clientX, clientY }) => ({ clientX, clientY})),
        first<myEvent>(({clientY}) => clientY >= 150)
    )
    .subscribe({
        next: value => console.log('[next4]', value),
        complete: () => console.log('[complete4]')
    });
