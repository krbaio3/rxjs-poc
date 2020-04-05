import { range } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const numeros$ = range(1,5);

// el tap hace caso omiso del return, no como los demas operadores
// importante para debuggear, puede hacer todo el flujo, simular errores, etc
numeros$.pipe(
    tap( x => console.log('antes', x)),
    map( value => value * 100),
    tap({
        next: value => console.log('despues',value)
    })
).subscribe(value => console.log('subs', value));


console.log('-----------------------------------------------');

// para debuggear es un ejemplo
setTimeout(()=>{
    numeros$.pipe(
        tap(x => {
            console.log('[antes]', x);
            // esto es ignorado como hemos dicho antes
            return 100000;
        }),
        map(value => value * 100),
        tap({
            next: value => console.log('[value]', value),
            complete: () => console.log('[complete]'),
        })
    ).subscribe(value => console.log('[subs]', value));
},2000);
