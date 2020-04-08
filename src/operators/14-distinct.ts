import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';

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
        nombre: 'Gohan'
    },
    {
        nombre: 'Krilin'
    },
    {
        nombre: 'Goku'
    },
    {
        nombre: 'Vegetto'
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
    distinct(personaje => personaje.nombre )
).subscribe(console.log);
