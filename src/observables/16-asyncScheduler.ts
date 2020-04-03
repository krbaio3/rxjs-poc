import { asyncScheduler } from 'rxjs';

// AsyncScheduler emulando un setTimeout

// Ejemplo basico con
const saludar = () => console.log('hola Mundo cruel');
asyncScheduler.schedule( saludar, 2000);

// Ejemplo usando la propiedad state
const saludar2 = (nombre) => console.log(`hola ${nombre}, bienvenido al Mundo cruel`);
asyncScheduler.schedule( saludar2, 5000, 'Jorge');

// En la propiedad delay solo podemos enviar un parametro, normalmente, ese parametro debe de
// ser un objeto
const obj = {
    nombre: 'Jorge',
    poder: 'Super Fuerza'
};
const saludar3 = (data) => console.log(`hola ${data.nombre}, tu superpoder es ${data.poder}`);
asyncScheduler.schedule( saludar3, 10000, obj);

