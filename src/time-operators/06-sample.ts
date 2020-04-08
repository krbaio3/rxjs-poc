import { fromEvent, interval } from 'rxjs';
import { sample } from 'rxjs/operators';

const interval$ = interval(1000);
const click$ = fromEvent(document, 'click');

/* El interval$ emite un valor, y luego el click$ emite tambien un valor, como esta asociado
* el observable interval$ a click$, el sample lo que hace es emitir el valor de inverval$
* cuando click$ dispara el evento. Si se ha emitido ya el valor, y yo hago varias emisiones del
* click$, solo se obtiene una emision*/

interval$.pipe(
    sample(click$)
).subscribe(console.log);
