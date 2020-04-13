import { of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';


const numeros$ = of(1,2,3);

/* El of por defecto, es un operador sincrono, por lo que primero se ejecuta el
* operador startWith, con salida 'a', 'b', 'c', posteriormente los valores del of,
* y despues de que termine de emitir los valores del of, ejecuta el endWith y completa
* la subscripcion. Da igual poner primero el starWith o al final, que se ejecutan en
* el orden que les corresponde */
numeros$.pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
).subscribe({
    next: value => console.log('siguiente [next]:', value),
    error: err => console.warn('error obs: ', err),
    complete: () => console.info('[completado]'),
});
