import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


const click$ = fromEvent( document, 'click');

/*Lanza los eventos del click en intervalos de tres segundos
Si en 1 segundo se emiten 5 clicks, y luego ninguno, a los
3 segundo del ultimo click se emite el valor, pero si en un
segundo se emiten 5 click, y a los dos segundos se emite el
ultimo, despues de 3 segundos de esta ultima emision, se emite
el valor*/
click$.pipe(
    debounceTime(3000)
).subscribe(console.log);

