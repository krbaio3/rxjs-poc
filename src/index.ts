import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: err => console.warn('error obs: ', err),
    complete: () => console.info('completado'),
};

const obs$ = new Observable( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Forzar error
    // const a = undefined;
    // a.nombre = 'Tomas';

    // subscriber.error('muerto');

    subscriber.complete();

    subscriber.next('Muerte cerdo')
});


// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.error('error: ', error),
//     () => console.log('completado'),
// );

obs$.subscribe(observer);
