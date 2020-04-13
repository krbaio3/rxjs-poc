import { of } from 'rxjs';
import { startWith } from 'rxjs/operators';


const numeros$ = of(1,2,3);

/* El of por defecto, es un operador sincrono, por lo que primero se ejecuta el
* operador startWith, con salida 0, y posteriormente los valores del of */
numeros$.pipe(
    startWith(0)
).subscribe(console.log);
