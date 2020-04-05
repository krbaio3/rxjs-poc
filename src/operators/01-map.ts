import { fromEvent, range } from 'rxjs';
import { map } from 'rxjs/operators';

// Si nos piden sacar los numeros del 1 al 5
range(1,5).subscribe(console.log);

console.log('------------------------------------------------------');

// Pero, si nos piden hacerlo del 10 al 50 podriamos hacer esto:
range(1,5).subscribe(value => console.log(value*10));

console.log('------------------------------------------------------');
// No es correcto hacer esta transformacion del value, porque si tenemos varias
// subscripciones por nuestro proyecto, llevaria tiempo modificar la salida
// Por eso se usan los operadores de rxjs

// El operador map, coge cada valor, y lo trata como queramos
range(1,5).pipe(
    map<number, number>(value => value * 10 )
).subscribe(console.log);


// Podemos subscribirnos al evento del teclado, y hacer el calculo con el retorno
// console.log('------------------------------------------------------');
// const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
// keyup$.subscribe(value => console.log('map', value.code));


// Pero usando el map, podemos imprimir el codigo directamente siendo tratado por map
console.log('------------------------------------------------------');
const keyup2$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup2$.pipe(
    map<KeyboardEvent, string>( event => event.code)
);

keyupCode$.subscribe(code => console.log('map', code));
