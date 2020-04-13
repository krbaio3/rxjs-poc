import { fromEvent, Observable } from 'rxjs';
import { mergeMap, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
body.append(textInput);

// Streams
const input$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>( textInput, 'keyup');

const url: string = 'https://httpbin.org/delay/1?arg=';

/* Con cada actualizacion del valor del input el mergeMap se subscribe al observable ajax, el cual
* devuelve la peticion resuelta, util cuando se quiera hacer un buscador predictivo, pero consume
* recursos y genera llamadas basura, es decir, una llamada por cada actualizacion, cosa que puede
* que solo nos interese cuando el usuario haya terminado de escribir */
input$.pipe(
    pluck<KeyboardEvent, string>('target', 'value'),
    mergeMap<string, Observable<string>>( (text: string) => ajax.getJSON(url + text))
).subscribe(console.log);
