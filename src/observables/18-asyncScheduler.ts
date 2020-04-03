import { asyncScheduler, Subscription } from 'rxjs';

// AsyncScheduler emulando un setInterval, ejecutandose periodicamente en espacios de tiempo
// Unsubscribe con asyncScheduler

// NO puede ser una lambda function porque se usa el objeto this
// Devuelve una subscripcion
const subs: Subscription = asyncScheduler.schedule(function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
}, 3000, 0);

asyncScheduler.schedule(data => {
    subs.unsubscribe();
}, 6000);
