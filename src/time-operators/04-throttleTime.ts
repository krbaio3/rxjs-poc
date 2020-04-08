import { asyncScheduler, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, pluck, throttleTime } from 'rxjs/operators';

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
input$
    .pipe(
        // Le indicamos que queremos el primer elemento (leading), que es el
        // comportamiento por defecto, y el ultimo valor (trailing)
        throttleTime(1000, asyncScheduler, {
            leading: true,
            trailing: true
        }),
        pluck('target', 'value'),
        distinctUntilChanged(),
    )
    .subscribe(console.log);
