import { fromEvent, Observable } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
body.append(textInput);

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>( textInput, 'keyup');

const url: string = 'https://httpbin.org/delay/1?arg=';

/* Mismo ejemplo anterior, pero cambiando el mergeMap por un switchMap, lo que hace es que en vez de
* subscribirse a cada evento interno, cancela el anterior y se queda con el ultimo */
input$.pipe(
    pluck<KeyboardEvent, string>('target', 'value'),
    switchMap<string, Observable<string>>( (text: string) => ajax.getJSON(url + text))
).subscribe(console.log);
