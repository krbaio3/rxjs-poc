import { from, of } from 'rxjs';
import { distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Goku'
    },
    {
        nombre: 'Vegeta'
    },
    {
        nombre: 'Piccolo'
    },
    {
        nombre: 'Goku'
    },
    {
        nombre: 'Goku'
    },
    {
        nombre: 'Goku'
    },
    {
        nombre: 'Vegeta'
    },
    {
        nombre: 'Vegeta'
    },
    {
        nombre: 'Trunks'
    },
];

// Le pasamos en los argumentos la propiedad de nuestro objeto que queramos comprobar
from(personajes).pipe(
    distinctUntilKeyChanged('nombre')
).subscribe(console.log);
