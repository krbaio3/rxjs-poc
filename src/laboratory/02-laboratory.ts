import { fromEvent, Observable, Observer } from 'rxjs'
import { exhaustMap, filter, map, mergeMap, pluck, switchMap, tap } from 'rxjs/operators';
import { UserPass } from '../models/userPass';
import { peticionHttpLogin } from '../helpers/peticionHttpLogin';
import { AjaxResponse } from 'rxjs/ajax';

// Crear formulario
const form: HTMLFormElement = document.createElement('form');
const inputEmail: HTMLInputElement = document.createElement('input');
const br1: HTMLBRElement = document.createElement('br');
const br2: HTMLBRElement = document.createElement('br');
const inputPassword: HTMLInputElement = document.createElement('input');
const submitBtn: HTMLButtonElement = document.createElement('button');

// Styles

inputEmail.style.marginBottom = '20px';
inputPassword.style.marginBottom = '20px';

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Acceder';

form.append( inputEmail, br1, inputPassword, br2, submitBtn);

document.querySelector('body').append(form);

// Streams
const submitForm$: Observable<string> = fromEvent<Event>(form, 'submit')
    .pipe(
        tap<Event>((ev: Event) => ev.preventDefault()),
        map<Event, UserPass>( (ev: Event) => ({
            email: ev.target[0].value,
            password: ev.target[1].value
        })),
        /* Con el mergeMap si nos ponemos crazy a darle al boton de acceder, nos va
        * a devolver cada peticion, y en este caso, nos va a cambiar el token. Por eso,
        * el mejor operador para esto es el switchMap */
        // mergeMap<UserPass, Observable<string>>(peticionHttpLogin)
        /* El switchMap cancela las peticiones anteriores y se queda con la ultima  */
        // switchMap<UserPass, Observable<string>>(peticionHttpLogin)
        /* El exhaustMap ignora todas las peticiones anteriores hasta que se resuelva la
        * peticion que hay en curso*/
        exhaustMap<UserPass, Observable<string>>(peticionHttpLogin)
    );
submitForm$
    .subscribe(console.log);
