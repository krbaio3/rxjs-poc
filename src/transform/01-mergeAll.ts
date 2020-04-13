import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, Observable<any>>( event => {
        const texto = event.target['value'];
        return ajax.getJSON(`https://api.github.com/users/${texto}`);
    })
).subscribe(resp => resp.pipe(
    pluck('url')
).subscribe(console.log));

