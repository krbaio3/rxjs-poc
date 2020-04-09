
const urlFake = 'https://api.github.com/users/per_page=5';

const manejaErrores = (response: Response) => {
    if ( !response.ok) {
       throw new Error(response.statusText)
    }
    return response
};

/*
Hacemos la prueba con el error y vemos que el error no lo captura
no sale en la consola, porque en el body sigue mandando un ReadableStream.
Tanto en el status (404) como en el ok (false) nos indican que no ha ido
bien, por lo que deberian de ser evaluados
*/
const fetchPromesaFake = fetch(urlFake);

fetchPromesaFake
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => console.warn(`[error]: ${error}`));

setTimeout(()=>{
    console.log('========================================================');
    console.log('Espera 2 segundos para ver la salida del response pasada por nuestra funcion manejaErrores');
    console.log('========================================================');
},1000);

/* Aqui vemos la diferencia de hacer el mismo codigo, previo paso por nuestra
* funcion custom de tratamiento de errores
*/

setTimeout(()=> {
    fetchPromesaFake
        .then(manejaErrores)
        .then(resp => resp.json())
        .then(console.log)
        .catch(error => console.warn(`[error]: ${error}`));
},3000);
