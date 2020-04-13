import { UserPass } from '../models/userPass';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { catchError, pluck } from 'rxjs/operators';

const peticionHttpLogin: (userPass: UserPass) => Observable<string> = (userPass: UserPass) =>
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck<AjaxResponse, string>('response', 'token'),
            // Pasamos en caso de error el token xxx o el que queramos, incluso vacio
            catchError(err => of('xxx'))
        );

export {
    peticionHttpLogin
};
