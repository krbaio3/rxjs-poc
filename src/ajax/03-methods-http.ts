import { ajax } from 'rxjs/ajax';

// Es un servidor de pruebas que nos devuelve lo que le enviamos
const url = 'https://httpbin.org/delay/1';

const headers = {
    'Content-Type': 'application/json',
    'mi-token': 'bear mi-super-token'
};

/*
* Ejemplo de una peticion ajax GET y DELETE son iguales, solo admite
* los parametros `url` y `headers`
*/

ajax.get(url, headers).subscribe(data=> console.log('[PETICION GET]:', data));

/*
* Ejemplo de una peticion ajax POST, PUT, PATCH, son iguales, admiten tres campos,
* `url`, `body` y `headers`
*/

setTimeout(()=> {
    ajax.post(url, {
        id: 1,
        name: 'krbaio',
    }, headers).subscribe(data=> console.log('[PETICION POST]:', data));
},1000);

/*
* Otra forma de configurar las llamadas ajax
*/

setTimeout(()=> {
    ajax({
        url,
        headers,
        body:{
            id: 1,
            name: 'krbaio',
        },
        method: 'POST'
    }).subscribe(data=> console.log('[OTRA FORMA CONSTRUCCION AJAX]:', data));
},2000);
