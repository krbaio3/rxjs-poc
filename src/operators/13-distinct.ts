import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';


const numeros$ = of(1,1,1,1,2,3,4,1,2,4,4,4,5,3,5,1,2);

// si no aplicamos el distinct muestra todos los numeros
numeros$.pipe().subscribe(console.log);

console.log('==================================================');
// deja pasar los valores que no han sido emitidos antes
setTimeout(()=>{
    numeros$.pipe(
        distinct()
    ).subscribe(console.log);
},1000);

const numeros2$ = of<number|string>(1,1,'1',1,2,3,4,1,2,4,4,4,5,3,5,'1',2);

// ahora, tenemos un 1 en number y otro 1 en string, porque usa interiormente el operador
// de igualdad === para hacer las comparaciones.
setTimeout(()=>{
    console.log('==================================================');
    numeros2$.pipe(
        distinct()
    ).subscribe(console.log);
},2000);
