
const url = 'https://api.github.com/users?per_page=5';

// Hacemos la prueba primero con el fetch de ES6 (camino feliz)
const fetchPromesa = fetch(url);

fetchPromesa
    .then(resp => resp.json())
    .then(console.log)
    .catch(console.error);

