import { fromEvent } from 'rxjs';
import { mapTo, pluck } from 'rxjs/operators';

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');

const keyupPluckAnidado$ = keyup$.pipe(
    pluck<KeyboardEvent, string>('target', 'baseURI')
);

const keyupMapTo$ = keyup$.pipe(
    mapTo<KeyboardEvent, string>('tecla presionada')
);

keyupPluckAnidado$.subscribe(value => console.log(value));
keyupMapTo$.subscribe(console.log);
