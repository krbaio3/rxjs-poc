import { fromEvent, interval } from 'rxjs';
import { skip, takeUntil, tap } from 'rxjs/operators';

const  button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.querySelector('body').append(button);

const counter$ = interval(1000);
// Le add al clickBtn$ el operador skip, y con ese le indicamos el numero de eventos que
// queremos saltarnos antes de que se ejecute
const clickBtn$ = fromEvent(button, 'click').pipe(
    tap(()=>console.log('antes del skip')),
    skip(3),
    tap(()=>console.log('despues del skip'))
);

counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: value => console.log('[next]', value),
        complete: () => console.log('[complete]')
    });
