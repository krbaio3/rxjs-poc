import { from, fromEvent, Observable, of, range } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';


range(1,10).pipe(
    filter( value => value % 2 === 0 )
).subscribe(console.log);

console.log('--------------------------------------');

range(20,30).pipe(
    filter( (value:number, index:number) => {
        console.log('index', index);
        return value % 2 === 0;
    })
).subscribe(console.log);

console.log('--------------------------------------');

setTimeout(() => {
    interface personaje {
        tipo: string;
        nombre: string;
    }
    const personajes: personaje[] = [
        {
            tipo: 'heroe',
            nombre: 'goku'
        },
        {
            tipo: 'villano',
            nombre: 'cell'
        },
        {
            tipo: 'villano',
            nombre: 'freezer'
        },
        {
            tipo: 'heroe',
            nombre: 'gohan'
        },
        {
            tipo: 'villano',
            nombre: 'piccolo'
        },
    ];

    const personajes$ = from(personajes).pipe(
        filter<personaje>((value:personaje) => value.tipo === 'heroe'),
        pluck('nombre')
    );

    personajes$.subscribe(console.log);

},2000);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map( event => event.code ),
        filter( key => key === 'Enter')
    )
    .subscribe(console.log);
