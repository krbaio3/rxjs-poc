import { forkJoin, interval, Observable, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';


const numeros$:Observable<number> = of(1,2,3,4);
const intervalo$:Observable<number> = interval(1000).pipe( take(3));
const letras$: Observable<string> = of('a','b','c').pipe(delay(3500));

// Se envia la respuesta en un array
forkJoin(
    numeros$,
    intervalo$,
    letras$,
).pipe().subscribe(console.log);

setTimeout(()=> {
    // Se envia como un objeto
    forkJoin({
        numeros$,
        intervalo$,
        letras$,
    }).pipe().subscribe(resp => {
        console.log(resp);
    });
}, 1000);

setTimeout(()=>{
    // Se envia como un objeto personalizado la salida
    forkJoin({
        numbers: numeros$,
        intervals: intervalo$,
        letters: letras$,
    }).pipe().subscribe(resp => {
        console.log(resp);
    });
},2000);
