import { ajax } from 'rxjs/ajax';
import { map, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';const urlFake = 'https://api.github.com/users/per_page=5';

/*
Ahora hacemos la peticion http con el observable para recuparar los
usuarios. Podemos hacerlo de dos maneras,
con el map (`map(response => response.response)`) o con el pluck.
*/

ajax(url).pipe(
    pluck('response')
).subscribe(console.log);

setTimeout(()=>{
    console.log('========================================================');
    console.log('Espera 2 segundos para ver la salida del response pasada por el map');
    console.log('========================================================');
},1000);

setTimeout(() => {
ajax(url).pipe(
    map(response => response.response)
).subscribe(console.log);
},3000);
