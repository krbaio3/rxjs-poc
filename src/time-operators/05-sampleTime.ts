import { asyncScheduler, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, pluck, sampleTime, throttleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>(document, 'click');

interface myEvent {
    x: number;
    y: number;
}
/* Es importante colocar correctamente el sampleTime, si se coloca delante o detras del
* `map` en este ejemplo, el resultado da igual, pero el consumo de memoria es distinto.
* De esta forma, se emite el valor cada dos segundos al `map`, si lo ponemos al reves,
* el `map` esta trabajando todo el rato para que el `sampleTime` deje pasar los valores
* cada 2 segundos*/
click$.pipe(
    sampleTime(2000),
    map<MouseEvent, myEvent>(({x, y}) => ({x, y}))
).subscribe(console.log);
