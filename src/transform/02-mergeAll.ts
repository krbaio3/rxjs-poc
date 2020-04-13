import { fromEvent, Observable, pipe } from 'rxjs';
import { debounceTime, filter, map, mergeAll, pluck } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    filter( value => value !== ''),
    map<string, Observable<any>>( value =>
        ajax.getJSON(`https://api.github.com/search/users?q=${value}`)
    ),
    mergeAll(),
    pluck('items')
).subscribe(console.log);

