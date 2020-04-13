import { fromEvent, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

const getInputStream = (element: HTMLElement): Observable<string> =>
    fromEvent<KeyboardEvent>(element, 'keyup')
        .pipe(
            pluck<KeyboardEvent, string>('target', 'value')
        );


export {
    getInputStream
}
