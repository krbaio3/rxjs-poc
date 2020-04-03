import { asyncScheduler, from, Observer, of, Subscription } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log(`[next]: ${value}`),
    error: err => console.warn(`[error]: ${err}`),
    complete: () => console.debug('completado'),
};

// From lo hace de uno en uno
const sourceFrom$ = from([1,2,3,4,5]);

// Of lo hace todo a la vez
const sourceOf$ = of([1,2,3,4,5]);

console.log('Emision de valores con from');
sourceFrom$.subscribe( observer );

console.log('Emision de valores con of');
sourceOf$.subscribe( observer );

// Si usamos es operador spread con un of, se "convierte" en un from
setTimeout(()=>{
    let source$ = of(...[1,2,3,4,5,6]);
    console.log('Emision de valores Of con operador spread de ES6');
    source$.subscribe(observer);
}, 3000);

// Salida al usar una cadena con el operador Of
setTimeout(()=>{
    let source$ = of('Jorge');
    console.log('Emision de cadena con operador Of');
    source$.subscribe(observer);
}, 4000);

// Salida al usar una cadena con el operador From
setTimeout(()=>{
    let source$ = from('Jorge');
    console.log('Emision de cadena con operador Of');
    source$.subscribe(observer);
}, 5000);

// Pasar un promesa a observable
setTimeout(()=> {
    let source$ = from (fetch('http://api.github.com/users/krbaio3'));
    source$.subscribe( async (resp) => {
        console.log(resp.ok);
        if( resp.ok) {
            // fetch devuelve un ReadableStream, que es una promesa, que se resuelve con
            // el metodo .json()
            // console.log(resp.json());
            const dataResp = await resp.json();
            console.log(dataResp);
        }
    })
}, 6000);

// Puede trabajar con la funciones generadores o iterables
setTimeout(()=> {

    let miGenerador = function*() {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    };

    let miIterable = miGenerador();

    // for(let i of miIterable) {
    //     console.log(i)
    // }

    console.log('-------------------------');

    from(miIterable).subscribe(observer);

}, 7000);
