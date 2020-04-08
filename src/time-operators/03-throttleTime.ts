import { fromEvent } from 'rxjs';
import { debounceTime, throttleTime } from 'rxjs/operators';


const click$ = fromEvent( document, 'click');

/*Emite el valor y luego se espera los 3 segundos. Son operadores muy ultiles para controlar
* las emisiones de obervables que realizan muchisimas emisiones*/
click$.pipe(
    throttleTime(3000)
).subscribe(console.log);

