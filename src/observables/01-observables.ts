import { Observable, Observer } from 'rxjs';

export const observer: Observer<any> = {
    next: value => console.log('siguiente [next]:', value),
    error: err => console.warn('error obs: ', err),
    complete: () => console.info('completado'),
};

export const obs$ = new Observable( subscriber => {
    subscriber.next('Hola');
    subscriber.next('Mundo');

    // Forzar error
    // const a = undefined;
    // a.nombre = 'Tomas';

    // subscriber.error('muerto');

    subscriber.complete();

    subscriber.next('Muerte cerdo')
});

obs$.subscribe(observer);

