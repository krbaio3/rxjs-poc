import { fromEvent, interval } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

interface myEvent {
    x: number;
    y: number;
}

/* El observable(click$) emite un valor, y empieza a contar a partir de esta emision
* el intervalo de tiempo que se le indica, emitiendo el auditTime el ultimo valor
* en ese intervalo, de click$. Pasado ese tiempo, la siguiente vez que click$ emita
* un valor, empiezan a contar otra vez el intervalo de tiempo, complentandose en el
* mismo momento que se completa click$ */

click$.pipe(
    map<MouseEvent, number>(({x}) => x),
    tap(t => console.log('[tap]',t)),
    auditTime(2000),
).subscribe(console.log);
