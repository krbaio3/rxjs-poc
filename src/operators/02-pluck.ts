import { fromEvent, range } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyup$.pipe(
    map<KeyboardEvent, string>( event => event.code)
);

const keyupPluck$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target')
);

const keyupPluckAnidado$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')
);


keyup$.subscribe(console.log);
keyupPluckAnidado$.subscribe(value => console.log(value));
keyupCode$.subscribe(code => console.log('map', code));
keyupPluck$.subscribe(code => console.log('pluck', code));
