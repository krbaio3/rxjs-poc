import { fromEvent } from 'rxjs';
import { first, map, take, takeWhile, tap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

interface myEvent {
    x: number;
    y: number;
}

// No emite el valor que le ha hecho completar el observable
click$
    .pipe(
        map<MouseEvent, myEvent>(({x, y}) =>({ x, y})),
        takeWhile(({y})=>( y <= 150))
    )
    .subscribe({
    next: value => console.log('[next]', value),
    complete: () => console.log('[complete]')
});

// Agregando la propiedad inclusive podemos hacer que nos emita el valir que le
// ha hecho completarse.
click$
    .pipe(
        map<MouseEvent, myEvent>(({x, y}) =>({ x, y})),
        // Agregamos la propiedad inclusive dentro como propiedad del takeWhile
        takeWhile(({y})=>( y <= 150), true)
    )
    .subscribe({
    next: value => console.log('[next]', value),
    complete: () => console.log('[complete]')
});

